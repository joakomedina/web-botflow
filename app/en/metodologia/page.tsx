import type { Metadata } from "next";
import Link from "next/link";
import { MetodologiaLeadForm } from "@/components/MetodologiaLeadForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How to avoid investing in the wrong solution",
  description:
    "The Botflowstudio methodology: why we analyse operations before proposing technology, and how that changes the outcome for your business.",
  alternates: {
    canonical: "/en/metodologia"
  }
};

const metodologiaSteps = [
  {
    number: "01",
    label: "Free",
    title: "Strategic Session",
    description:
      "We understand how your company works before proposing anything. We analyse people, processes, information, tools and technology.",
    note: "No commitment. No selling technology."
  },
  {
    number: "02",
    label: "First paid service",
    title: "Operational Blueprint",
    description:
      "We document the real operation, identify problems with evidence and prioritise the logical order of improvement.",
    note: "Operational map · Real problems · Impact · Roadmap"
  },
  {
    number: "03",
    label: "Implementation",
    title: "Sprint 15",
    description:
      "In 15 days we solve the highest-impact bottleneck. A concrete automation that eliminates wasted time from day one.",
    note: "The Blueprint cost is fully discounted if you hire this service."
  },
  {
    number: "04",
    label: "Continuous evolution",
    title: "Roadmap",
    description:
      "With the company mapped and the first sprint implemented, we continue solving the next highest-impact problem. Sprint after sprint.",
    note: "Not everything at once. Evolution with a clear order."
  }
];

const blueprintAnalisis = [
  "People",
  "Processes",
  "Information",
  "Tools",
  "Technology",
  "Bottlenecks",
  "Opportunities"
];

const blueprintEntregables = [
  {
    title: "Operational map",
    description: "How your company actually works today. Not how you think it works."
  },
  {
    title: "Real problems",
    description: "With evidence, not opinions. Every problem documented and verified."
  },
  {
    title: "Impact of each problem",
    description: "Time, errors, costs and risks. How much the company is losing right now."
  },
  {
    title: "Prioritised roadmap",
    description: "A logical order of evolution. Not a wish list, but a plan with clear criteria."
  }
];

