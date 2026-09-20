/* The template's "team" page, reworked into an experience page — one person
   rather than eight. Every class is the template's own vocabulary; only the
   content model changed, since a grid of colleague cards has nothing to show
   on a solo portfolio. */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { education, resume, site, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: `Experience | ${site.name}`,
  description: "Professional experience, technical skills, education and certifications for Abiodun Prosper, full-stack developer in Lagos, Nigeria.",
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
              <Link href="/team">Experience</Link>
            </li>
          </ul>
          <h1 className="mil-mb-60">
            Five years
            <span className="mil-thin">of</span>
            <br />
            shipping
            <span className="mil-thin">products</span>
          </h1>
          <a href="#experience" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
            <span>My experience</span>
          </a>
        </div>
      </div>
    </div>
    {/* banner end */}
    {/* intro */}
    <section id="experience">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Design
                <br />
                through
                <span className="mil-thin">to release</span>
              </h2>
              <p className="mil-up mil-mb-30">
                I&apos;m a full-stack developer with 5+ years building digital products, and hands-on software development experience since 2020. My work spans fintech, eCommerce and edtech — React, Next.js, Vue and React Native on the front, with Node.js, NestJS, Express and Laravel behind them.
              </p>
              <p className="mil-up mil-mb-60">
                That includes payment integrations, databases, authentication and AI-powered workflows, supported by a UI/UX foundation and a product-minded approach from first sketch to deployed code.
              </p>
              <div className="mil-up">
                <a href={site.cv} download className="mil-button mil-arrow-place">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place"></div>
              <div className="mil-up mil-img-frame" style={{ paddingBottom: "130%" }}>
                <img src="/img/photo/2.jpg" alt={site.name} className="mil-scale" data-value-1="1" data-value-2="1.2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* intro end */}
    {/* work history */}
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Professional experience across
              <br />
              product and engineering teams.
            </span>
          </div>
        </div>
        <h2 className="mil-center mil-up mil-mb-60">
          Where I&apos;ve
          <span className="mil-thin">worked</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {resume.map((item) => (
              <div className="row align-items-start mil-mb-30" key={`${item.company}-${item.years}`}>
                <div className="col-md-4">
                  <p className="mil-up mil-text-sm">{item.years}</p>
                </div>
                <div className="col-md-8">
                  <h4 className="mil-up">
                    {item.role}
                    <span className="mil-thin"> · {item.company}</span>
                  </h4>
                  <p className="mil-up mil-mb-30">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* work history end */}
    {/* skills */}
    <section id="skills">
      <div className="container mil-p-120-60">
        <h2 className="mil-center mil-up mil-mb-60">
          Technical
          <span className="mil-thin">toolkit</span>
        </h2>
        <div className="row">
          {skills.map((group) => (
            <div className="col-md-6 col-lg-3 mil-mb-60" key={group.category}>
              <h4 className="mil-up mil-mb-30">{group.category}</h4>
              <ul className="mil-service-list mil-dark">
                {group.items.map((skill) => (
                  <li className="mil-up" key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* skills end */}
    {/* education */}
    <section>
      <div className="container mil-p-0-120">
        <h2 className="mil-center mil-up mil-mb-60">
          Education
          <span className="mil-thin">and certifications</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            {education.map((item) => (
              <div className="row align-items-start mil-mb-30" key={item.title}>
                <div className="col-md-4">
                  <p className="mil-up mil-text-sm">{item.years}</p>
                </div>
                <div className="col-md-8">
                  <h5 className="mil-up">{item.title}</h5>
                  <p className="mil-up mil-text-sm">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* education end */}
    {/* call to action */}
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Based in {site.location}, working with teams anywhere.
              <br />
              {site.availability}.
            </span>
          </div>
        </div>
        <div className="mil-center">
          <h2 className="mil-up mil-mb-60">
            Hiring, or building
            <span className="mil-thin">something?</span>
            <br />
            Let&apos;s
            <span className="mil-thin">talk</span>
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
