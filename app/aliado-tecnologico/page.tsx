import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

const painPoints = [
  "Pérdida de tiempo en tareas manuales.",
  "Contactos desorganizados.",
  "Oportunidades que se pierden.",
  "Demasiadas herramientas sin coordinación."
];

const solutionBlocks = [
  {
    title: "Web profesional inicial",
    description:
      "Landing profesional para explicar tu servicio y captar clientes desde una base clara.",
    includes: ["Página web tipo landing", "Formulario de contacto", "SEO básico", "Despliegue"],
    goal: "Tener presencia digital clara y profesional."
  },
  {
    title: "Sistema de captación de contactos",
    description: "Cuando alguien contacta desde la web, el lead queda organizado y trazable.",
    includes: ["Llega al correo", "Se registra el contacto", "Se organiza el lead"],
    goal: "No perder oportunidades."
  },
  {
    title: "Automatización inicial simple",
    description: "Implementación de una automatización inicial para eliminar tareas repetitivas.",
    includes: [
      "Formulario → email automático",
      "Contacto → registro automático",
      "Respuesta automática inicial"
    ],
    goal: "Reducir trabajo operativo desde el primer día."
  },
  {
    title: "Sesión estratégica de diagnóstico",
    description: "Sesión para definir mapa de mejoras y próximos sistemas a implementar.",
    includes: [
      "Análisis de procesos del negocio",
      "Oportunidades de automatización",
      "Ruta de mejoras tecnológicas"
    ],
    goal: "Contar con un plan de evolución tecnológica."
  }
];

const idealFor = [
  "Coaches",
  "Consultores",
  "Profesionales independientes",
  "Autónomos",
  "Pequeños negocios"
];

const notIncluded = [
  "Automatizaciones complejas",
  "Desarrollo de aplicaciones",
  "Agentes de IA",
  "Integraciones avanzadas"
];

export const metadata: Metadata = {
  title: "Soy tu aliado tecnológico",
  description:
    "Servicio para autónomos y pequeños negocios que necesitan organizar su base digital y empezar a automatizar procesos sin complicarse.",
  alternates: {
    canonical: "/aliado-tecnologico"
  },
  openGraph: {
    title: "Soy tu aliado tecnológico | botflow.top",
    description:
      "Servicio para autónomos y pequeños negocios que necesitan organizar su base digital y empezar a automatizar procesos sin complicarse.",
    images: [
      {
        url: "/open-graph-soy-tu-aliado-tecnologico.jpeg",
        width: 1376,
        height: 768,
        alt: "Soy tu aliado tecnológico - botflow.top"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soy tu aliado tecnológico | botflow.top",
    description:
      "Servicio para autónomos y pequeños negocios que necesitan organizar su base digital y empezar a automatizar procesos sin complicarse.",
    images: ["/open-graph-soy-tu-aliado-tecnologico.jpeg"]
  }
};

export default function AliadoTecnologicoPage() {
  return (
    <>
      <section className="py-14 md:py-18">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 md:p-11">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <Breadcrumbs
                    items={[
                      { label: "Inicio", href: "/" },
                      { label: "Servicios", href: "/servicios" },
                      { label: "Tu aliado tecnologico" }
                    ]}
                    className="mb-5"
                  />
                  <p className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                    Servicio paquetizado
                  </p>
                  <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl">
                    Soy tu aliado tecnológico
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                    Un servicio pensado para autónomos y pequeños negocios que necesitan organizar
                    su base digital y empezar a automatizar procesos sin complicarse con la
                    tecnología.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="#contacto-paquete"
                      className="btn-base btn-primary px-6 py-3"
                    >
                      Agendar sesión inicial
                    </Link>
                    <Link
                      href={`https://wa.me/${siteConfig.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-secondary px-6 py-3"
                    >
                      Solicitar información
                    </Link>
                  </div>
                  <Link
                    href="/"
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-dark)] underline underline-offset-4 transition hover:text-[color:var(--color-primary)]"
                  >
                    Volver al inicio
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white/75">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/services/soy-tu-aliado-tecnologico.jpeg"
                      alt="Servicio Tu aliado tecnológico"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Problema"
            title="Muchos profesionales usan herramientas digitales, pero no tienen un sistema que conecte todo."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <article className="panel-card p-5">
                  <p className="text-sm leading-relaxed text-[color:var(--color-dark)]">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Solución"
            title="Construimos la base digital del negocio en cuatro bloques"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {solutionBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.06}>
                <article className="panel-card h-full p-6">
                  <h2 className="text-2xl font-semibold text-[color:var(--color-dark)]">{block.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {block.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-dark)]">
                    {block.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-4 py-3 text-sm text-[color:var(--color-muted)]">
                    <strong className="text-[color:var(--color-dark)]">Objetivo:</strong> {block.goal}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-[color:var(--color-muted)]">
            Nota: este paquete incluye una sola automatización simple inicial.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="panel-card p-6">
              <SectionTitle eyebrow="Ideal para" title="Este servicio está pensado para" />
              <div className="flex flex-wrap gap-2">
                {idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-3 py-1 text-sm font-medium text-[color:var(--color-dark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="panel-card p-6">
              <SectionTitle eyebrow="Qué no incluye" title="Límites del paquete inicial" />
              <ul className="space-y-2 text-sm text-[color:var(--color-dark)]">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-shell">
          <Reveal>
            <div className="panel-card p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
                Precio
              </p>
              <p className="mt-3 text-4xl font-bold text-[color:var(--color-dark)] md:text-5xl">
                Desde 1200 €
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto-paquete" className="scroll-mt-28 py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <article className="panel-card p-7">
              <SectionTitle
                eyebrow="Siguiente paso"
                title="Cuéntame tu caso y te propongo un arranque claro"
                description="Rellena el formulario y te respondo con una recomendación concreta para implementar este paquete."
              />
              <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
                {[
                  "Respuesta inicial por WhatsApp o email.",
                  "Validación de encaje del paquete para tu negocio.",
                  "Siguientes pasos y tiempos estimados."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] p-4">
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  Si prefieres contacto inmediato, también puedes escribir directo por WhatsApp.
                </p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary mt-4 px-4 py-2 text-sm"
                >
                  Abrir WhatsApp
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <ContactForm
              contextLabel="Paquete Tu aliado tecnológico"
              defaultMessage="Quiero implementar el paquete Tu aliado tecnológico en mi negocio."
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Construyamos la base digital de tu negocio"
        description="Un único objetivo: ordenar tu sistema digital y convertir visitas en oportunidades reales."
        buttonText="Completar formulario"
        buttonLink="#contacto-paquete"
      />
    </>
  );
}
