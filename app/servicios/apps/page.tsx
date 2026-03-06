import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("apps");

export const metadata: Metadata = {
  title: "Desarrollo de aplicaciones y herramientas internas",
  description:
    "Diseño de aplicaciones web y herramientas internas para centralizar operaciones, clientes y datos del negocio.",
  alternates: {
    canonical: "/servicios/apps"
  }
};

export default function AppsPage() {
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
          { label: "Apps" }
        ]}
        primaryCta={{ label: "Definir MVP", href: "/contacto" }}
        secondaryCta={{ label: "Ver otros servicios", href: "/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="Aplicaciones orientadas a operación"
              description="Construcción de software útil para resolver procesos concretos de negocio."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Paneles de gestión para equipos.",
                "Portales de cliente con acceso centralizado.",
                "MVPs para validar soluciones digitales.",
                "Interfaces para procesos específicos."
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
              description="Arquitectura escalable para crecimiento por fases."
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
        title="Si tu operación depende de hojas, chats y tareas manuales, una app puede ordenar todo el flujo."
        description="Definimos el alcance mínimo útil y lo llevamos a producción con base técnica preparada para crecer."
        buttonText="Hablar sobre una aplicación"
        buttonLink="/contacto"
      />
    </>
  );
}
