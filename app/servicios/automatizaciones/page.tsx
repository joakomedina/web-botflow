import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("automatizaciones");

export const metadata: Metadata = {
  title: "Automatización de procesos e integraciones",
  description:
    "Automatización de flujos e integraciones entre herramientas para reducir tareas repetitivas y errores operativos.",
  alternates: {
    canonical: "/servicios/automatizaciones"
  }
};

export default function AutomatizacionesPage() {
  if (!service) {
    return null;
  }

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Automatizaciones" }
        ]}
        primaryCta={{ label: "Automatizar procesos", href: "/contacto" }}
        secondaryCta={{ label: "Ver proyectos", href: "/proyectos" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="Qué tipo de procesos se automatizan"
              description="Priorizando operaciones de alto impacto en tiempo y consistencia."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Captura y actualización automática de datos.",
                "Sincronización entre herramientas de venta, soporte y operaciones.",
                "Notificaciones y seguimiento interno sin fricción.",
                "Procesos repetitivos eliminados del trabajo manual."
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
              description="Flujos diseñados con control, trazabilidad y mantenimiento simple."
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
        title="Automatizar no es solo conectar apps: es rediseñar el flujo para que el negocio funcione mejor."
        description="Analizamos dónde se pierde tiempo y construimos automatizaciones con impacto operativo real."
        buttonText="Solicitar revisión de procesos"
        buttonLink="/contacto"
      />
    </>
  );
}
