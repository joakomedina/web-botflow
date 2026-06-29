import Link from "next/link";
import { Reveal } from "./Reveal";

type GuaranteeSectionProps = {
  eyebrow?: string;
  leadIn?: string;
  highlight?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function GuaranteeSection({
  eyebrow = "Nuestra garantía",
  leadIn = "Si no vemos una oportunidad real de recuperar tiempo en tu empresa,",
  highlight = "te lo diremos.",
  description = "No vendemos automatizaciones que no aporten valor.",
  buttonLabel = "Solicitar diagnóstico gratuito",
  buttonHref = "/contacto"
}: GuaranteeSectionProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-dark)] p-8 text-center text-white md:p-16">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[color:var(--color-accent)]/25 blur-3xl"
            />
            <div className="relative">
              <p className="mx-auto inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                {eyebrow}
              </p>
              <p className="mx-auto mt-7 max-w-3xl text-balance text-2xl font-semibold leading-tight md:text-4xl">
                {leadIn}{" "}
                <span className="text-[color:var(--color-accent)]">{highlight}</span>
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
                {description}
              </p>
              <Link href={buttonHref} className="btn-base btn-light mt-8 px-6 py-3">
                {buttonLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
