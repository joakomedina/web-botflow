import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { servicesEn } from "@/data/services-en";

const service = servicesEn.find((item) => item.slug === "ia");

export const metadata: Metadata = {
  title: "AI implementations for business operations",
  description:
    "Assistants and AI agents integrated into real processes to improve support, classification, content, and efficiency.",
  alternates: {
    canonical: "/en/servicios/ia"
  }
};

export default function IAEnPage() {
  if (!service) {
    return null;
  }

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Services", href: "/en/servicios" },
          { label: "AI" }
        ]}
        primaryCta={{ label: "Evaluate AI use case", href: "/en/contacto" }}
        secondaryCta={{ label: "View services", href: "/en/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="Applied AI with operational criteria"
              description="No hype or empty promises: implementations connected to daily team workflows."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Assistants for support and first response.",
                "Request classification and prioritization.",
                "Content generation with operational supervision.",
                "Agents connected to real systems and channels."
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel-card p-7">
            <SectionTitle
              title="Included capabilities"
              description="Workflow design where AI, data, and processes operate together."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <CTASection
        title="AI works when it is connected to process. That is the implementation focus."
        description="We design a realistic, measurable, and maintainable solution for your operation."
        buttonText="Discuss AI implementation"
        buttonLink="/en/contacto"
      />
    </>
  );
}
