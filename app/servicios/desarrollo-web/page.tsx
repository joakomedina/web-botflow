import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("desarrollo-web");

export const metadata: Metadata = {
  title: "Servicio de desarrollo web profesional",
  description:
    "Diseño y desarrollo de webs orientadas a negocio con estructura SEO, rendimiento optimizado y foco en conversión."
};

export default function DesarrolloWebPage() {
  if (!service) {
    return null;
  }

  return (
    <>
      <PageHero
        eyebrow="Servicio"
        title={service.title}
        description={service.shortDescription}
        primaryCta={{ label: "Solicitar propuesta", href: "/contacto" }}
        secondaryCta={{ label: "Volver a servicios", href: "/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="Qué resuelve este servicio"
              description="Ideal para negocios que necesitan una presencia digital sólida y enfocada en captación de oportunidades."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Webs lentas o desordenadas que no convierten.",
                "Mensajes poco claros para el cliente ideal.",
                "Falta de estructura para posicionar servicios en buscadores.",
                "Dependencia de plantillas sin estrategia."
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
              description="Implementación limpia y escalable con enfoque en negocio."
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
        title="Si necesitas una web que realmente apoye tu operación comercial, este servicio es el punto de partida."
        description="Diseñamos una estructura clara para comunicar valor, atraer demanda cualificada y facilitar el contacto."
        buttonText="Iniciar proyecto web"
        buttonLink="/contacto"
      />
    </>
  );
}

