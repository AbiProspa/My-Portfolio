import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Abiodun Prosper`,
    description: project.intro,
    openGraph: { title: `${project.title} | Abiodun Prosper`, description: project.intro, type: "article" },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  // Render "Name — Descriptor" titles with the descriptor in the template's thin style.
  const [titleMain, titleThin] = project.title.split(" — ");

  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner">
        <div className="mil-banner-content mil-up">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
          </div>
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href={`/projects/${project.slug}`}>Project</Link>
              </li>
            </ul>
            <h1 className="mil-mb-60">
              {titleMain}
              {titleThin && (
                <>
                  {" "}
                  <span className="mil-thin">{titleThin}</span>
                </>
              )}
            </h1>
            <a href="#project" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Read more</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* project */}
      <section className="mil-p-120-0">
        <div className="container mil-p-0-120" id="project">
          <div className="mil-image-frame mil-horizontal mil-up">
            <img src={project.hero} alt={`${project.title} project preview`} fetchPriority="high" />
            <a data-fancybox="gallery" data-no-swup href={project.hero} className="mil-zoom-btn">
              <img src="/img/icons/zoom.svg" alt="zoom" />
            </a>
          </div>
          <div className="mil-info mil-up">
            <div>
              Client: &nbsp;<span className="mil-dark">{project.client}</span>
            </div>
            {project.year && <div>Date: &nbsp;<span className="mil-dark">{project.year}</span></div>}
            <div>
              Category: &nbsp;<span className="mil-dark">{project.category}</span>
            </div>
          </div>
          <div className="mil-p-120-0">
            {project.role && <div className="mil-info mil-up"><div>My role: &nbsp;<span className="mil-dark">{project.role}</span></div></div>}
            {project.status && <div className="mil-info mil-up"><div>Status: &nbsp;<span className="mil-dark">{project.status}</span></div></div>}
            {project.stack && project.stack.length > 0 && (
              <div className="mil-info mil-up"><div>Stack: &nbsp;<span className="mil-dark">{project.stack.join(" · ")}</span></div></div>
            )}
            <div className="row">
              {project.gallery.map((img) => (
                <div className="col-lg-6" key={img}>
                  <div className="mil-image-frame mil-square mil-up mil-mb-30">
                    <img src={img} alt={`${project.title} project screenshot`} loading="lazy" decoding="async" />
                    <a data-fancybox="gallery" data-no-swup href={img} className="mil-zoom-btn">
                      <img src="/img/icons/zoom.svg" alt="zoom" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-between mil-p-90-120">
              <div className="col-lg-5">
                <h3 className="mil-up mil-mb-60">{project.intro}</h3>
              </div>
              <div className="col-lg-6">
                {project.paragraphs.map((paragraph, i) => (
                  <p className="mil-up mil-mb-30" key={i}>
                    {paragraph}
                  </p>
                ))}
                {project.link && (
                  <div className="mil-up mil-mt-suptitle-offset">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mil-button mil-arrow-place"
                    >
                      <span>View project</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mil-works-nav mil-up">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="mil-link mil-dark mil-arrow-place mil-icon-left"
            >
              <span>Prev project</span>
            </Link>
            <Link href="/portfolio" className="mil-link mil-dark">
              <span>All projects</span>
            </Link>
            <Link href={`/projects/${nextProject.slug}`} className="mil-link mil-dark mil-arrow-place">
              <span>Next project</span>
            </Link>
          </div>
        </div>
      </section>
      {/* project end */}

      {/* call to action */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Branding, websites, mobile apps and automations — <br /> one builder, end to end.
              </span>
            </div>
          </div>
          <div className="mil-center">
            <h2 className="mil-up mil-mb-60">
              Ready to bring your <span className="mil-thin">ideas to</span> life? <br /> I&apos;m{" "}
              <span className="mil-thin">here to help</span>
            </h2>
            <div className="mil-up">
              <Link href="/contact" className="mil-button mil-arrow-place">
                <span>Contact me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </>
  );
}
