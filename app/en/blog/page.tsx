import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog on automation, web, and applied AI",
  description:
    "Practical articles about web development, process automation, and applied AI for business operations.",
  alternates: {
    canonical: "/en/blog"
  }
};

const formatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

export default function BlogEnPage() {
  const posts = getAllPosts("en");

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical insights to digitize and automate your business"
        description="Articles on digital strategy, technical implementation, and high-impact decisions for operational growth."
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Blog" }]}
      />

      <section className="pb-18">
        <div className="container-shell">
          {posts.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.04}>
                  <article className="panel-card flex h-full flex-col p-7">
                    {post.coverImage ? (
                      <div className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 48vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    ) : null}
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                      {formatter.format(new Date(post.publishedAt))} · {post.readingMinutes} min
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-dark)]">
                      <Link
                        href={`/en/blog/${post.slug}`}
                        className="transition hover:text-[color:var(--color-primary)]"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {post.excerpt}
                    </p>
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
                    <Link
                      href={`/en/blog/${post.slug}`}
                      className="btn-base btn-primary mt-6 w-fit px-4 py-2 text-sm"
                    >
                      Read article
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <article className="panel-card p-8">
              <h2 className="text-2xl font-semibold text-[color:var(--color-dark)]">
                Blog content coming soon
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--color-muted)]">
                The infrastructure is ready for Markdown-based posts. Add your English content in
                `content/blog/en/`.
              </p>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
