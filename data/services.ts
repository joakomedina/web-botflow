export type ServiceIcon = "web" | "apps" | "automation" | "ai";

export type Service = {
  slug: "desarrollo-web" | "apps" | "automatizaciones" | "ia";
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  capabilities: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    shortDescription: "Webs profesionales orientadas a conversión y negocio.",
    description:
      "Diseño y desarrollo webs corporativas y páginas de servicio con estructura clara, SEO base sólido y foco en captación.",
    image: "/images/services/paginas-web.jpeg",
    capabilities: [
      "Landings de alto impacto",
      "Web corporativa escalable",
      "Arquitectura orientada a SEO",
      "Optimización de rendimiento"
    ],
    ctaLabel: "Ver servicio",
    ctaHref: "/servicios/desarrollo-web",
    icon: "web"
  },
  {
    slug: "apps",
    title: "Aplicaciones",
    shortDescription: "Herramientas internas y portales para procesos reales.",
    description:
      "Construyo aplicaciones para gestionar operaciones, clientes y flujos internos sin depender de herramientas genéricas limitadas.",
    image: "/images/services/desarrollo-app.jpeg",
    capabilities: [
      "Dashboards operativos",
      "Portales de cliente",
      "Sistemas de gestión a medida",
      "MVPs escalables"
    ],
    ctaLabel: "Explorar aplicaciones",
    ctaHref: "/servicios/apps",
    icon: "apps"
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones",
    shortDescription: "Integración de herramientas y procesos sin tareas repetitivas.",
    description:
      "Conecto tus sistemas para eliminar trabajo manual, mover datos entre plataformas y ejecutar flujos automáticos con control.",
    image: "/images/services/sistema-digital-que-automatiza-negocio.jpeg",
    capabilities: [
      "Integraciones entre plataformas",
      "Flujos con n8n y APIs",
      "Orquestación de operaciones",
      "Automatización de reportes y seguimiento"
    ],
    ctaLabel: "Ver automatizaciones",
    ctaHref: "/servicios/automatizaciones",
    icon: "automation"
  },
  {
    slug: "ia",
    title: "Implementaciones de IA",
    shortDescription: "IA aplicada a procesos útiles, no a demos sin impacto.",
    description:
      "Implemento asistentes y agentes conectados al negocio para mejorar atención, clasificación, análisis y ejecución operativa.",
    image: "/images/services/implementaciones-de-IA.jpeg",
    capabilities: [
      "Agentes conversacionales",
      "Clasificación y generación de contenido",
      "Asistentes para operaciones internas",
      "Integración con WhatsApp y canales de atención"
    ],
    ctaLabel: "Descubrir IA aplicada",
    ctaHref: "/servicios/ia",
    icon: "ai"
  }
];

export function getServiceBySlug(slug: Service["slug"]): Service | undefined {
  return services.find((service) => service.slug === slug);
}
