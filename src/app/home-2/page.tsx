/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The template's "personal" landing, used here as the About page. */
import Link from "next/link";
import type { Metadata } from "next";
import { site, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: "Abiodun Prosper — Lagos-based full-stack developer working across TypeScript, React, React Native, Next.js, NestJS and Laravel.",
};

export default function Page() {
  return (
    <>
    {/* banner */}
    <section className="mil-banner-personal">
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="7" data-value-2="1.4" style={{ right: "25%" }}></div>
      </div>
      <div className="container">
        <div className="mil-banner-content mil-up">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mil-personal-text">
                <p className="mil-mb-60">Hello! My name is</p>
                <h1 className="mil-mb-60">
                  Abiodun
                  <br />
                  Prosper
                </h1>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* one line only — two lines run under the panel below */}
                    <span className="mil-suptitle mil-suptitle-dark mil-mb-60">
                      Full-stack developer, {site.location}
                    </span>
                    <Link href="/team" className="mil-link mil-dark mil-arrow-place">
                      <span>More about me</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-portrait-frame">
                <img src="/img/photo/prospa2.webp" alt={site.name} />
              </div>
            </div>
          </div>
          <div className="mil-banner-panel">
            {/* kept to roughly the template's length so the panel stays one line */}
            <h5>Open to remote roles worldwide</h5>
            <div className="mil-right">
              <div className="mil-social-frame">
                <ul className="mil-social-icons mil-dark">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={social.label}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/portfolio-3" className="mil-button mil-arrow-place">
                <span>View portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
