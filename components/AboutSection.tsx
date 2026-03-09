import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type AboutSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  paragraph1?: string;
  paragraph2?: string;
  buttonLabel?: string;
  buttonHref?: string;
  strengthsTitle?: string;
  strengths?: string[];
  imageAlt?: string;
};

const defaultStrengths = [
  "Visión humana y de negocio antes de definir tecnología.",
  "Más de 7 años diseñando sistemas digitales y automatizaciones.",
  "Acompañamiento práctico para profesionales, autónomos y pequeñas empresas."
];

const aboutImageRatio = 1200 / 581;

export function AboutSection({
  eyebrow = "Sobre mí",
  title = "Tecnología con propósito, enfocada en personas y resultados.",
  description = "Soy Joaquin Arvelo. Mi enfoque combina psicología, negocio y tecnología para construir sistemas digitales que realmente simplifican el trabajo.",
  paragraph1 = "Después de un proceso de reinvención profesional como migrante venezolano en España, aprendí que crecer no es solo implementar herramientas: es construir una base digital clara que acompañe el proceso real de cada negocio.",
  paragraph2 = "También aprendí algo esencial: crecer no se hace solo. Por eso ofrezco mis servicios, para acompañarte en la construcción de sistemas que te ayuden a avanzar con claridad.",
  buttonLabel = "Conocer mi enfoque",
  buttonHref = "/sobre-mi",
  strengthsTitle = "Diferenciales",
  strengths = defaultStrengths,
  imageAlt = "Joaquin Arvelo"
}: AboutSectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <p className="text-pretty text-base leading-relaxed text-[color:var(--color-muted)]">
              {paragraph1}
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--color-muted)]">
              {paragraph2}
            </p>
            <Link href={buttonHref} className="btn-base btn-secondary mt-6 gap-2 px-5 py-3">
              {buttonLabel}
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
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain object-center p-1"
                />
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--color-dark)]">{strengthsTitle}</h3>
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
