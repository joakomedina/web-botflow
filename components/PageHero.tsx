import Link from "next/link";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta
}: PageHeroProps) {
  return (
    <section className="py-14 md:py-18">
      <div className="container-shell">
        <div className="panel-card relative overflow-hidden p-8 md:p-11">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--color-primary)]/12 blur-3xl"
          />
          {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} className="mb-5" /> : null}
          <p className="inline-flex rounded-full border border-[color:var(--panel-border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
            {eyebrow}
          </p>
          <h1 className="text-balance mt-5 max-w-4xl text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
            {description}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="btn-base btn-primary px-5 py-3"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="btn-base btn-secondary px-5 py-3"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
