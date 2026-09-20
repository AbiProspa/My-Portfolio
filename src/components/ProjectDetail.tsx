/* The Ashley template's project page, markup preserved, driven by data so all
   nine projects stay consistent. Image frames follow the template's own
   sequence: one horizontal hero, up to four squares, then up to two verticals.
   (The template's stray ";" after "Client: &nbsp;" is not reproduced.) */
import Link from "next/link";
import Footer from "@/components/Footer";
import { projects, type Project } from "@/lib/data";

function Zoom({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <img src={src} alt={alt} />
      <a data-fancybox="gallery" data-no-swup="" href={src} className="mil-zoom-btn">
        <img src="/img/icons/zoom.svg" alt="zoom" />
      </a>
    </>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.route === project.route);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const [hero, ...rest] = project.gallery;
  const squares = rest.slice(0, 4);
  const verticals = rest.slice(4, 6);

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
              <Link href="/portfolio-1">Portfolio</Link>
            </li>
            <li>
              <Link href={project.route}>Project</Link>
            </li>
          </ul>
          <h1 className="mil-mb-60">
            {project.titleMain}
            <span className="mil-thin">{project.titleThin}</span>
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
          <Zoom src={hero} alt={`${project.title} — preview`} />
        </div>
        <div className="mil-info mil-up">
          <div>
            Client:&nbsp;
            <span className="mil-dark">{project.client}</span>
          </div>
          <div>
            My role:&nbsp;
            <span className="mil-dark">{project.role}</span>
          </div>
          {project.stack && (
            <div>
              Stack:&nbsp;
              <span className="mil-dark">{project.stack.join(" · ")}</span>
            </div>
          )}
          {project.status && (
            <div>
              Status:&nbsp;
              <span className="mil-dark">{project.status}</span>
            </div>
          )}
        </div>
        <div className="mil-p-120-0">
          <div className="row">
            {squares.map((src) => (
              <div className="col-lg-6" key={src}>
                <div className="mil-image-frame mil-square mil-up mil-mb-30">
                  <Zoom src={src} alt={`${project.title} — screen`} />
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
                <p className="mil-up mil-mb-30" key={i}>{paragraph}</p>
              ))}
              {project.link && (
                <div className="mil-up">
                  <a href={project.link} target="_blank" rel="noreferrer" className="mil-button mil-arrow-place">
                    <span>View live project</span>
                  </a>
                </div>
              )}
            </div>
          </div>
          {verticals.length > 0 && (
            <div className="row mil-p-0-90">
              {verticals.map((src) => (
                <div className="col-lg-6" key={src}>
                  <div className="mil-image-frame mil-vertical mil-up mil-mb-30">
                    <Zoom src={src} alt={`${project.title} — screen`} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mil-works-nav mil-up">
          {prev ? (
            <Link href={prev.route} className="mil-link mil-dark mil-arrow-place mil-icon-left">
              <span>Prev project</span>
            </Link>
          ) : (
            <a href="#." className="mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled">
              <span>Prev project</span>
            </a>
          )}
          <Link href="/portfolio-1" className="mil-link mil-dark">
            <span>All projects</span>
          </Link>
          {next ? (
            <Link href={next.route} className="mil-link mil-dark mil-arrow-place">
              <span>Next project</span>
            </Link>
          ) : (
            <a href="#." className="mil-link mil-dark mil-arrow-place mil-disabled">
              <span>Next project</span>
            </a>
          )}
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
              Websites, mobile apps, APIs and automations —
              <br />
              one developer, end to end.
            </span>
          </div>
        </div>
        <div className="mil-center">
          <h2 className="mil-up mil-mb-60">
            Ready to build
            <span className="mil-thin">something</span>
            together?
            <br />
            I&apos;m
            <span className="mil-thin">available now</span>
          </h2>
          <div className="mil-up">
            <Link href="/contact" className="mil-button mil-arrow-place">
              <span>Contact me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
