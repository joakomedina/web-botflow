import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { servicesEn } from "@/data/services-en";

export const metadata: Metadata = {
  title: "Web development, apps, automation, and AI services",
  description:
    "botflow.top services to build business-oriented digital systems: web development, applications, automation, and AI.",
  alternates: {
    canonical: "/en/servicios"
  }
};

export default function ServiciosEnPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Solutions designed to connect technology with real operations"
        description="Every service has the same objective: turn manual and fragmented processes into a clear, scalable, measurable digital system."
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Services" }]}
        primaryCta={{ label: "Discuss your case", href: "/en/contacto" }}
        secondaryCta={{ label: "View projects", href: "/en/proyectos" }}
      />
      <ServicesGrid
        services={servicesEn}
        eyebrow="Services"
        title="Main service areas"
        description="Select a service line to see scope, approach, and capabilities."
      />
      <CTASection
        title="Not sure where to start?"
        description="We can review your current situation and define which combination of web, automation, or AI will generate impact first."
        buttonText="Request diagnosis"
        buttonLink="/en/contacto"
      />
    </>
  );
}
