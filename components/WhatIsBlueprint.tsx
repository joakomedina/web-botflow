type WhatIsBlueprintProps = {
  locale?: "es" | "en";
};

const copy = {
  es: {
    title: "¿Qué es Blueprint?",
    paragraphs: [
      "Blueprint es nuestra metodología para comprender cómo funciona un negocio antes de proponer cualquier solución tecnológica.",
      "Creemos que automatizar el proceso equivocado solo hace que un problema ocurra más rápido."
    ]
  },
  en: {
    title: "What is Blueprint?",
    paragraphs: [
      "Blueprint is our methodology for understanding how a business actually works before proposing any technology solution.",
      "We believe automating the wrong process just makes a problem happen faster."
    ]
  }
};

export function WhatIsBlueprint({ locale = "es" }: WhatIsBlueprintProps) {
  const t = copy[locale];

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
        {t.title}
      </p>
      {t.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
