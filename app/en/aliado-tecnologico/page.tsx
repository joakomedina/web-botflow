import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

const painPoints = [
  "Time lost in repetitive manual tasks.",
  "Disorganized lead and customer contact management.",
  "Missed opportunities due to weak follow-up.",
  "Too many disconnected tools without a clear system."
];

const solutionBlocks = [
  {
    title: "Initial professional website",
    description:
      "A professional landing page to explain your service clearly and capture qualified opportunities.",
    includes: ["Landing page website", "Contact form", "Basic SEO", "Deployment"],
    goal: "Build a clear and professional digital presence."
  },
  {
    title: "Lead capture system",
    description: "When someone contacts you through the website, the lead is organized and traceable.",
    includes: ["Delivered to email", "Contact is registered", "Lead is organized"],
    goal: "Stop losing opportunities."
  },
  {
    title: "Simple first automation",
    description: "Initial automation to remove repetitive work from daily operations.",
    includes: [
      "Form -> automatic email",
      "New contact -> automatic record",
      "Automatic first response"
    ],
    goal: "Reduce operational workload from day one."
  },
  {
    title: "Strategic diagnosis session",
    description: "A session to define your improvement map and next systems to implement.",
    includes: [
      "Business process review",
      "Automation opportunities",
      "Technology improvement roadmap"
    ],
    goal: "Leave with a clear evolution plan."
  }
];

const idealFor = ["Coaches", "Consultants", "Independent professionals", "Freelancers", "Small businesses"];

const notIncluded = [
  "Complex automations",
  "Custom application development",
  "Advanced AI agent implementation",
  "Complex integrations"
];

export const metadata: Metadata = {
  title: "Your technology ally",
  description:
    "Service for freelancers and small businesses that need to organize their digital base and start automating without technical overwhelm.",
  alternates: {
    canonical: "/en/aliado-tecnologico"
  },
  openGraph: {
    title: "Your technology ally | botflow.top",
    description:
      "Service for freelancers and small businesses that need to organize their digital base and start automating without technical overwhelm.",
    images: [
      {
        url: "/open-graph-soy-tu-aliado-tecnologico.jpeg",
        width: 1376,
        height: 768,
        alt: "Your technology ally - botflow.top"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Your technology ally | botflow.top",
    description:
      "Service for freelancers and small businesses that need to organize their digital base and start automating without technical overwhelm.",
    images: ["/open-graph-soy-tu-aliado-tecnologico.jpeg"]
  }
};

export default function AliadoTecnologicoEnPage() {
  return (
    <>
      <section className="py-14 md:py-18">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 md:p-11">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <Breadcrumbs
                    items={[
                      { label: "Home", href: "/en" },
                      { label: "Services", href: "/en/servicios" },
                      { label: "Your technology ally" }
                    ]}
                    className="mb-5"
                  />
                  <p className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                    Packaged service
                  </p>
                  <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight text-[color:var(--color-dark)] md:text-5xl">
                    Your technology ally
                  </h1>
                  <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
                    A service for freelancers and small businesses that need to structure their
                    digital base and start automating key processes without complexity.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="#package-contact" className="btn-base btn-primary px-6 py-3">
                      Book initial session
                    </Link>
                    <Link
                      href={`https://wa.me/${siteConfig.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-base btn-secondary px-6 py-3"
                    >
                      Request information
                    </Link>
                  </div>
                  <Link
                    href="/en"
                    className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-dark)] underline underline-offset-4 transition hover:text-[color:var(--color-primary)]"
                  >
                    Back to home
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-white/75">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/services/soy-tu-aliado-tecnologico.jpeg"
                      alt="Your technology ally service"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Problem"
            title="Many professionals use digital tools but still don't have a connected system."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <article className="panel-card p-5">
                  <p className="text-sm leading-relaxed text-[color:var(--color-dark)]">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Solution"
            title="We build the business digital foundation in four blocks"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {solutionBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.06}>
                <article className="panel-card h-full p-6">
                  <h2 className="text-2xl font-semibold text-[color:var(--color-dark)]">{block.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {block.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-dark)]">
                    {block.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-4 py-3 text-sm text-[color:var(--color-muted)]">
                    <strong className="text-[color:var(--color-dark)]">Goal:</strong> {block.goal}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-[color:var(--color-muted)]">
            Note: this package includes one initial simple automation.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="panel-card p-6">
              <SectionTitle eyebrow="Ideal for" title="This service is designed for" />
              <div className="flex flex-wrap gap-2">
                {idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-3 py-1 text-sm font-medium text-[color:var(--color-dark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="panel-card p-6">
              <SectionTitle eyebrow="Not included" title="Limits of the starter package" />
              <ul className="space-y-2 text-sm text-[color:var(--color-dark)]">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-secondary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-shell">
          <Reveal>
            <div className="panel-card p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
                Price
              </p>
              <p className="mt-3 text-4xl font-bold text-[color:var(--color-dark)] md:text-5xl">
                From €1200
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="package-contact" className="scroll-mt-28 py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <article className="panel-card p-7">
              <SectionTitle
                eyebrow="Next step"
                title="Tell me your case and I will propose a clear starting plan"
                description="Fill in the form and I will reply with a concrete recommendation to implement this package."
              />
              <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
                {[
                  "Initial reply via WhatsApp or email.",
                  "Package fit validation for your business.",
                  "Next steps and estimated timeline."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] p-4">
                <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                  If you prefer immediate contact, you can also message me directly on WhatsApp.
                </p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary mt-4 px-4 py-2 text-sm"
                >
                  Open WhatsApp
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <ContactForm
              locale="en"
              contextLabel="Your technology ally package"
              defaultMessage="I want to implement the Technology Ally package in my business."
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's build your business digital foundation"
        description="One goal: organize your digital system and turn visits into real opportunities."
        buttonText="Complete the form"
        buttonLink="#package-contact"
      />
    </>
  );
}
