import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const strengths = [
  "Perfil híbrido entre negocio, desarrollo y automatización.",
  "Capacidad de unir estrategia y ejecución técnica sin fricción.",
  "Enfoque en soluciones útiles, no en tecnología por moda."
];

const aboutImageRatio = 1200 / 581;

export function AboutSection() {
  return (
    <section className="py-18">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionTitle
              eyebrow="Sobre mí"
              title="Trabajo en la intersección entre desarrollo, automatización e inteligencia artificial."
              description="Soy Joaquin Arvelo y diseño soluciones que no solo se ven bien: reducen trabajo operativo, ordenan procesos y amplían la capacidad del negocio."
            />
            <p className="text-pretty text-base leading-relaxed text-[color:var(--color-muted)]">
              Mi objetivo es construir sistemas digitales completos para negocios que ya no quieren
              más herramientas sueltas, sino una infraestructura práctica para operar mejor.
            </p>
            <Link href="/sobre-mi" className="btn-base btn-secondary mt-6 gap-2 px-5 py-3">
              Conocer enfoque completo
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="panel-card p-8">
              <div
                className="relative mb-6 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]"
                style={{ aspectRatio: aboutImageRatio.toString() }}
              >
                <Image
                  src="/images/about/joaquin-arvelo.jpg"
                  alt="Joaquin Arvelo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain object-center p-1"
                />
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--color-dark)]">Diferenciales</h3>
              <ul className="mt-5 space-y-4">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--color-muted)]"
                  >
                    <span className="mt-2 block h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
