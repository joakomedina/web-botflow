import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  readingMinutes: number;
  coverImage?: string;
};

export type BlogPost = BlogPostSummary & {
  markdownContent: string;
  htmlContent: string;
};

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

function listMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter(
      (fileName) =>
        fileName.endsWith(".md") &&
        !fileName.startsWith("_") &&
        fileName.toLowerCase() !== "readme.md"
    );
}

function toIsoDate(value: unknown): string {
  const fallback = new Date().toISOString();

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? fallback : value.toISOString();
  }

  if (typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
  }

  return fallback;
}

function toTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function stripMarkdown(rawContent: string): string {
  return rawContent
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#>*_~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toExcerpt(frontmatterExcerpt: unknown, rawContent: string): string {
  if (typeof frontmatterExcerpt === "string" && frontmatterExcerpt.trim()) {
    return frontmatterExcerpt.trim();
  }

  const cleanText = stripMarkdown(rawContent);
  if (cleanText.length <= 180) {
    return cleanText;
  }

  return `${cleanText.slice(0, 177).trimEnd()}...`;
}

function calculateReadingMinutes(rawContent: string): number {
  const words = rawContent
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(BLOG_DIRECTORY, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);

  const title =
    typeof data.title === "string" && data.title.trim() ? data.title.trim() : slug.replaceAll("-", " ");
  const publishedAt = toIsoDate(data.date);
  const excerpt = toExcerpt(data.excerpt, content);
  const tags = toTags(data.tags);
  const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined;
  const readingMinutes = calculateReadingMinutes(content);
  const htmlContent = marked.parse(content) as string;

  return {
    slug,
    title,
    excerpt,
    publishedAt,
    tags,
    readingMinutes,
    coverImage,
    markdownContent: content,
    htmlContent
  };
}

export function getAllPosts(): BlogPostSummary[] {
  return listMarkdownFiles()
    .map((fileName) => parsePost(fileName))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      tags: post.tags,
      readingMinutes: post.readingMinutes,
      coverImage: post.coverImage
    }));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const fileName = `${safeSlug}.md`;
  const filePath = path.join(BLOG_DIRECTORY, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parsePost(fileName);
}
