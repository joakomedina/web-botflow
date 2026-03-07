import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/blog",
  "/servicios",
  "/servicios/desarrollo-web",
  "/servicios/apps",
  "/servicios/automatizaciones",
  "/servicios/ia",
  "/proyectos",
  "/sobre-mi",
  "/contacto",
  "/aliado-tecnologico"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogPosts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  return [...staticRoutes, ...blogRoutes];
}
