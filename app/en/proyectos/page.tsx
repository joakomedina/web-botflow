import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { completedProjectsEn, inProgressProjectsEn } from "@/data/projects-en";

export const metadata: Metadata = {
  title: "Delivered and in-progress projects",
  description:
    "Portfolio of web development, automation, and AI projects delivered or currently under development at botflow.top.",
  alternates: {
    canonical: "/en/proyectos"
  }
};

export default function ProyectosEnPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Cases built to connect process, technology, and automation"
        description="Delivered and in-progress projects with a shared focus: building useful digital systems for real operations."
        breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Projects" }]}
        primaryCta={{ label: "Start a new project", href: "/en/contacto" }}
      />

      <section className="py-16">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Delivered"
            title="Implemented projects"
            description="Solutions already delivered and aligned with business operations."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {completedProjectsEn.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard
                  project={project}
                  labels={{
                    completed: "Completed",
                    inProgress: "In progress",
                    goal: "Goal:",
                    imageAltPrefix: "Project image:"
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-18">
        <div className="container-shell">
          <SectionTitle
            eyebrow="In progress"
            title="Active lines and upcoming releases"
            description="Projects currently under development across different business verticals."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {inProgressProjectsEn.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard
                  project={project}
                  labels={{
                    completed: "Completed",
                    inProgress: "In progress",
                    goal: "Goal:",
                    imageAltPrefix: "Project image:"
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
