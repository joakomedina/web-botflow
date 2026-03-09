import type { Project } from "@/data/projects";

export const projectsEn: Project[] = [
  {
    title: "Automation and AI agent platform for Avanlens",
    type: "Automation + AI + Integrations",
    status: "realizado",
    technologies: ["n8n", "APIs", "WhatsApp", "Twilio", "VPS", "Coolify"],
    summary:
      "Support and operations system for an eye clinic with automated workflows and business-connected agents.",
    image: "/images/projects/agente-n8n-atencion-cliente-avanlens.png",
    imageWidth: 2125,
    imageHeight: 846,
    includes: [
      "WhatsApp bot for automated support",
      "External tool integrations",
      "Internal workflow automation",
      "Content generation and management",
      "Foundation for TikTok and LinkedIn expansion"
    ],
    goal:
      "Reduce manual workload and improve patient interaction through automation and applied AI."
  },
  {
    title: "Professional website for an architecture studio",
    type: "Web Development",
    status: "realizado",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    summary:
      "Professional landing page for an architecture studio with portfolio and digital positioning focus.",
    image: "/images/projects/pagina-web-arquitecto-alfredo-arvelo.jpg",
    imageWidth: 1200,
    imageHeight: 579,
    includes: [
      "Visual hero with architectural identity",
      "Project portfolio",
      "Project filtering system",
      "Detailed project modal",
      "Service sections",
      "Functional contact form",
      "Initial SEO optimization"
    ],
    goal:
      "Serve as a commercial asset and technical reference for future Coolify deployments."
  },
  {
    title: "Automation infrastructure with AI and n8n",
    type: "Automation Platform",
    status: "realizado",
    technologies: ["n8n", "Docker", "VPS", "Coolify", "APIs", "AI"],
    summary:
      "Reusable infrastructure for multiple clients with complex workflow orchestration and AI agents.",
    image: "/images/projects/infraestructura-de-automatizacion-y-despliegue.png",
    imageWidth: 1628,
    imageHeight: 1253,
    includes: [
      "n8n deployment on VPS",
      "AI agent management",
      "Multi-API integrations",
      "Business process automation",
      "Complex workflow orchestration"
    ],
    goal:
      "Create a scalable automation core to accelerate delivery across different industries."
  },
  {
    title: "LinkedIn content generation and management system",
    type: "Marketing Automation",
    status: "realizado",
    technologies: ["n8n", "AI", "APIs"],
    summary:
      "Automated workflow to research topics, produce content, and organize social distribution.",
    image: "/images/services/sitios-web-app.jpeg",
    imageWidth: 1120,
    imageHeight: 896,
    includes: [
      "Automated topic research",
      "AI-assisted content generation",
      "Publication organization",
      "Content distribution workflows"
    ],
    goal: "Scale professional content production with a consistent, measurable workflow."
  },
  {
    title: "MVP for a liquor distributor",
    type: "Management Application",
    status: "en_desarrollo",
    technologies: ["Supabase", "FlutterFlow", "Automation"],
    summary:
      "MVP to digitize commercial operations, inventory, and order workflows in distribution.",
    image: "/images/projects/pagina-web-tienda-mascotas-patata-market.jpg",
    imageWidth: 1200,
    imageHeight: 900,
    includes: [
      "Inventory control",
      "Order management",
      "Customer relationship management",
      "Sales records"
    ],
    goal:
      "Build a simple but scalable operational tool that reduces manual errors in daily execution."
  },
  {
    title: "Data analysis and automation system",
    type: "Data Automation",
    status: "realizado",
    technologies: ["Python", "pandas", "SQL", "APIs"],
    summary:
      "Automated processes for querying, transforming, and reporting business data.",
    includes: [
      "Automated SQL queries",
      "Python-based processing",
      "Report generation",
      "Database integrations"
    ],
    goal: "Turn manual analysis into automated flows with faster delivery cycles."
  },
  {
    title: "Personal website for technology services (botflow.top)",
    type: "Web Development + Professional Positioning",
    status: "en_desarrollo",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    summary:
      "Main platform to position the core value proposition: digital systems for business automation.",
    includes: [
      "Scalable service structure",
      "SEO-focused architecture for lead generation",
      "Integrated contact through form, email, and WhatsApp",
      "Foundation prepared for vertical expansion"
    ],
    goal:
      "Position as a digital solutions architect, not only as a web developer."
  },
  {
    title: "App for coaches",
    type: "Digital Application",
    status: "en_desarrollo",
    technologies: ["Functional Architecture", "Digital Product"],
    summary:
      "Conceptual product design for managing coaching processes and client relationships.",
    image: "/images/projects/app-para-coach-sprinta.png",
    imageWidth: 1721,
    imageHeight: 636,
    includes: [
      "Client management",
      "Coaching process tracking",
      "Goals and progress records",
      "Session organization",
      "Digital support tools"
    ],
    goal:
      "Create a platform that simplifies coach operations and improves client experience."
  }
];

export const featuredProjectsEn = projectsEn.slice(0, 3);
export const completedProjectsEn = projectsEn.filter((project) => project.status === "realizado");
export const inProgressProjectsEn = projectsEn.filter((project) => project.status === "en_desarrollo");
