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
  claim: "Recuperamos tiempo para que tu empresa crezca.",
  description:
    "En 15 días automatizamos el proceso que más tiempo hace perder a tu empresa, mediante automatización e inteligencia artificial."
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
  { label: "Sprint 15", href: "/sprint-15" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Casos reales", href: "/proyectos" },
  { label: "Recursos", href: "/blog" },
  { label: "Contacto", href: "/contacto" }
];

export const navigationLinksEn = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/servicios" },
  { label: "Projects", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/sobre-mi" },
  { label: "Contact", href: "/contacto" }
];
