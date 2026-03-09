import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";

type HeroContent = {
  badge: string;
  title: string;
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

type HeroProps = {
  content?: HeroContent;
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

export function Hero({ content = defaultContent }: HeroProps) {
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
