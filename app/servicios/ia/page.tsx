import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("ia");

export const metadata: Metadata = {
  title: "Implementaciones de inteligencia artificial para negocio",
  description:
    "Asistentes y agentes IA integrados en procesos reales para mejorar atención, clasificación, contenido y eficiencia operativa.",
  alternates: {
    canonical: "/servicios/ia"
  }
};

export default function IAPage() {
  if (!service) {
    return null;
  }

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.title}
        description={service.shortDescription}
        primaryCta={{ label: "Evaluar caso de IA", href: "/contacto" }}
        secondaryCta={{ label: "Ver servicios", href: "/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="IA aplicada con criterio operativo"
              description="Sin humo ni promesas vacías: implementaciones conectadas al día a día del equipo."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Asistentes para atención y respuesta inicial.",
                "Clasificación y priorización de solicitudes.",
                "Generación de contenido con supervisión operativa.",
                "Agentes conectados a sistemas y canales reales."
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel-card p-7">
            <SectionTitle
              title="Capacidades incluidas"
              description="Diseño de flujos donde IA, datos y procesos trabajan juntos."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <CTASection
        title="La IA funciona cuando está conectada al proceso. Ese es el foco de implementación."
        description="Diseñamos una solución realista, medible y mantenible para tu operación."
        buttonText="Hablar de implementación IA"
        buttonLink="/contacto"
      />
    </>
  );
}
