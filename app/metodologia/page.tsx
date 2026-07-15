import type { Metadata } from "next";
import Link from "next/link";
import { MetodologiaLeadForm } from "@/components/MetodologiaLeadForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Cómo evitar invertir en la solución equivocada",
  description:
    "La metodología de Botflowstudio: por qué analizamos la operación antes de proponer tecnología, y cómo eso cambia el resultado para tu empresa.",
  alternates: {
    canonical: "/metodologia"
  }
};

const metodologiaSteps = [
  {
    number: "01",
    label: "Gratuita",
    title: "Descubrimiento Blueprint",
    description:
      "Comprendemos cómo funciona tu empresa antes de proponer nada. Analizamos personas, procesos, información, herramientas y tecnología.",
    note: "Sin compromiso. Sin vender tecnología."
  },
  {
    number: "02",
    label: "Primer servicio de pago",
    title: "Blueprint Operativo",
    description:
      "Documentamos la operación real, identificamos los problemas con evidencias y priorizamos el orden lógico de mejora.",
    note: "Mapa operativo · Problemas reales · Impacto · Roadmap"
  },
  {
    number: "03",
    label: "Implantación",
    title: "Sprint 15",
    description:
      "En 15 días resolvemos el cuello de botella de mayor impacto. Una automatización concreta que elimina tiempo perdido desde el primer día.",
    note: "El Blueprint se descuenta íntegro si contratas este servicio."
  },
  {
    number: "04",
    label: "Evolución continua",
    title: "Roadmap",
    description:
      "Con la empresa mapeada y el primer sprint implantado, continuamos resolviendo el siguiente problema de mayor impacto. Sprint tras sprint.",
    note: "No se construye todo de golpe. Se evoluciona con orden."
  }
];

const blueprintAnalisis = [
  "Personas",
  "Procesos",
  "Información",
  "Herramientas",
  "Tecnología",
  "Cuellos de botella",
  "Oportunidades"
];

const blueprintEntregables = [
  {
    title: "Mapa operativo",
    description: "Cómo funciona hoy, de verdad, tu empresa. No cómo crees que funciona."
  },
  {
    title: "Problemas reales",
    description: "Con evidencias, no opiniones. Cada problema documentado y verificado."
  },
  {
    title: "Impacto de cada problema",
    description: "Tiempo, errores, costes y riesgos. Cuánto está perdiendo la empresa ahora mismo."
  },
  {
    title: "Roadmap priorizado",
    description: "Un orden lógico de evolución. No una lista de deseos, sino un plan con criterio."
  }
];

