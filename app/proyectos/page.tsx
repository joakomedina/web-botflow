import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { completedProjects, inProgressProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos realizados y en desarrollo",
  description:
    "Listado de proyectos de desarrollo web, automatización e IA implementados o en fase de construcción en botflow.top.",
  alternates: {
    canonical: "/proyectos"
  }
};

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Casos construidos para conectar procesos, tecnología y automatización"
        description="Proyectos en producción y en desarrollo con un enfoque común: crear sistemas digitales útiles para operación real."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Proyectos" }]}
        primaryCta={{ label: "Iniciar nuevo proyecto", href: "/contacto" }}
      />

      <section className="py-16">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Realizados"
            title="Proyectos implementados"
            description="Soluciones ya construidas y alineadas con operación de negocio."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {completedProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-18">
        <div className="container-shell">
          <SectionTitle
            eyebrow="En desarrollo"
            title="Líneas activas y próximos lanzamientos"
            description="Proyectos en construcción para diferentes verticales de negocio."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {inProgressProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
