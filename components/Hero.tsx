import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative py-18 md:py-24">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-[color:var(--panel-border)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
              Desarrollo + automatización + IA
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight text-[color:var(--color-dark)] md:text-5xl lg:text-6xl">
              Construyo sistemas digitales que automatizan tu negocio
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--color-muted)]">
              Webs, aplicaciones y agentes de inteligencia artificial que eliminan tareas manuales,
              conectan tus herramientas y permiten escalar sin aumentar complejidad.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="btn-base btn-primary px-6 py-3"
              >
                Hablemos de tu proyecto
              </Link>
              <Link
                href="/servicios"
                className="btn-base btn-secondary px-6 py-3"
              >
                Ver servicios
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
                Propuesta central
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[color:var(--color-dark)]">
                No solo hago webs. Diseño sistemas digitales que trabajan para el negocio.
              </p>
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]">
                <div className="relative h-[210px] w-full md:h-[250px]">
                  <Image
                    src="/images/hero/automatizaciones-n8n-agente.jpg"
                    alt="Vista de automatizaciones y agentes IA con n8n"
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    priority
                    className="object-contain object-center p-2"
                  />
                </div>
              </div>
              <div className="mt-8 grid gap-4 text-sm text-[color:var(--color-muted)]">
                <div className="rounded-xl border border-[color:var(--panel-border)] bg-white/90 p-4">
                  Estructura de procesos + ejecución técnica en una sola línea de trabajo.
                </div>
                <div className="rounded-xl border border-[color:var(--panel-border)] bg-white/90 p-4">
                  Integraciones, automatización y canales como WhatsApp conectados al flujo real.
                </div>
                <div className="rounded-xl border border-[color:var(--panel-border)] bg-white/90 p-4">
                  Dominio principal:{" "}
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
