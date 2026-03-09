import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type SolutionSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: string[];
};

const defaultItems = [
  "Arquitectura clara y mantenible",
  "Integraciones alineadas al flujo de negocio",
  "IA aplicada a tareas operativas concretas"
];

export function SolutionSection({
  eyebrow = "Solución",
  title = "Diseño sistemas digitales que convierten procesos dispersos en operaciones más simples y escalables.",
  description = "Combino desarrollo web, aplicaciones, automatización, integraciones e IA para que la tecnología tenga impacto real en tiempo, calidad y capacidad operativa.",
  items = defaultItems
}: SolutionSectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <div className="panel-card relative overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--color-secondary)]/15 blur-3xl"
          />
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((item, index) => (
              <Reveal key={item} delay={0.1 + index * 0.06}>
                <div className="rounded-xl border border-[color:var(--panel-border)] bg-white p-5 text-sm font-medium text-[color:var(--color-dark)]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
