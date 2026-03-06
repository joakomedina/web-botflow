const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://botflow.top";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "joaquinaarvelom@gmail.com";
const whatsappRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34747424451";

export const siteConfig = {
  domain: "botflow.top",
  siteUrl,
  brand: "botflow.top",
  owner: "Joaquin Arvelo",
  email: contactEmail,
  whatsappRaw,
  whatsappDisplay: "+34 747 424 451",
  claim: "Construyo sistemas digitales que automatizan tu negocio.",
  description:
    "Desarrollo web, aplicaciones, automatización e inteligencia artificial para reducir tareas manuales y escalar operaciones."
};

export const seoKeywords = [
  "automatización de procesos para empresas",
  "desarrollo web profesional",
  "automatización de negocio",
  "implementación de inteligencia artificial",
  "sistemas digitales para empresas",
  "automatización con n8n",
  "agentes de IA para negocios",
  "botflow.top"
];

export const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" }
];
