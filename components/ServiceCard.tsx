import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const iconClass = "h-6 w-6 text-[color:var(--color-primary)]";

  switch (icon) {
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 20H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.4 11.1L15.6 6.9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.4 12.9L15.6 17.1" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
          <path d="M12 3L4 8V16L12 21L20 16V8L12 3Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const visibleCapabilities = service.capabilities.slice(0, 2);

  return (
    <article className="panel-card flex h-[360px] flex-col p-4 md:h-[390px] md:p-5">
      <div className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--panel-border)]">
        <div className="relative h-[96px] w-full md:h-[110px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-primary)]/8">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="text-lg font-semibold text-[color:var(--color-dark)]">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
        {service.shortDescription}
      </p>
      <ul className="mt-3 space-y-1.5 text-xs text-[color:var(--color-dark)] md:text-sm">
        {visibleCapabilities.map((capability) => (
          <li key={capability} className="flex items-start gap-2">
            <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>
      <Link
        href={service.ctaHref}
        className="btn-base btn-service mt-auto w-fit gap-2 px-4 py-2"
      >
        {service.ctaLabel}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
