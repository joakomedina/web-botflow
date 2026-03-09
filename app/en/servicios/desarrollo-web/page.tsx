import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { servicesEn } from "@/data/services-en";

const service = servicesEn.find((item) => item.slug === "desarrollo-web");

export const metadata: Metadata = {
  title: "Professional web development service",
  description:
    "Design and development of business-oriented websites with SEO structure, optimized performance, and conversion focus.",
  alternates: {
    canonical: "/en/servicios/desarrollo-web"
  }
};

export default function DesarrolloWebEnPage() {
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
          { label: "Web development" }
        ]}
        primaryCta={{ label: "Request proposal", href: "/en/contacto" }}
        secondaryCta={{ label: "Back to services", href: "/en/servicios" }}
      />
      <section className="py-16">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="panel-card p-7">
            <SectionTitle
              title="What this service solves"
              description="Ideal for businesses that need a strong digital presence with clear lead-generation focus."
            />
            <ul className="space-y-3 text-sm text-[color:var(--color-dark)]">
              {[
                "Slow or disorganized websites that do not convert.",
                "Unclear messaging for the ideal customer.",
                "Lack of SEO structure for service visibility.",
                "Dependency on templates without strategy."
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
              description="Clean and scalable implementation with business focus."
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
        title="If you need a website that supports your commercial operations, this is the right starting point."
        description="We design a clear structure to communicate value, attract qualified demand, and simplify contact."
        buttonText="Start web project"
        buttonLink="/en/contacto"
      />
    </>
  );
}
