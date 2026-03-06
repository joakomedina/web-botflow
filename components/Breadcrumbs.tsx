import Link from "next/link";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--color-muted)]">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-[color:var(--color-muted)]/75">
                  /
                </span>
              ) : null}
              {item.href && !isCurrent ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    "text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(isCurrent ? "font-semibold text-[color:var(--color-dark)]" : "")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