export default function MetodologiaEnPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Our methodology
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl lg:text-6xl">
              How to avoid investing in the{" "}
              <span className="text-[color:var(--color-primary)]">wrong solution.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)]">
              Many clients arrive thinking they need an app. Others believe they need AI. Others an
              automation.
            </p>
            <p className="mt-3 max-w-2xl text-lg font-semibold leading-relaxed text-[color:var(--color-dark)]">
              Our experience has taught us that many times the real problem is something else.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#method" className="btn-base btn-primary px-6 py-3">
                See the methodology
              </a>
              <a href="#download" className="btn-base btn-secondary px-6 py-3">
                Download presentation
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE INSIGHT */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-[color:var(--color-dark)] px-8 py-14 md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                The insight
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-snug text-white md:text-4xl">
                Nobody contacts you because they want an automation.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                They contact you because they have a problem in their company that is costing time
                and money. Technology may be part of the solution. But not always.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { wrong: "I need an app.", reality: "There is a manual process nobody has mapped." },
                  { wrong: "I need AI.", reality: "There is scattered information nobody has organised." },
                  { wrong: "I need to automate this.", reality: "There is a bottleneck that first needs to be understood." }
                ].map((item) => (
                  <div
                    key={item.wrong}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-sm font-semibold text-red-400">
                      &ldquo;{item.wrong}&rdquo;
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      ↓ What lies behind it
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">{item.reality}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 p-6">
                <p className="text-base font-semibold leading-relaxed text-white">
                  Technology does not always solve the problem.
                </p>
                <p className="mt-1 text-base leading-relaxed text-white/70">
                  Sometimes it only automates a process that was already poorly designed. That is why
                  we never start by developing technology.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              The difference
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Two ways of responding to the same thing.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-red-100 bg-red-50 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-500">
                  Most providers
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    <span className="font-semibold">Client:</span> &ldquo;I need an app.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    <span className="font-semibold">Provider:</span> &ldquo;Perfect.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    The application is developed.
                  </p>
                  <p className="px-2 text-center text-lg text-red-400">↓</p>
                  <p className="rounded-xl border border-red-200 bg-red-100 px-4 py-3 font-semibold text-red-700">
                    The problem still exists.
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
                    <span className="font-semibold">Client:</span> &ldquo;I need an app.&rdquo;
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    We analyse the operation and understand the real problem.
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl bg-white px-4 py-3 text-[color:var(--color-dark)]">
                    We design the correct solution.
                  </p>
                  <p className="px-2 text-center text-lg text-emerald-500">↓</p>
                  <p className="rounded-xl border border-emerald-200 bg-emerald-100 px-4 py-3 font-semibold text-emerald-700">
                    The problem disappears.
                  </p>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-emerald-600">
                  We never recommend a technology solution until we understand whether the problem is
                  genuinely technological.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR METHOD — 4 steps */}
      <section id="method" className="scroll-mt-24 py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Our method
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Everything starts with understanding. Then design. Then implementation.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-0">
            {metodologiaSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="relative flex gap-6 pb-8">
                  {index < metodologiaSteps.length - 1 && (
                    <div className="absolute left-7 top-14 h-full w-px bg-[color:var(--panel-border)]" />
                  )}
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-bold text-white">
                    {step.number}
                  </div>
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

      {/* THE BLUEPRINT — detail */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border-2 border-[color:var(--color-accent)] bg-gradient-to-br from-white to-[color:var(--color-accent)]/5 p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                The first paid service
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
                The Operational Blueprint
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">
                One question guides the entire analysis:{" "}
                <strong className="text-[color:var(--color-dark)]">
                  How much time and money is the company losing today due to how it is organised?
                </strong>
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-primary)]">
                    What we analyse
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

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--color-primary)]">
                    What the client receives
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
                <strong className="text-white">Example roadmap:</strong>{" "}
                Eliminate paper → Implement the application → Automate communications →
                Artificial intelligence
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMERCIAL POLICY */}
      <section className="py-16">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Commercial policy
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-[color:var(--color-dark)] md:text-4xl">
              Your investment is protected.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Reveal delay={0.04}>
              <div className="panel-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                  Step 1
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  Strategic Session
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  We understand your company and identify where the most time is being lost.
                </p>
                <p className="mt-4 text-2xl font-bold text-[color:var(--color-primary)]">Free</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="panel-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-secondary)]">
                  Step 2
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  Operational Blueprint
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  The complete diagnosis: map, problems, impact and roadmap.
                </p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--color-dark)]">
                  Paid service
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border-2 border-[color:var(--color-accent)] bg-[color:var(--color-accent)]/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
                  Guarantee
                </p>
                <p className="mt-2 text-lg font-semibold text-[color:var(--color-dark)]">
                  You don&apos;t pay twice.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  If after the Blueprint you hire Sprint 15, the Blueprint cost is fully discounted
                  from the project.
                </p>
                <p className="mt-4 text-sm font-medium text-[color:var(--color-dark)]">
                  First invest in understanding your company correctly. Then in solving it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="scroll-mt-24 py-16">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-[color:var(--color-dark)] px-8 py-14 md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Full presentation
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-snug text-white md:text-4xl">
                Want to know our complete methodology?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                Leave your email and download the presentation we use with every client before
                starting any project.
              </p>

              <div className="mt-9 max-w-xl">
                <MetodologiaLeadForm locale="en" />
              </div>

              <p className="mt-5 text-xs text-white/40">
                No spam. Just the PDF presentation.
              </p>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-white/50">
                  Prefer to talk directly?
                </p>
                <Link
                  href="/en/contacto"
                  className="btn-base btn-light mt-3 inline-flex px-6 py-3"
                >
                  Request a free strategic session
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
