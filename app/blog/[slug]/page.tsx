import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const formatter = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title
            }
          ]
        : undefined
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-14 md:py-18">
      <div className="container-shell">
        <div className="panel-card p-7 md:p-10">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
            {formatter.format(new Date(post.publishedAt))} · {post.readingMinutes} min de lectura
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl">
            {post.title}
          </h1>
          {post.tags.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-3 py-1 text-xs font-medium text-[color:var(--color-dark)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          {post.coverImage ? (
            <div className="mt-7 overflow-hidden rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          ) : null}
          <article
            className="blog-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
          <div className="mt-9">
            <Link href="/blog" className="btn-base btn-primary px-5 py-3">
              Volver al blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
