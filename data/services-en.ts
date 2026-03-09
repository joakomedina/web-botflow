import type { Service } from "@/data/services";

export const servicesEn: Service[] = [
  {
    slug: "desarrollo-web",
    title: "Web Development",
    shortDescription: "Professional websites focused on conversion and business outcomes.",
    description:
      "I design and build corporate websites and service pages with clear structure, solid SEO foundations, and lead generation focus.",
    image: "/images/services/paginas-web.jpeg",
    capabilities: [
      "High-impact landing pages",
      "Scalable corporate websites",
      "SEO-oriented architecture",
      "Performance optimization"
    ],
    ctaLabel: "View service",
    ctaHref: "/en/servicios/desarrollo-web",
    icon: "web"
  },
  {
    slug: "apps",
    title: "Applications",
    shortDescription: "Internal tools and portals built for real operations.",
    description:
      "I build tailored applications to manage operations, customers, and internal workflows without relying on limited generic tools.",
    image: "/images/services/desarrollo-app.jpeg",
    capabilities: [
      "Operational dashboards",
      "Client portals",
      "Custom management systems",
      "Scalable MVPs"
    ],
    ctaLabel: "Explore apps",
    ctaHref: "/en/servicios/apps",
    icon: "apps"
  },
  {
    slug: "automatizaciones",
    title: "Automation",
    shortDescription: "Tool integrations and process automation without repetitive tasks.",
    description:
      "I connect your systems to remove manual work, move data across platforms, and run automated workflows with control.",
    image: "/images/services/sistema-digital-que-automatiza-negocio.jpeg",
    capabilities: [
      "Cross-platform integrations",
      "n8n and API workflows",
      "Operations orchestration",
      "Automated reporting and follow-up"
    ],
    ctaLabel: "View automation",
    ctaHref: "/en/servicios/automatizaciones",
    icon: "automation"
  },
  {
    slug: "ia",
    title: "AI Implementations",
    shortDescription: "AI applied to practical processes, not demo-only use cases.",
    description:
      "I implement assistants and agents connected to real business operations to improve support, classification, analysis, and execution.",
    image: "/images/services/implementaciones-de-IA.jpeg",
    capabilities: [
      "Conversational agents",
      "Classification and content generation",
      "Internal operations assistants",
      "WhatsApp and support channel integration"
    ],
    ctaLabel: "Discover applied AI",
    ctaHref: "/en/servicios/ia",
    icon: "ai"
  }
];
