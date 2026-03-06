"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--panel-border)]/70 bg-white/90 backdrop-blur-md">
      <div className="container-shell flex h-20 items-center justify-between">
        <Logo withTagline />
        <nav className="hidden items-center gap-2 md:flex" aria-label="Principal">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href;
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
            href={`https://wa.me/${siteConfig.whatsappRaw}`}
            className="btn-base btn-primary px-5 py-2.5"
          >
            WhatsApp
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--panel-border)] bg-white text-[color:var(--color-dark)] md:hidden"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
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
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "nav-pill rounded-xl border border-transparent px-4 py-3 text-sm font-semibold",
                  pathname === item.href
                    ? "nav-pill-active"
                    : "bg-[color:var(--color-bg)] text-[color:var(--color-dark)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${siteConfig.whatsappRaw}`}
              onClick={() => setMenuOpen(false)}
              className="btn-base btn-primary px-4 py-3 text-center"
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
