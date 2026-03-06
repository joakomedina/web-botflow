export type ProjectStatus = "realizado" | "en_desarrollo";

export type Project = {
  title: string;
  type: string;
  status: ProjectStatus;
  technologies: string[];
  summary: string;
  includes: string[];
  goal: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const projects: Project[] = [
  {
    title: "Plataforma de automatización y agentes IA para Avanlens",
    type: "Automatización + IA + Integraciones",
    status: "realizado",
    technologies: ["n8n", "APIs", "WhatsApp", "Twilio", "VPS", "Coolify"],
    summary:
      "Sistema de atención y operaciones para una clínica de visión con flujos automatizados y agentes conectados al negocio.",
    image: "/images/projects/agente-n8n-atencion-cliente-avanlens.png",
    imageWidth: 2125,
    imageHeight: 846,
    includes: [
      "Bot de WhatsApp para atención automatizada",
      "Integración con herramientas externas",
      "Automatización de flujos internos",
      "Generación y gestión de contenido",
      "Base para expansión a TikTok y LinkedIn"
    ],
    goal:
      "Reducir tareas manuales del equipo y mejorar la interacción con pacientes mediante automatización e inteligencia artificial."
  },
  {
    title: "Web profesional para estudio de arquitectura",
    type: "Desarrollo web",
    status: "realizado",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    summary:
      "Landing profesional para un estudio de arquitectura con enfoque en portafolio y posicionamiento digital.",
    image: "/images/projects/pagina-web-arquitecto-alfredo-arvelo.jpg",
    imageWidth: 1200,
    imageHeight: 579,
    includes: [
      "Hero visual con identidad arquitectónica",
      "Portafolio de proyectos",
      "Sistema de filtrado de proyectos",
      "Modal detallado por proyecto",
      "Secciones de servicios",
      "Formulario de contacto funcional",
      "Optimización SEO inicial"
    ],
    goal:
      "Servir como activo comercial y como referencia técnica para futuros despliegues en Coolify."
  },
  {
    title: "Infraestructura de automatización con IA y n8n",
    type: "Plataforma de automatización",
    status: "realizado",
    technologies: ["n8n", "Docker", "VPS", "Coolify", "APIs", "IA"],
    summary:
      "Infraestructura reutilizable para múltiples clientes con orquestación de flujos complejos y agentes IA.",
    image: "/images/projects/infraestructura-de-automatizacion-y-despliegue.png",
    imageWidth: 1628,
    imageHeight: 1253,
    includes: [
      "Despliegue de n8n en VPS",
      "Gestión de agentes IA",
      "Integración con múltiples APIs",
      "Automatización de procesos empresariales",
      "Orquestación de flujos complejos"
    ],
    goal:
      "Crear un núcleo de automatización escalable para acelerar la entrega de soluciones en distintos sectores."
  },
  {
    title: "Sistema de generación y gestión de contenido para LinkedIn",
    type: "Automatización de marketing",
    status: "realizado",
    technologies: ["n8n", "IA", "APIs"],
    summary:
      "Flujo automatizado para investigar temas, producir contenido y organizar su distribución en redes.",
    image: "/images/services/sitios-web-app.jpeg",
    imageWidth: 1120,
    imageHeight: 896,
    includes: [
      "Investigación automatizada de temas",
      "Generación de contenido con IA",
      "Organización de publicaciones",
      "Distribución de contenido en redes"
    ],
    goal: "Escalar la producción de contenido profesional con un flujo consistente y medible."
  },
  {
    title: "MVP para distribuidor de licores",
    type: "Aplicación de gestión",
    status: "en_desarrollo",
    technologies: ["Supabase", "FlutterFlow", "Automatización"],
    summary:
      "MVP para digitalizar operaciones comerciales, inventario y pedidos en una operación de distribución.",
    image: "/images/projects/pagina-web-tienda-mascotas-patata-market.jpg",
    imageWidth: 1200,
    imageHeight: 900,
    includes: [
      "Control de inventario",
      "Gestión de pedidos",
      "Relación con clientes",
      "Registro de ventas"
    ],
    goal:
      "Crear una herramienta operativa simple y escalable que reduzca errores manuales en la operación diaria."
  },
  {
    title: "Sistema de análisis y automatización de datos",
    type: "Automatización de datos",
    status: "realizado",
    technologies: ["Python", "pandas", "SQL", "APIs"],
    summary:
      "Procesos automáticos para consultas, transformación y reporting de datos en operaciones empresariales.",
    includes: [
      "Consultas SQL automatizadas",
      "Procesamiento con Python",
      "Generación de reportes",
      "Integración con bases de datos"
    ],
    goal:
      "Transformar procesos manuales de análisis en flujos automatizados con menor tiempo de entrega."
  },
  {
    title: "Web personal de servicios tecnológicos (botflow.top)",
    type: "Desarrollo web + posicionamiento profesional",
    status: "en_desarrollo",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    summary:
      "Plataforma principal para posicionar la propuesta de valor: sistemas digitales orientados a automatización de negocio.",
    includes: [
      "Estructura de servicios escalable",
      "Arquitectura SEO para captación",
      "Integración de contacto por formulario, email y WhatsApp",
      "Base preparada para crecimiento por verticales"
    ],
    goal:
      "Posicionarte como arquitecto de soluciones digitales, no solo como desarrollador web."
  },
  {
    title: "Aplicación para coaches",
    type: "Aplicación digital",
    status: "en_desarrollo",
    technologies: ["Arquitectura funcional", "Producto digital"],
    summary:
      "Diseño conceptual de app para gestión de procesos de coaching y relación con clientes.",
    image: "/images/projects/app-para-coach-sprinta.png",
    imageWidth: 1721,
    imageHeight: 636,
    includes: [
      "Gestión de clientes",
      "Seguimiento de procesos de coaching",
      "Registro de objetivos y avances",
      "Organización de sesiones",
      "Herramientas digitales de acompañamiento"
    ],
    goal:
      "Crear una plataforma que simplifique la operación del coach y mejore la experiencia del cliente."
  }
];

export const featuredProjects = projects.slice(0, 3);
export const completedProjects = projects.filter(
  (project) => project.status === "realizado"
);
export const inProgressProjects = projects.filter(
  (project) => project.status === "en_desarrollo"
);
