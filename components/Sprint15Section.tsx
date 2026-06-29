import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

type Sprint15SectionProps = {
  eyebrow?: string;
  title?: string;
  tagline?: string;
  description?: string;
  includes?: string[];
  buttonLabel?: string;
  buttonHref?: string;
};

const defaultIncludes = [
  "Diagnóstico",
  "Diseño",
  "Desarrollo",
  "Formación",
  "Puesta en marcha"
];

export function Sprint15Section({
  eyebrow = "El producto",
  title = "Sprint 15",
  tagline = "El producto con el que empiezan todos nuestros clientes.",
  description = "En solo 15 días implantamos una automatización que elimina uno de los mayores cuellos de botella de tu empresa.",
  includes = defaultIncludes,
  buttonLabel = "Solicitar diagnóstico gratuito",
  buttonHref = "/contacto"
}: Sprint15SectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <div className="panel-card relative overflow-hidden p-8 md:p-12">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl"
          />
          <SectionTitle eyebrow={eyebrow} title={title} tagline={tagline} description={description} />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {includes.map((item, index) => (
              <Reveal key={item} delay={0.06 + index * 0.05}>
                <div className="flex items-center gap-2 rounded-xl border border-[color:var(--panel-border)] bg-white p-4 text-sm font-medium text-[color:var(--color-dark)]">
                  <span aria-hidden className="text-[color:var(--color-accent)]">
                    ✔
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <Link href={buttonHref} className="btn-base btn-primary mt-9 px-6 py-3">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
