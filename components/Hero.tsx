import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";

type HeroContent = {
  badge: string;
  title: string;
  descriptionLead?: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  centralTag: string;
  centralTitle: string;
  centralItems: string[];
  domainLabel: string;
  imageAlt: string;
};

type HeroDiagram = {
  beforeLabel: string;
  beforeSteps: string[];
  afterLabel: string;
  afterSteps: string[];
  afterNote: string;
  closingLine: string;
};

type HeroProps = {
  content?: HeroContent;
  diagram?: HeroDiagram;
};

const defaultContent: HeroContent = {
  badge: "Desarrollo + automatización + IA",
  title: "Construyo sistemas digitales que automatizan tu negocio",
  description:
    "Webs, aplicaciones y agentes de inteligencia artificial que eliminan tareas manuales, conectan tus herramientas y permiten escalar sin aumentar complejidad.",
  primaryCtaLabel: "Hablemos de tu proyecto",
  primaryCtaHref: "/contacto",
  secondaryCtaLabel: "Ver servicios",
  secondaryCtaHref: "/servicios",
  centralTag: "Propuesta central",
  centralTitle: "No solo hago webs. Diseño sistemas digitales que trabajan para el negocio.",
  centralItems: [
    "Estructura de procesos + ejecución técnica en una sola línea de trabajo.",
    "Integraciones, automatización y canales como WhatsApp conectados al flujo real."
  ],
  domainLabel: "Dominio principal:",
  imageAlt: "Vista de automatizaciones y agentes IA con n8n"
};

export function Hero({ content = defaultContent, diagram }: HeroProps) {
  return (
    <section className="relative py-18 md:py-24">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--panel-border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
              {content.badge}
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight text-[color:var(--color-dark)] md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--color-muted)]">
              {content.descriptionLead ? (
                <strong className="font-semibold text-[color:var(--color-dark)]">
                  {content.descriptionLead}{" "}
                </strong>
              ) : null}
              {content.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={content.primaryCtaHref}
                className="btn-base btn-primary px-6 py-3"
              >
                {content.primaryCtaLabel}
              </Link>
              <Link
                href={content.secondaryCtaHref}
                className="btn-base btn-secondary px-6 py-3"
              >
                {content.secondaryCtaLabel}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="panel-card relative overflow-hidden p-8 md:p-10">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[color:var(--color-secondary)]/15 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl"
              />
              {diagram ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                    {diagram.beforeLabel}
                  </p>
                  <div className="mt-3">
                    {diagram.beforeSteps.map((step, index) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className="w-full rounded-xl border-2 border-red-200 bg-red-50 px-3 py-2.5 text-center text-sm font-semibold text-red-700">
                          {step}
                        </div>
                        {index < diagram.beforeSteps.length - 1 ? (
                          <span aria-hidden className="my-1 text-lg leading-none text-red-400">
                            ↓
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <div className="my-6 border-t-2 border-dashed border-[color:var(--panel-border)]" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                    {diagram.afterLabel}
                  </p>
                  <div className="mt-3">
                    {diagram.afterSteps.map((step, index) => (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className={
                            index === diagram.afterSteps.length - 1
                              ? "w-full rounded-xl border-2 border-[color:var(--color-accent)] bg-[color:var(--color-accent)] px-3 py-2.5 text-center text-sm font-bold text-white shadow-md"
                              : "w-full rounded-xl border-2 border-emerald-200 bg-emerald-50 px-3 py-2.5 text-center text-sm font-semibold text-emerald-700"
                          }
                        >
                          {step}
                        </div>
                        <span
                          aria-hidden
                          className="my-1 animate-bounce text-lg leading-none text-emerald-500"
                        >
                          ↓
                        </span>
                      </div>
                    ))}
                    <p className="rounded-full border-2 border-emerald-300 bg-emerald-50 px-4 py-2 text-center text-sm font-semibold text-emerald-700">
                      {diagram.afterNote}
                    </p>
                  </div>
                  <p className="mt-6 text-center text-sm font-semibold text-[color:var(--color-dark)]">
                    {diagram.closingLine}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
                    {content.centralTag}
                  </p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--color-dark)]">
                    {content.centralTitle}
                  </p>
                  <div className="relative mt-6 overflow-hidden rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]">
                    <div className="relative h-[210px] w-full md:h-[250px]">
                      <Image
                        src="/images/hero/automatizaciones-n8n-agente.jpg"
                        alt={content.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        priority
                        className="object-contain object-center p-2"
                      />
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 text-sm text-[color:var(--color-muted)]">
                    {content.centralItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[color:var(--panel-border)] bg-white/90 p-4"
                      >
                        {item}
                      </div>
                    ))}
                    <div className="rounded-xl border border-[color:var(--panel-border)] bg-white/90 p-4">
                      {content.domainLabel}{" "}
                      <a
                        href={siteConfig.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[color:var(--color-primary)]"
                      >
                        {siteConfig.domain}
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
