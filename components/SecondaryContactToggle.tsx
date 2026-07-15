import type { ReactNode } from "react";

type SecondaryContactToggleProps = {
  children: ReactNode;
  locale?: "es" | "en";
};

export function SecondaryContactToggle({ children, locale = "es" }: SecondaryContactToggleProps) {
  const label =
    locale === "en" ? "Prefer to write to us first?" : "¿Prefieres escribirnos primero?";

  return (
    <div>
      <p className="pb-6 text-center text-sm font-medium text-[color:var(--color-secondary)]">
        {label}
      </p>
      {children}
    </div>
  );
}
