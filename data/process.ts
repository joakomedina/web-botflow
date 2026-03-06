export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    description:
      "Analizo el contexto del negocio, los cuellos de botella y los procesos que hoy consumen más tiempo."
  },
  {
    title: "Diseño de solución",
    description:
      "Defino una arquitectura clara combinando web, automatización, integraciones y componentes de IA según prioridad."
  },
  {
    title: "Implementación",
    description:
      "Construyo la solución en iteraciones cortas, con entregables visibles y foco en uso real desde el primer release."
  },
  {
    title: "Optimización",
    description:
      "Mido resultados, ajusto flujos y evoluciona el sistema para sostener rendimiento y crecimiento operativo."
  }
];

