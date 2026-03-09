import Link from "next/link";
import { Reveal } from "./Reveal";

type AliadoTecnologicoCardProps = {
  badge?: string;
  title?: string;
  intro?: string;
  body?: string;
  recommendedLabel?: string;
  price?: string;
  includesTitle?: string;
  includedItems?: string[];
  buttonLabel?: string;
  buttonHref?: string;
};

const defaultIncludedItems = [
  "Web profesional para tu negocio",
  "Sistema para captar clientes",
  "Primera automatización de procesos",
  "Diagnóstico tecnológico del negocio"
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.14" />
      <path
        d="M7.5 12.2L10.6 15.2L16.5 9.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AliadoTecnologicoCard({
  badge = "¿No sabes por dónde empezar?",
  title = "Tu aliado tecnológico para empezar a digitalizar tu negocio",
  intro = "Muchos profesionales saben que necesitan mejorar su presencia digital, pero no saben por dónde empezar ni qué herramientas usar.",
  body = "Si eres autónomo o estás empezando tu negocio, te ayudo a construir la base digital que necesitas para empezar a trabajar con sistemas y automatizar tareas sin complicarte con la tecnología.",
  recommendedLabel = "Servicio de inicio recomendado",
  price = "Desde 1200 €",
  includesTitle = "Incluye",
  includedItems = defaultIncludedItems,
  buttonLabel = "Ver cómo puedo ayudarte →",
  buttonHref = "/aliado-tecnologico"
}: AliadoTecnologicoCardProps) {
  return (
    <section className="py-16">
      <div className="container-shell">
        <Reveal>
          <article className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-7 shadow-sm md:p-10">
            <p className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
              {badge}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)]">
              {intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)]">
              {body}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
              {recommendedLabel}
            </p>
            <p className="mt-2 inline-flex rounded-full border border-indigo-300 bg-white/90 px-4 py-1.5 text-sm font-semibold text-indigo-800">
              {price}
            </p>
            <div className="mt-6 rounded-2xl border border-indigo-200/70 bg-white/85 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-700">
                {includesTitle}
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-[color:var(--color-dark)] md:grid-cols-2">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href={buttonHref} className="btn-base btn-primary mt-7 w-fit gap-2 px-6 py-3">
              {buttonLabel}
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
