import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { servicesEn } from "@/data/services-en";

const service = servicesEn.find((item) => item.slug === "automatizaciones");

export const metadata: Metadata = {
  title: "Process automation and integrations",
  description:
    "Workflow automation and tool integrations to reduce repetitive tasks and operational errors.",
  alternates: {
    canonical: "/en/servicios/automatizaciones"
  }
};

export default function AutomatizacionesEnPage() {
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
          { label: "Automation" }
        ]}
        primaryCta={{ label: "Automate processes", href: "/en/contacto" }}
        secondaryCta={{ label: "View projects", href: "/en/proyectos" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="What type of processes we automate"
              description="Prioritizing workflows with high impact on time and consistency."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Automatic capture and update of data.",
                "Synchronization across sales, support, and operations tools.",
                "Internal notifications and follow-up with less friction.",
                "Removal of repetitive tasks from manual execution."
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
              description="Workflows designed with control, traceability, and simple maintenance."
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
        title="Automation is not only connecting apps: it is redesigning workflows to perform better."
        description="We identify where time is lost and build automations with measurable operational impact."
        buttonText="Request process review"
        buttonLink="/en/contacto"
      />
    </>
  );
}
