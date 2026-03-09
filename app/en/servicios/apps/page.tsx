import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { servicesEn } from "@/data/services-en";

const service = servicesEn.find((item) => item.slug === "apps");

export const metadata: Metadata = {
  title: "Application development and internal tools",
  description:
    "Design and development of web applications and internal tools to centralize operations, customers, and data.",
  alternates: {
    canonical: "/en/servicios/apps"
  }
};

export default function AppsEnPage() {
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
          { label: "Applications" }
        ]}
        primaryCta={{ label: "Define MVP", href: "/en/contacto" }}
        secondaryCta={{ label: "View other services", href: "/en/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="Operation-focused applications"
              description="Software built to solve concrete business workflows."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Management dashboards for teams.",
                "Customer portals with centralized access.",
                "MVPs to validate digital solutions.",
                "Interfaces for specific internal workflows."
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
              description="Scalable architecture prepared for phased growth."
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
        title="If your operation depends on sheets, chats, and manual tasks, an app can bring order."
        description="We define the minimum useful scope and ship it with a technical foundation ready to scale."
        buttonText="Discuss an application"
        buttonLink="/en/contacto"
      />
    </>
  );
}
