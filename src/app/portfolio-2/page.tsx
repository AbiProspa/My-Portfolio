/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   `layout` repeats the template's six-card rhythm across however many
   projects there are, so the mixed column widths and parallax stay intact. */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `All projects | ${site.name}`,
  description: "Every project — full-stack web and mobile work across fintech, food, relocation, NGO and business operations.",
};

const layout = [
  { col: "col-lg-6", parallax: false, zoom: true },
  { col: "col-lg-5", parallax: true, zoom: false },
  { col: "col-lg-12", parallax: false, zoom: false },
  { col: "col-lg-5", parallax: true, zoom: false },
  { col: "col-lg-6", parallax: false, zoom: false },
  { col: "col-lg-12", parallax: false, zoom: false },
];

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
              <Link href="/portfolio-2">Portfolio</Link>
            </li>
          </ul>
          <h1 className="mil-mb-60">
            Everything
            <br />
            I&apos;ve
            <span className="mil-thin">built</span>
          </h1>
          <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
            <span>All projects</span>
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
        <div className="row justify-content-between align-items-end">
          {projects.map((project, i) => {
            const shape = layout[i % layout.length];
            return (
              <div className={shape.col} key={project.route}>
                <Link
                  href={project.route}
                  className={`mil-portfolio-item mil-more${shape.parallax ? " mil-parallax" : ""} mil-mb-60`}
                  {...(shape.parallax ? { "data-value-1": "-30", "data-value-2": "0" } : {})}
                >
                  <div className="mil-cover-frame mil-hori mil-up">
                    <div
                      className={`mil-cover${shape.zoom ? " mil-scale" : ""}`}
                      {...(shape.zoom ? { "data-value-1": "1.2", "data-value-2": "1" } : {})}
                    >
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
              Looking for someone to own a feature end to end?
              <br />
              That is the part of the job I enjoy most.
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
