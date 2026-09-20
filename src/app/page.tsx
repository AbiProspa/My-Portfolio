/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { clients, projects, services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description:
    "Abiodun Prosper is a Lagos-based full-stack developer building web and mobile products with TypeScript, React, React Native, Next.js, NestJS and Laravel.",
};


const pick = (...routes: string[]) =>
  routes.map((route) => projects.find((project) => project.route === route)!);

export default function Page() {
  const featured = pick("/project-2", "/project-1", "/project-7", "/project-8");
  const caseStudies = pick("/project-2", "/project-1");

  return (
    <>
    {/* banner */}
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
          <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
        </div>
        <div className="mil-gradient"></div>
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Full-Stack
              <span className="mil-thin">Developer</span>
              <br />
              Building
              <span className="mil-thin">Digital Products</span>
            </h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">
                  I&apos;m Abiodun Prosper, a Lagos-based full-stack developer. I build web and mobile products for fintech and startup teams across TypeScript, React, React Native, Next.js and Node.js.
                </p>
              </div>
            </div>
            <Link href="/portfolio-1" className="mil-button mil-arrow-place mil-btn-space">
              <span>Selected work</span>
            </Link>
            <a href={site.cv} download className="mil-link mil-muted mil-arrow-place">
              <span>Download CV</span>
            </a>
            <div className="mil-circle-text">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    {/* circle text */}
                    <textPath xlinkHref="#circlePath">Scroll down - Scroll down -</textPath>
                  </text>
                </g>
              </svg>
              <a href="#about" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* banner end */}
    {/* about */}
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Product-minded
                <br />
                <span className="mil-thin">Engineering</span>
              </h2>
              <p className="mil-up mil-mb-30">
I&apos;m a full-stack developer with 5+ years building digital products, and hands-on software development experience since 2020. My work spans fintech, eCommerce, food and edtech, combining React and React Native interfaces with Node.js, NestJS and Laravel services.
              </p>
              <p className="mil-up mil-mb-60">
A UI/UX background helps me connect product requirements, interface design and implementation. I like owning a feature from the first problem-solving conversation through development, integration and release.
              </p>
              <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <img src="/img/faces/customers/2.jpg" alt="Abiodun Prosper" />
                </div>
                <h6 className="mil-quote mil-up">
                  Based in Lagos,
                  <span className="mil-thin">Nigeria —</span>
                  open to
                  <span className="mil-thin">remote work worldwide</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place"></div>
              <div className="mil-up mil-img-frame" style={{ paddingBottom: "160%" }}>
                <img src="/img/photo/1.jpg" alt="Abiodun Prosper at work" className="mil-scale" data-value-1="1" data-value-2="1.2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about end */}
    {/* services */}
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: "300px", right: "-100px" }}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: "150px" }}></div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  Web, mobile, backend and product design work
                  <br />
                  for teams building useful software.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img src="/img/photo/2.jpg" alt="" />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">
                Product
                <span className="mil-thin">Engineering</span>
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">
                From UI
                <span className="mil-thin">to API.</span>
              </h2>
              <Link href="/services" className="mil-services-button mil-button mil-arrow-place">
                <span>What I do</span>
              </Link>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            {services.map((service) => (
              <div className="col-md-6 col-lg-3 mil-services-grid-item p-0" key={service.titleMain}>
                <Link href={service.href} className="mil-service-card-sm mil-up">
                  <h5 className="mil-muted mil-mb-30">
                    {service.titleMain}
                    <br />
                    {service.titleRest}
                  </h5>
                  <p className="mil-light-soft mil-mb-30">{service.short}</p>
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* services end */}
    {/* selected projects */}
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Selected
                <br />
                Projects
              </h2>
              <p className="mil-up mil-mb-30">
                Product work across newcomer services, fintech, food and mobility — each with a clear account of what I built and the stack behind it.
              </p>
              <p className="mil-up mil-mb-60">Open any project for scope, implementation detail and a link to the live product.</p>
              <div className="mil-up">
                <Link href="/portfolio-1" className="mil-button mil-arrow-place mil-mb-60">
                  <span>View portfolio</span>
                </Link>
              </div>
              <h4 className="mil-up">
                <span className="mil-thin">Product</span>
                thinking with
                <br />
                <span className="mil-thin">engineering</span>
                ownership.
              </h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="mil-lines-place"></div>
              <div className="row mil-mb-60">
                <div className="col-sm-6">
                  {[featured[0], featured[2]].map((project) => (
                    <div className="mil-team-card mil-up mil-mb-30" key={project.route}>
                      <img src={project.cover} alt={project.title} />
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">
                            <Link href={project.route}>{project.titleMain}</Link>
                          </h5>
                          <p className="mil-link mil-light-soft mil-mb-10">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-sm-6">
                  <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{ height: "30px" }}>
                    <span className="mil-accent">*</span>
                    Selected client projects
                  </p>
                  {[featured[1], featured[3]].map((project) => (
                    <div className="mil-team-card mil-up mil-mb-30" key={project.route}>
                      <img src={project.cover} alt={project.title} />
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">
                            <Link href={project.route}>{project.titleMain}</Link>
                          </h5>
                          <p className="mil-link mil-light-soft mil-mb-10">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* selected projects end */}
    {/* clients */}
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <div className="swiper-container mil-infinite-show mil-up">
          <div className="swiper-wrapper">
            {[...clients, ...clients].map((client, i) => (
              <div className="swiper-slide" key={`${client.name}-${i}`}>
                <div className="mil-partner-frame" style={{ width: client.width }}>
                  <img src={client.logo} alt={client.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* clients end */}
    {/* featured case studies */}
    <section>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Featured case studies:</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <Link href="/portfolio-2" className="mil-link mil-dark mil-arrow-place">
                <span>View all</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {caseStudies.map((project) => (
            <div className="col-lg-6" key={project.route}>
              <Link href={project.route} className="mil-blog-card mil-mb-60">
                <div className="mil-cover-frame mil-up">
                  <img src={project.cover} alt={project.title} />
                </div>
                <div className="mil-post-descr">
                  <div className="mil-labels mil-up mil-mb-30">
                    <div className="mil-label mil-upper mil-accent">{project.category}</div>
                    <div className="mil-label mil-upper">{project.client}</div>
                  </div>
                  <h4 className="mil-up mil-mb-30">{project.title}</h4>
                  <p className="mil-post-text mil-up mil-mb-30">{project.intro}</p>
                  <div className="mil-link mil-dark mil-arrow-place mil-up">
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* featured case studies end */}
      <Footer />
    </>
  );
}
