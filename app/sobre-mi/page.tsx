import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre mí | Joaquin Arvelo",
  description:
    "Conoce el enfoque de Joaquin Arvelo para diseñar e implementar sistemas digitales que combinan web, automatización e IA."
};

const aboutImageRatio = 1200 / 581;

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        title="Joaquin Arvelo"
        description="Trabajo con una visión integrada entre negocio y tecnología para construir sistemas digitales que realmente reduzcan carga operativa."
        primaryCta={{ label: "Hablar conmigo", href: "/contacto" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="panel-card p-8">
              <div
                className="relative mb-6 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]"
                style={{ aspectRatio: aboutImageRatio.toString() }}
              >
                <Image
                  src="/images/about/joaquin-arvelo.jpg"
                  alt="Joaquin Arvelo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain object-center p-1"
                />
              </div>
              <SectionTitle
                title="Mi enfoque de trabajo"
                description="No vendo piezas sueltas. Diseño y ejecuto sistemas completos orientados a resultados."
              />
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
                Mi perfil combina desarrollo, automatización, datos e inteligencia artificial. Eso me
                permite entender el problema de negocio, diseñar la arquitectura y ejecutar la
                implementación sin perder coherencia entre estrategia y tecnología.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                La prioridad no es desplegar más herramientas, sino crear un sistema que simplifique
                operación, mejore tiempos y permita escalar con control.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="panel-card p-8">
              <SectionTitle title="Principios" description="Criterios que guían cada proyecto." />
              <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
                {[
                  "Claridad en el problema antes de definir la tecnología.",
                  "Soluciones mantenibles y listas para crecer.",
                  "Automatización con impacto medible.",
                  "IA aplicada a uso real, no decorativo.",
                  "Comunicación directa y ejecución iterativa."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>
      <CTASection
        title="Si quieres pasar de tareas manuales a un sistema digital bien diseñado, podemos trabajarlo."
        description="Te ayudo a definir una ruta de implementación realista para tu negocio."
        buttonText="Contactar ahora"
        buttonLink="/contacto"
      />
    </>
  );
}
