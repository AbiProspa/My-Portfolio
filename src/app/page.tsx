import Link from "next/link";
import { projects, resume, services, site, skills } from "@/lib/data";

const featuredSlugs = ["entrant", "yummeals", "altbank-cards", "altdrive"];
const caseStudySlugs = ["entrant", "yummeals", "altdrive"];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
  const caseStudies = caseStudySlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

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
                Full-Stack <span className="mil-thin">Developer</span>
                <br /> Building <span className="mil-thin">Digital Products</span>
              </h1>
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <p className="mil-hero-intro mil-mb-60">
                    I&apos;m Abiodun Prosper, a Lagos-based full-stack developer. I build web and mobile products for
                    fintech and startup teams, working across TypeScript, React, React Native, Next.js, and Node.js.
                    I&apos;m open to remote engineering roles and selected product work.
                  </p>
                </div>
              </div>

              <Link href="/portfolio" className="mil-button mil-arrow-place mil-btn-space">
                <span>Selected work</span>
              </Link>

              <a href="/Abiodun-Prosper-CV.pdf" download="Abiodun-Prosper-CV.pdf" className="mil-link mil-muted mil-arrow-place">
                <span>Download CV</span>
              </a>

              <section className="mil-hero-contact" aria-labelledby="hero-contact-title">
                <h2 id="hero-contact-title">Contact me</h2>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <span aria-hidden="true">·</span>
                <a href={site.socials.find((social) => social.label === "LinkedIn")?.href} target="_blank" rel="noreferrer">LinkedIn</a>
                <span aria-hidden="true">·</span>
                <a href={site.socials.find((social) => social.label === "GitHub")?.href} target="_blank" rel="noreferrer">GitHub</a>
              </section>

              <div className="mil-circle-text">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 300 300"
                  xmlSpace="preserve"
                  className="mil-ct-svg mil-rotate"
                  data-value="360"
                >
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text style={{ letterSpacing: "6.5px" }}>
                      <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                    </text>
                  </g>
                </svg>
                  <a href="#about" aria-label="Scroll to About" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
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
                  Product-minded <br />
                  <span className="mil-thin">Engineering</span>
                </h2>
                <p className="mil-up mil-mb-30">
                  I&apos;m a full-stack developer with 5+ years of experience building digital products and hands-on
                  software development experience since 2020. My work spans fintech, eCommerce, food, and edtech,
                  combining React and React Native interfaces with Node.js, NestJS, and Laravel services.
                </p>

                <p className="mil-up mil-mb-60">
                  My UI/UX background helps me connect product requirements, interface design, and implementation.
                  I enjoy owning features from early problem-solving through development, integration, and release.
                </p>

                <p className="mil-up mil-text-sm">Based in Lagos, Nigeria · Open to remote opportunities</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mil-about-photo mil-mb-90">
                <div className="mil-lines-place"></div>
                <div className="mil-up mil-img-frame" style={{ paddingBottom: "160%" }}>
                  <img src="/img/photo/1.jpg" alt="Entrant mobile application onboarding screen" className="mil-scale" data-value-1="1" data-value-2="1.2" />
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
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="2.4"
              data-value-2="1.4"
              style={{ top: "300px", right: "-100px" }}
            ></div>
            <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: "150px" }}></div>
          </div>
          <div className="container mil-p-120-0">
            <div className="mil-mb-120">
              <div className="row">
                <div className="col-lg-10">
                  <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                    Web, mobile, backend, and product design experience
                    <br /> for teams building useful software.
                  </span>
                </div>
              </div>

              <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                <span className="mil-text-image">
                  <img src="/img/photo/2.jpg" alt="" aria-hidden="true" />
                </span>
                <h2 className="mil-h1 mil-muted mil-center">
                  Product <span className="mil-thin">Engineering</span>
                </h2>
              </div>
              <div className="mil-complex-text justify-content-center mil-up">
                <h2 className="mil-h1 mil-muted mil-center">
                  From UI <span className="mil-thin">to API.</span>
                </h2>
                <Link href="/services" className="mil-services-button mil-button mil-arrow-place">
                  <span>What I do</span>
                </Link>
              </div>
            </div>

            <div className="row mil-services-grid m-0">
              {services.map((s) => (
                <div key={s.slug} className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                  <Link href="/services" className="mil-service-card-sm mil-up">
                    <h5 className="mil-muted mil-mb-30">
                      {s.title.split(" and ")[0]} <br />
                      {s.title.includes(" and ") ? `and ${s.title.split(" and ")[1]}` : ""}
                    </h5>
                    <p className="mil-light-soft mil-mb-30">{s.short}</p>
                    <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* services end */}

      {/* featured work (team section layout) */}
      <section>
        <div className="container mil-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xl-4">
              <div className="mil-mb-90">
                <h2 className="mil-up mil-mb-60">
                  Selected <br />
                  Projects
                </h2>
                <p className="mil-up mil-mb-30">
                  Product work across newcomer services, fintech, food, and mobility — with clear examples of my
                  contribution and the technologies behind each build.
                </p>

                <p className="mil-up mil-mb-60">Explore the case studies for product scope, implementation, and proof.</p>

                <div className="mil-up">
                  <Link href="/portfolio" className="mil-button mil-arrow-place mil-mb-60">
                    <span>View portfolio</span>
                  </Link>
                </div>

                <h4 className="mil-up">
                  <span className="mil-thin">Product</span> thinking <br />
                  with engineering <span className="mil-thin">ownership.</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-team-list">
                <div className="mil-lines-place"></div>

                <div className="row mil-mb-60">
                  <div className="col-sm-6">
                    {[featured[0], featured[2]].map((p) => (
                      <div key={p.slug} className="mil-team-card mil-up mil-mb-30">
                        <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h5 className="mil-muted mil-mb-5">
                              <Link href={`/projects/${p.slug}`}>{p.title.split(" — ")[0]}</Link>
                            </h5>
                            <p className="mil-link mil-light-soft mil-mb-10">{p.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-6">
                    <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{ height: "30px" }}>
                      <span className="mil-accent">*</span> Selected client projects
                    </p>

                    {[featured[1], featured[3]].map((p) => (
                      <div key={p.slug} className="mil-team-card mil-up mil-mb-30">
                        <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h5 className="mil-muted mil-mb-5">
                              <Link href={`/projects/${p.slug}`}>{p.title.split(" — ")[0]}</Link>
                            </h5>
                            <p className="mil-link mil-light-soft mil-mb-10">{p.category}</p>
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
      {/* featured work end */}

      {/* experience */}
      <section className="mil-soft-bg" aria-labelledby="experience-heading">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                Professional experience
                <br /> across product and engineering teams.
              </span>
            </div>
          </div>

          <h2 id="experience-heading" className="mil-center mil-up mil-mb-60">
            Experience <span className="mil-thin">that informs the work</span>
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              {resume.map((item) => (
                <article key={`${item.company}-${item.years}`} className="row align-items-start mil-mb-30">
                  <div className="col-md-4"><p className="mil-up mil-text-sm">{item.years}</p></div>
                  <div className="col-md-8">
                    <h4 className="mil-up">{item.role} <span className="mil-thin">· {item.company}</span></h4>
                    <p className="mil-up mil-mb-30">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* technical skills */}
      <section aria-labelledby="skills-heading">
        <div className="container mil-p-120-120">
          <h2 id="skills-heading" className="mil-center mil-up mil-mb-60">Technical <span className="mil-thin">toolkit</span></h2>
          <div className="row">
            {skills.map((group) => (
              <div className="col-md-6 col-lg-3 mil-mb-30" key={group.category}>
                <h4 className="mil-up mil-mb-30">{group.category}</h4>
                <ul className="mil-service-list mil-dark mil-up">
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* case studies (blog layout) */}
      <section>
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-up">Featured Case Studies:</h3>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <Link href="/portfolio" className="mil-link mil-dark mil-arrow-place">
                  <span>View all</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {caseStudies.map((p) => (
              <div key={p.slug} className="col-lg-6">
                <Link href={`/projects/${p.slug}`} className="mil-blog-card mil-mb-60">
                  <div className="mil-cover-frame mil-up">
                    <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="mil-post-descr">
                    <div className="mil-labels mil-up mil-mb-30">
                      <div className="mil-label mil-upper mil-accent">{p.category}</div>
                      {p.year && <div className="mil-label mil-upper">{p.year}</div>}
                    </div>
                    <h4 className="mil-up mil-mb-30">{p.title}</h4>
                    <p className="mil-post-text mil-up mil-mb-30">{p.intro}</p>
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
      {/* case studies end */}
    </>
  );
}
