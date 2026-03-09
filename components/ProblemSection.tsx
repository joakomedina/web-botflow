import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type ProblemSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  painPoints?: string[];
  highlight?: string;
};

const defaultPainPoints = [
  "Demasiadas tareas manuales en operaciones diarias.",
  "Herramientas desconectadas que generan duplicidad.",
  "Procesos lentos para atención, seguimiento y ventas.",
  "Tecnología aislada que no aporta impacto de negocio."
];

export function ProblemSection({
  eyebrow = "Problema",
  title = "Muchas empresas ya tienen herramientas. Lo que no tienen es un sistema.",
  description = "Cuando cada pieza trabaja por separado, el equipo termina cubriendo manualmente lo que debería estar automatizado.",
  painPoints = defaultPainPoints,
  highlight = "El problema no es la falta de herramientas. Es la falta de sistema."
}: ProblemSectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.05}>
              <article className="panel-card h-full p-6">
                <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{point}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.24}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-cyan-50 px-6 py-5">
            <p className="text-lg font-semibold text-[color:var(--color-dark)]">
              {highlight}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
