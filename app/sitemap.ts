import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/servicios",
  "/servicios/desarrollo-web",
  "/servicios/apps",
  "/servicios/automatizaciones",
  "/servicios/ia",
  "/proyectos",
  "/sobre-mi",
  "/contacto",
  "/aliado-tecnologico"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}

