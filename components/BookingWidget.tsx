import { siteConfig } from "@/lib/site";

type BookingWidgetProps = {
  locale?: "es" | "en";
};

const copy = {
  es: {
    title: "Escoge un momento que se ajuste a ti",
    subtitle: "Primera sesión sin coste.",
    expectationTitle: "¿Qué ocurre durante el Descubrimiento Blueprint?",
    bullets: [
      "Entenderemos cómo funciona vuestra operativa.",
      "Identificaremos dónde se pierde más tiempo.",
      "Valoraremos si realmente tiene sentido automatizar algún proceso."
    ],
    honesty:
      "No es una llamada comercial ni una demostración. Si al terminar creo que no puedo aportar valor, te lo diré con total sinceridad."
  },
  en: {
    title: "Book your Strategic Session",
    subtitle: "First session, no cost.",
    expectationTitle: "What happens during the Strategic Session?",
    bullets: [
      "We'll understand how your operation actually works.",
      "We'll identify where the most time is being lost.",
      "We'll assess whether automating a process genuinely makes sense."
    ],
    honesty:
      "This isn't a sales call or a demo. If by the end I don't think I can add value, I'll tell you honestly."
  }
};

export function BookingWidget({ locale = "es" }: BookingWidgetProps) {
  const t = copy[locale];

  return (
    <div className="panel-card overflow-hidden p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-[color:var(--color-dark)]">{t.title}</h2>
      <p className="mt-1 text-sm font-medium text-[color:var(--color-primary)]">{t.subtitle}</p>

      <div className="mt-6 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] p-5">
        <p className="text-sm font-semibold text-[color:var(--color-dark)]">{t.expectationTitle}</p>
        <ul className="mt-3 space-y-2">
          {t.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
              <span className="text-[color:var(--color-accent)]">✔</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{t.honesty}</p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-[color:var(--panel-border)]">
        <iframe
          src={siteConfig.bookingUrl}
          title={t.title}
          className="h-[920px] w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
