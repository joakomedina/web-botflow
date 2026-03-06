import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const rawRatio =
    project.imageWidth && project.imageHeight
      ? project.imageWidth / project.imageHeight
      : 16 / 10;
  const displayRatio = Math.max(rawRatio, 1.8);

  return (
    <article className="panel-card h-full p-6">
      {project.image ? (
        <div
          className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-bg)]"
          style={{ aspectRatio: displayRatio.toString() }}
        >
          <div className="relative h-full w-full">
            <Image
              src={project.image}
              alt={`Imagen del proyecto ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center p-1"
            />
          </div>
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
            project.status === "realizado"
              ? "bg-[color:var(--color-accent)]/15 text-[color:var(--color-dark)]"
              : "bg-[color:var(--color-secondary)]/15 text-[color:var(--color-dark)]"
          )}
        >
          {project.status === "realizado" ? "Realizado" : "En desarrollo"}
        </span>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
          {project.type}
        </p>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-dark)]">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--color-bg)] px-3 py-1 text-xs font-medium text-[color:var(--color-dark)]"
          >
            {technology}
          </span>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-sm text-[color:var(--color-dark)]">
        {project.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--color-accent)]/15 p-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
        <strong className="font-semibold text-[color:var(--color-dark)]">Objetivo:</strong>{" "}
        {project.goal}
      </p>
    </article>
  );
}
