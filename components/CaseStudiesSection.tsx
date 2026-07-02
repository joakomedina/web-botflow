import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type CaseStudiesSectionProps = {
  caseStudies: CaseStudy[];
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function CaseStudiesSection({
  caseStudies,
  eyebrow = "Casos reales",
  title = "No enseñamos proyectos. Enseñamos problemas resueltos.",
  description = "Cada caso responde a la misma lógica: un proceso que costaba tiempo, resuelto con automatización.",
  buttonLabel = "Solicitar diagnóstico gratuito",
  buttonHref = "/contacto",
  beforeLabel = "Antes",
  afterLabel = "Después"
}: CaseStudiesSectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <Reveal key={caseStudy.tag} delay={index * 0.07}>
              <article className="panel-card flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                  {caseStudy.tag}
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-red-600">{beforeLabel}</p>
                <p className="mt-2 text-pretty text-base font-medium italic leading-relaxed text-[color:var(--color-dark)]">
                  “{caseStudy.before}”
                </p>
                <span aria-hidden className="my-3 self-center text-lg leading-none text-[color:var(--color-muted)]">
                  ↓
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">{afterLabel}</p>
                <p className="mt-2 text-pretty text-base font-medium italic leading-relaxed text-[color:var(--color-dark)]">
                  “{caseStudy.after}”
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href={buttonHref} className="btn-base btn-primary px-6 py-3">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
