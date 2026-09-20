/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The four hand-written service cards become a map over `services`; the first
   keeps the template's mil-offset so the pair staggers as designed. */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description: "Full-stack product development, mobile apps, backend APIs and integrations, and product UI/UX.",
};

export default function Page() {
  return (
    <>
    {/* banner */}
    <div className="mil-dark-bg">
      <div className="mil-inner-banner">
        <div className="mi-invert-fix">
          <div className="mil-banner-content mil-up">
            <div className="mil-animation-frame">
              <div className="mil-animation mil-position-4 mil-scale" data-value-1="6" data-value-2="1.4"></div>
            </div>
            <div className="container">
              <ul className="mil-breadcrumbs mil-light mil-mb-60">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
              </ul>
              <h1 className="mil-muted mil-mb-60">
                This is
                <span className="mil-thin">what</span>
                <br />
                I do
                <span className="mil-thin">best</span>
              </h1>
              <a href="#services" className="mil-link mil-accent mil-arrow-place mil-down-arrow">
                <span>My services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* services */}
      <section id="services">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row">
              <div className="col-lg-5">
                <div className="mil-lines-place mil-light"></div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  {services.map((service, i) => (
                    <div className="col-md-6 col-lg-6" key={service.titleMain}>
                      <Link
                        href={service.href}
                        className={`mil-service-card-lg mil-more mil-accent-cursor${i % 2 === 0 ? " mil-offset" : ""}`}
                      >
                        <h4 className="mil-muted mil-up mil-mb-30">
                          {service.titleMain}
                          <br />
                          {service.titleRest}
                        </h4>
                        <p className="mil-descr mil-light-soft mil-up mil-mb-30">{service.short}</p>
                        <ul className="mil-service-list mil-light mil-mb-30">
                          {service.points.map((point) => (
                            <li className="mil-up" key={point}>{point}</li>
                          ))}
                        </ul>
                        <div className="mil-link mil-accent mil-arrow-place mil-up">
                          <span>Read more</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* services end */}
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
            Let&rsquo;s talk about
            <span className="mil-thin">what</span>
            <br />
            you&rsquo;re
            <span className="mil-thin">building</span>
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
