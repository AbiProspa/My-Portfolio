/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The template's six hand-written cards become a map over `projects`, keeping
   the original narrow/wide rhythm (indexes 1 and 2 of every four are wide). */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Selected work | ${site.name}`,
  description: "Full-stack web and mobile projects across fintech, food, relocation and business operations.",
};

export default function Page() {
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
          </ul>
          <h1 className="mil-mb-60">
            Web and mobile
            <br />
            products,
            <span className="mil-thin">shipped</span>
          </h1>
          <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
            <span>My work</span>
          </a>
        </div>
      </div>
    </div>
    {/* banner end */}
    {/* portfolio */}
    <section id="portfolio">
      <div className="container mil-portfolio mil-p-120-60">
        <div className="mil-lines-place"></div>
        <div className="mil-lines-place mil-lines-long"></div>
        <div className="row justify-content-between align-items-center">
          {projects.map((project, i) => {
            const wide = i % 4 === 1 || i % 4 === 2;
            return (
              <div className={wide ? "col-lg-6" : "col-lg-5"} key={project.route}>
                <Link
                  href={project.route}
                  className={`mil-portfolio-item mil-more${wide ? " mil-parallax" : ""} mil-mb-60`}
                  {...(wide ? { "data-value-1": "60", "data-value-2": "-60" } : {})}
                >
                  <div className={`mil-cover-frame ${wide ? "mil-hori" : "mil-vert"} mil-up`}>
                    <div className="mil-cover">
                      <img src={project.cover} alt={project.title} />
                    </div>
                  </div>
                  <div className="mil-descr">
                    <div className="mil-labels mil-up mil-mb-15">
                      <div className="mil-label mil-upper mil-accent">{project.category}</div>
                      <div className="mil-label mil-upper">{project.status ?? project.client}</div>
                    </div>
                    <h4 className="mil-up">{project.title}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    {/* portfolio end */}
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
