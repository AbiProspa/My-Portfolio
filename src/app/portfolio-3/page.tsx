/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   Each slide keeps its data-swiper-parallax hooks; only the content changes. */
import Link from "next/link";
import type { Metadata } from "next";
import { projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Project highlights | ${site.name}`,
  description: "A slider walkthrough of selected full-stack web and mobile projects.",
};

export default function Page() {
  return (
    <>
    {/* portfolio */}
    <section className="mil-portfolio-slider-frame">
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="1" data-value-2="2" style={{ top: "-60px", right: "-4px" }}></div>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-9">
            <div className="swiper-container mil-portfolio-slider mil-up">
              <div className="swiper-wrapper">
                {projects.map((project) => (
                  <div className="swiper-slide" key={project.route}>
                    <div className="mil-portfolio-item mil-slider-item" data-swiper-parallax="-30">
                      <div className="mil-cover-frame mil-drag">
                        <div className="mil-cover" data-swiper-parallax-scale="1.3">
                          <img src={project.cover} alt={project.title} />
                        </div>
                      </div>
                      <div className="mil-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                        <div className="mil-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                          <div className="mil-labels mil-mb-15">
                            <div className="mil-label mil-upper mil-accent">{project.category}</div>
                            <div className="mil-label mil-upper">{project.status ?? project.client}</div>
                          </div>
                          <h5>{project.title}</h5>
                        </div>
                        <div data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                          <Link href={project.route} className="mil-button mil-arrow-place">
                            <span>View Project</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 mil-relative">
            <div className="mil-portfolio-nav">
              <div className="mil-portfolio-btns-frame">
                <div className="swiper-portfolio-pagination"></div>
                <div className="mil-slider-nav">
                  <div className="mil-slider-arrow mil-prev mil-portfolio-prev mil-arrow-place"></div>
                  <div className="mil-slider-arrow mil-portfolio-next mil-arrow-place"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
