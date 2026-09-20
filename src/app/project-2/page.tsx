/* Project page — content lives in src/lib/data.ts, markup in ProjectDetail. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects, site } from "@/lib/data";

const project = projects.find((p) => p.route === "/project-2");

export const metadata: Metadata = {
  title: project ? `${project.title} | ${site.name}` : site.name,
  description: project?.intro,
};

export default function Page() {
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
