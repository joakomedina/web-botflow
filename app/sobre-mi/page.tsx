import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre mí | Joaquin Arvelo",
  description:
    "Conoce el enfoque de Joaquin Arvelo para diseñar e implementar sistemas digitales que combinan estrategia, automatización e IA.",
  alternates: {
    canonical: "/sobre-mi"
  }
};

const aboutImageRatio = 1200 / 581;

export default function SobreMiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre mí"
        title="Joaquin Arvelo"
        description="Trabajo con una visión integrada entre personas, negocio y tecnología para construir sistemas digitales que realmente faciliten el trabajo."
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
                title="Tecnología con propósito"
                description="No se trata solo de implementar herramientas: se trata de construir sistemas que tengan sentido para quienes los utilizan."
              />
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
                Mi formación original es en psicología. Durante años trabajé entendiendo cómo las
                personas toman decisiones, enfrentan problemas y construyen cambios en sus vidas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                Más tarde, como migrante venezolano en España, tuve que reinventarme
                profesionalmente. Fue un proceso largo de aprendizaje en el que me formé en
                tecnología, análisis de datos y desarrollo de soluciones digitales.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                Hoy cuento con más de 7 años de experiencia en el sector tecnológico, diseñando
                sistemas digitales, automatizaciones y herramientas que ayudan a negocios y
                profesionales a trabajar de forma más eficiente.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">
                Ese proceso me enseñó algo central en mi forma de trabajar: nadie crece solo. Por
                eso mi enfoque no se basa solo en entregar tecnología, sino en acompañar procesos y
                construir soluciones útiles, sostenibles y alineadas con la realidad de cada negocio.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="panel-card p-8">
              <SectionTitle
                title="Cómo traduzco esto en trabajo real"
                description="Tecnología clara, aplicada y orientada a resultados."
              />
              <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
                {[
                  "Entender primero el problema de negocio y después elegir la tecnología.",
                  "Simplificar procesos para liberar tiempo operativo real.",
                  "Diseñar sistemas mantenibles y escalables desde una base sólida.",
                  "Acompañar a profesionales, autónomos y pequeñas empresas en su crecimiento digital.",
                  "Aplicar automatización e IA con criterio práctico, no decorativo."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] p-4">
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  Este enfoque impulsó la creación del servicio{" "}
                  <strong className="font-semibold text-[color:var(--color-dark)]">
                    Tu aliado tecnológico
                  </strong>
                  : una base digital pensada para acompañar a quienes están empezando a ordenar su
                  sistema de trabajo.
                </p>
                <Link href="/aliado-tecnologico" className="btn-base btn-primary mt-4 px-4 py-2 text-xs md:text-sm">
                  Ver servicio
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      <CTASection
        title="Si quieres construir una base digital clara y útil para tu negocio, podemos trabajarlo."
        description="Mi objetivo es ayudarte a crear sistemas que simplifiquen procesos y te permitan crecer con más control."
        buttonText="Contactar ahora"
        buttonLink="/contacto"
      />
    </>
  );
}
