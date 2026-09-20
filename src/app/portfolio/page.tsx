import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Projects | Abiodun Prosper",
  description: "Full-stack web and mobile projects across fintech, food, relocation, and business operations.",
};

export default function PortfolioPage() {
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
            </ul>
            <h1 className="mil-mb-60">
              Portfolio
            </h1>
            <a href="#portfolio" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>My works</span>
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
            {projects.map((p, i) => {
              // repeat the template's rhythm: tall, wide, wide, tall
              const wide = i % 4 === 1 || i % 4 === 2;
              return (
                <div className={wide ? "col-lg-6" : "col-lg-5"} key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`mil-portfolio-item mil-more${wide ? " mil-parallax" : ""} mil-mb-60`}
                    {...(wide ? { "data-value-1": "60", "data-value-2": "-60" } : {})}
                  >
                    <div className={`mil-cover-frame ${wide ? "mil-hori" : "mil-vert"} mil-up`}>
                      <div className="mil-cover">
                        <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="mil-descr">
                      <div className="mil-labels mil-up mil-mb-15">
                        <div className="mil-label mil-upper mil-accent">{p.category}</div>
                      {p.year && <div className="mil-label mil-upper">{p.year}</div>}
                      </div>
                      <h4 className="mil-up">{p.title}</h4>
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
