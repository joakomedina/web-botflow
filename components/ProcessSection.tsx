import { processSteps } from "@/data/process";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function ProcessSection() {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Proceso"
          title="Cómo trabajo para convertir una necesidad en una solución operativa"
          description="El enfoque prioriza ejecución y resultado, no complejidad innecesaria."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <article className="panel-card h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--color-secondary)]">
                  Paso {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--color-dark)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

