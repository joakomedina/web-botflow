const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://botflowstudio.com";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "blueprint@botflowstudio.com";
const whatsappRaw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34747424451";

export const siteConfig = {
  domain: "botflowstudio.com",
  siteUrl,
  brand: "botflowstudio.com",
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
  "botflowstudio.com"
];

export const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sprint 15", href: "/sprint-15" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Casos reales", href: "/proyectos" },
  { label: "Recursos", href: "/blog" },
  { label: "Contacto", href: "/contacto" }
];

export const navigationLinksEn = [
  { label: "Home", href: "/en" },
  { label: "Sprint 15", href: "/en/sprint-15" },
  { label: "Methodology", href: "/en/metodologia" },
  { label: "Real cases", href: "/en/proyectos" },
  { label: "Resources", href: "/en/blog" },
  { label: "Contact", href: "/en/contacto" }
];
