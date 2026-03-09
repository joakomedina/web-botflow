"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, navigationLinksEn, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
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

function toSpanishPath(pathname: string): string {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }

  return pathname;
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const normalizedPath = toSpanishPath(pathname);
  const navigationItems = isEnglish ? navigationLinksEn : navigationLinks;
  const localizedNavigationLinks = navigationItems.map((item) => ({
    ...item,
    href: isEnglish ? toEnglishPath(item.href) : item.href
  }));
  const languageSwitchHref = isEnglish ? toSpanishPath(pathname) : toEnglishPath(pathname);
  const languageSwitchLabel = isEnglish ? "ES" : "EN";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--panel-border)]/70 bg-white/90 backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between">
        <Logo withTagline />
        <nav className="hidden items-center gap-2 md:flex" aria-label={isEnglish ? "Main" : "Principal"}>
          {localizedNavigationLinks.map((item) => {
            const isActive = normalizedPath === item.href.replace(/^\/en/, "") || pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-pill rounded-xl border border-transparent px-4 py-2 text-sm font-semibold",
                  isActive ? "nav-pill-active" : "text-[color:var(--color-dark)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={languageSwitchHref}
            className="rounded-xl border border-[color:var(--panel-border)] bg-white px-3 py-2 text-xs font-semibold tracking-[0.08em] text-[color:var(--color-dark)] transition hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
          >
            {languageSwitchLabel}
          </Link>
          <Link
            href={`https://wa.me/${siteConfig.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary px-5 py-2.5"
          >
            {isEnglish ? "WhatsApp" : "WhatsApp"}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--panel-border)] bg-white text-[color:var(--color-dark)] md:hidden"
          aria-expanded={menuOpen}
          aria-label={isEnglish ? "Open menu" : "Abrir menú"}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-5 bg-current transition",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3.5 h-0.5 w-5 bg-current transition",
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              )}
            />
          </span>
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-[color:var(--panel-border)] bg-white md:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            <Link
              href={languageSwitchHref}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border border-[color:var(--panel-border)] bg-white px-4 py-3 text-center text-xs font-semibold tracking-[0.08em] text-[color:var(--color-dark)]"
            >
              {languageSwitchLabel}
            </Link>
            {localizedNavigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "nav-pill rounded-xl border border-transparent px-4 py-3 text-sm font-semibold",
                  normalizedPath === item.href.replace(/^\/en/, "") || pathname === item.href
                    ? "nav-pill-active"
                    : "bg-[color:var(--color-bg)] text-[color:var(--color-dark)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${siteConfig.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-base btn-primary px-4 py-3 text-center"
            >
              {isEnglish ? "Contact on WhatsApp" : "Contactar por WhatsApp"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
