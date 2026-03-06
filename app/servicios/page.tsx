import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web, apps, automatización e IA",
  description:
    "Servicios de botflow.top para construir sistemas digitales orientados a negocio: desarrollo web, aplicaciones, automatizaciones e inteligencia artificial."
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones diseñadas para conectar tecnología con operación real"
        description="Cada servicio responde al mismo objetivo: convertir procesos manuales y dispersos en un sistema digital claro, escalable y medible."
        primaryCta={{ label: "Hablar sobre tu caso", href: "/contacto" }}
        secondaryCta={{ label: "Ver proyectos", href: "/proyectos" }}
      />
      <ServicesGrid
        services={services}
        title="Áreas principales de trabajo"
        description="Selecciona una línea de servicio para ver enfoque, alcance y capacidades."
      />
      <CTASection
        title="¿No sabes por dónde empezar?"
        description="Podemos revisar tu situación actual y definir qué combinación de web, automatización o IA te generará mayor impacto primero."
        buttonText="Solicitar diagnóstico"
        buttonLink="/contacto"
      />
    </>
  );
}

