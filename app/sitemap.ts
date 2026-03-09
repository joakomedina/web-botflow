import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/blog",
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

const enRoutes = [
  "/en",
  "/en/blog",
  "/en/servicios",
  "/en/servicios/desarrollo-web",
  "/en/servicios/apps",
  "/en/servicios/automatizaciones",
  "/en/servicios/ia",
  "/en/proyectos",
  "/en/sobre-mi",
  "/en/contacto",
  "/en/aliado-tecnologico"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogPosts = getAllPosts("es");
  const blogPostsEn = getAllPosts("en");

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const staticEnRoutes: MetadataRoute.Sitemap = enRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/en" || route === "/en/blog" ? "weekly" : "monthly",
    priority: route === "/en" ? 0.95 : route === "/en/blog" ? 0.75 : 0.65
  }));

  const blogEnRoutes: MetadataRoute.Sitemap = blogPostsEn.map((post) => ({
    url: `${siteConfig.siteUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...blogRoutes, ...staticEnRoutes, ...blogEnRoutes];
}