export default function MetodologiaPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Nuestra metodología
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl lg:text-6xl">
              Cómo evitar invertir en la{" "}
              <span className="text-[color:var(--color-primary)]">solución equivocada.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">
              Muchos clientes llegan pensando que necesitan una aplicación. Otros creen que necesitan
              una IA. Otros una automatización.
            </p>
            <p className="mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-[color:var(--color-dark)]">
              Nuestra experiencia nos ha enseñado que muchas veces el verdadero problema es otro.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#metodo" className="btn-base btn-primary px-6 py-3">
                Ver la metodología
              </a>
              <a href="#descarga" className="btn-base btn-secondary px-6 py-3">
                Descargar presentación
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LA REVELACIÓN */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-[color:var(--color-dark)] px-8 py-14 md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                La revelación
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-snug text-white md:text-4xl">
                Nadie te contacta porque quiera una automatización.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                Te contacta porque tiene un problema en su empresa que está costando tiempo y dinero.
                La tecnología puede ser parte de la solución. Pero no siempre.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { wrong: "Necesito una app.", reality: "Hay un proceso manual que nadie ha mapeado." },
                  { wrong: "Necesito una IA.", reality: "Hay información dispersa que nadie ha organizado." },
                  { wrong: "Necesito automatizar esto.", reality: "Hay un cuello de botella que primero hay que entender." }
                ].map((item) => (
                  <div
                    key={item.wrong}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-sm font-semibold text-red-400">
                      &ldquo;{item.wrong}&rdquo;
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      ↓ Lo que hay detrás
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">{item.reality}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 p-6">
                <p className="text-base font-semibold leading-relaxed text-white">
                  La tecnología no siempre resuelve el problema.
                </p>
                <p className="mt-1 text-base leading-relaxed text-white/70">
                  A veces solo automatiza un proceso que ya estaba mal diseñado. Por eso nunca
                  empezamos desarrollando tecnología.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LA DIFERENCIA */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              La diferencia
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Dos formas de responder a lo mismo.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-red-100 bg-red-50 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-500">
                  La mayoría
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    <span className="font-semibold">Cliente:</span> &ldquo;Necesito una app.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    <span className="font-semibold">Proveedor:</span> &ldquo;Perfecto.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    Se desarrolla la aplicación.
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl border border-red-200 bg-red-100 px-4 py-3 font-semibold text-red-700">
                    El problema sigue existiendo.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-emerald-50 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  Botflowstudio
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    <span className="font-semibold">Cliente:</span> &ldquo;Necesito una app.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    Analizamos la operación y entendemos el problema real.
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    Diseñamos la solución correcta.
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-3 font-semibold text-emerald-700">
                    El problema desaparece.
                  </p>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-emerald-600">
                  Nunca recomendamos una solución tecnológica hasta comprender si el problema es
                  realmente tecnológico.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NUESTRO MÉTODO — 4 pasos */}
      <section id="metodo" className="scroll-mt-24 py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Nuestro método
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Todo empieza por comprender. Después se diseña. Después se implanta.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-0">
            {metodologiaSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="relative flex gap-6 pb-8">
                  {/* Línea vertical conectora */}
                  {index < metodologiaSteps.length - 1 && (
                    <div className="absolute left-7 top-14 h-full w-px bg-[color:var(--panel-border)]" />
                  )}

                  {/* Número / badge */}
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-bold text-white">
                    {step.number}
                  </div>

                  {/* Contenido */}
                  <div className="panel-card flex-1 p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-[color:var(--color-dark)] md:text-2xl">
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--color-secondary)]">
                        {step.label}
                      </span>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted)]">
                      {step.description}
                    </p>
                    <p className="mt-3 text-xs font-medium text-[color:var(--color-primary)]">
                      {step.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EL BLUEPRINT — detalle */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--color-accent)] bg-gradient-to-br from-white to-[color:var(--color-accent)]/5 p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                El primer servicio de pago
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
                El Blueprint Operativo
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">
                Una sola pregunta guía todo el análisis:{" "}
                <strong className="text-[color:var(--color-dark)]">
                  ¿Cuánto tiempo y dinero pierde hoy la empresa por cómo está organizada?
                </strong>
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {/* Qué analizamos */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-primary)]">
                    Qué analizamos
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {blueprintAnalisis.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--panel-border)] bg-white px-4 py-1.5 text-sm font-medium text-[color:var(--color-dark)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Qué recibe */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-primary)]">
                    Qué recibe el cliente
                  </p>
                  <ul className="mt-4 space-y-4">
                    {blueprintEntregables.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="mt-0.5 text-[color:var(--color-accent)]">✔</span>
                        <div>
                          <p className="text-sm font-semibold text-[color:var(--color-dark)]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-[color:var(--color-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-[color:var(--color-dark)] px-6 py-5 text-sm text-white/80">
                <strong className="text-white">Ejemplo de roadmap resultante:</strong>{" "}
                Eliminar el papel → Implantar la aplicación → Automatizar comunicaciones →
                Inteligencia artificial
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POLÍTICA COMERCIAL */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Política comercial
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Tu inversión está protegida.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Reveal delay={0.04}>
              <div className="panel-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                  Paso 1
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  Descubrimiento Blueprint
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  Comprendemos tu empresa, identificamos dónde se pierde más tiempo.
                </p>
                <p className="mt-4 text-2xl font-bold text-[color:var(--color-primary)]">Gratuita</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="panel-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                  Paso 2
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  Blueprint Operativo
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  El diagnóstico completo: mapa, problemas, impacto y roadmap.
                </p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--color-dark)]">
                  Servicio de pago
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border-2 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
                  Garantía
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  No pagas dos veces.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  Si tras el Blueprint contratas el Sprint 15, el coste del Blueprint se descuenta
                  íntegro del proyecto.
                </p>
                <p className="mt-4 text-sm font-medium text-[color:var(--color-dark)]">
                  Primero inviertes en comprender correctamente tu empresa. Después en resolver.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — DESCARGA */}
      <section id="descarga" className="scroll-mt-24 py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-[color:var(--color-dark)] px-8 py-14 md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Presentación completa
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-snug text-white md:text-4xl">
                ¿Quieres conocer nuestra metodología completa?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                Deja tu email y descarga la presentación que usamos con cada cliente antes de empezar
                cualquier proyecto.
              </p>

              <div className="mt-9 max-w-xl">
                <MetodologiaLeadForm />
              </div>

              <p className="mt-5 text-xs text-white/40">
                Sin spam. Solo la presentación en PDF.
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-white/50">
                  ¿Prefieres hablar directamente?
                </p>
                <Link
                  href="/contacto"
                  className="btn-base btn-light mt-3 inline-flex px-6 py-3"
                >
                  Solicitar Descubrimiento Blueprint gratuito
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
