import type { Metadata } from "next";
import { AliadoTecnologicoCard } from "@/components/AliadoTecnologicoCard";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SolutionSection } from "@/components/SolutionSection";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Desarrollo web, automatización e IA para negocios",
  description:
    "Construyo sistemas digitales que conectan web, aplicaciones, automatización e inteligencia artificial para reducir trabajo manual.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AliadoTecnologicoCard />
      <ServicesGrid
        services={services}
        title="Servicios para construir un sistema digital completo"
        description="No desarrollo piezas aisladas: cada solución está diseñada para encajar en un flujo operativo real."
      />
      <ProjectsPreview projects={featuredProjects} />
      <ProcessSection />
      <AboutSection />
      <CTASection
        title="Si tu negocio no necesita más herramientas, sino un sistema que funcione, hablemos."
        description="Analizamos tu operación actual y definimos una ruta clara para reducir tareas manuales y mejorar resultados."
        buttonText="Solicitar una reunión"
        buttonLink="/contacto"
      />
    </>
  );
}
