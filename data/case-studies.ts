export type CaseStudy = {
  tag: string;
  before: string;
  after: string;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Clínica",
    before: "Se respondían manualmente todas las consultas y reservas.",
    after:
      "Las consultas y reservas se gestionan solas por WhatsApp, y el equipo dedica ese tiempo a atender pacientes."
  },
  {
    tag: "Estudio de arquitectura",
    before: "No había una web profesional donde mostrar los proyectos.",
    after:
      "Una web con portafolio filtrable presenta el trabajo del estudio incluso cuando nadie está mirando el ordenador."
  },
  {
    tag: "Automatización multicliente",
    before: "Cada automatización se montaba desde cero, sin una base reutilizable.",
    after:
      "Una infraestructura común permite lanzar una automatización nueva para cada cliente en días, no semanas."
  }
];
