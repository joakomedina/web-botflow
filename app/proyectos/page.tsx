import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { completedProjects, inProgressProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Casos reales: problemas resueltos con automatización",
  description:
    "No mostramos proyectos, mostramos problemas resueltos: casos reales de automatización, desarrollo web e IA implementados por botflowstudio.com.",
  alternates: {
    canonical: "/proyectos"
  }
};

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos reales"
        title="No mostramos proyectos. Mostramos problemas resueltos."
        description="Cada caso responde a la misma lógica: un proceso manual que costaba tiempo, resuelto con automatización e IA."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Casos reales" }]}
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
