import Link from "next/link";
import { navigationLinks, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--panel-border)] bg-white/85 py-10">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo withTagline />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
              Arquitectura e implementación de sistemas digitales para reducir trabajo manual y
              conectar procesos de negocio con tecnología útil.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-dark)]">
              Navegación
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
              {navigationLinks.map((item) => (
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
              Contacto
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
          © {new Date().getFullYear()} {siteConfig.owner}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

