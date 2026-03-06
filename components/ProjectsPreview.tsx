import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

type ProjectsPreviewProps = {
  projects: Project[];
};

export function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Proyectos"
          title="Proyectos en desarrollo y realizados"
          description="Cada proyecto responde al mismo principio: conectar tecnología, procesos y automatización con impacto real."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/proyectos"
            className="btn-base btn-secondary gap-2 px-5 py-3"
          >
            Ver todos los proyectos
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
