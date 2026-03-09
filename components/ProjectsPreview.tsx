import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

type ProjectsPreviewProps = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  projectCardLabels?: {
    completed: string;
    inProgress: string;
    goal: string;
    imageAltPrefix: string;
  };
};

export function ProjectsPreview({
  projects,
  eyebrow = "Proyectos",
  title = "Proyectos en desarrollo y realizados",
  description = "Cada proyecto responde al mismo principio: conectar tecnología, procesos y automatización con impacto real.",
  buttonLabel = "Ver todos los proyectos",
  buttonHref = "/proyectos",
  projectCardLabels
}: ProjectsPreviewProps) {
  return (
    <section className="py-18">
      <div className="container-shell">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <ProjectCard project={project} labels={projectCardLabels} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="btn-base btn-secondary gap-2 px-5 py-3"
          >
            {buttonLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
