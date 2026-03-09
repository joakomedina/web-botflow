"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks, navigationLinksEn, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

function toEnglishPath(pathname: string): string {
  if (pathname === "/") {
    return "/en";
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return pathname;
  }

  return `/en${pathname}`;
}

export function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const navItems = isEnglish ? navigationLinksEn : navigationLinks;
  const localizedNavItems = navItems.map((item) => ({
    ...item,
    href: isEnglish ? toEnglishPath(item.href) : item.href
  }));

  return (
    <footer className="border-t border-[color:var(--panel-border)] bg-white/85 py-10">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo withTagline />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
              {isEnglish
                ? "Architecture and implementation of digital systems to reduce manual workload and connect business processes with useful technology."
                : "Arquitectura e implementación de sistemas digitales para reducir trabajo manual y conectar procesos de negocio con tecnología útil."}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-dark)]">
              {isEnglish ? "Navigation" : "Navegación"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
              {localizedNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[color:var(--color-primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-dark)]">
              {isEnglish ? "Contact" : "Contacto"}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[color:var(--color-primary)]">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[color:var(--color-primary)]"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[color:var(--color-primary)]"
                >
                  {siteConfig.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[color:var(--panel-border)] pt-5 text-xs text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} {siteConfig.owner}.{" "}
          {isEnglish ? "All rights reserved." : "Todos los derechos reservados."}
        </div>
      </div>
    </footer>
  );
}
