import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const baseUrl = "https://prosper-portfolio.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = ["", "/portfolio", "/services", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  return [
    ...pages,
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
    })),
  ];
}
