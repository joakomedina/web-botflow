type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false
}: SectionTitleProps) {
  const alignment = centered ? "mx-auto text-center" : "";

  return (
    <header className={`mb-10 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-[color:var(--panel-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}

