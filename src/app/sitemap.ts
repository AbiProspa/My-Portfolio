import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/home-2", "/portfolio-1", "/portfolio-2", "/portfolio-3", "/services", "/service", "/team", "/contact"];

  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...projects.map((project) => ({ url: `${siteUrl}${project.route}` })),
  ];
}
