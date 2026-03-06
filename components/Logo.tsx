import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  withTagline?: boolean;
};

export function Logo({ className, withTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl p-1 transition hover:opacity-90",
        className
      )}
      aria-label="Ir al inicio"
    >
      <Image src="/logo-botflow.svg" alt="Logo de botflow.top" width={36} height={36} priority />
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-wide text-[color:var(--color-dark)]">
          {siteConfig.brand}
        </span>
        {withTagline ? (
          <span className="mt-1 text-xs text-[color:var(--color-muted)]">Sistemas digitales</span>
        ) : null}
      </span>
    </Link>
  );
}

