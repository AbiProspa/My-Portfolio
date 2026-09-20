import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Product Engineering | Abiodun Prosper",
  description: "Full-stack, mobile, backend integration, and product UI/UX services from Abiodun Prosper.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mil-inner-banner" aria-labelledby="services-heading">
        <div className="mil-banner-content mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-mb-60">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
            <h1 id="services-heading" className="mil-mb-30">Product engineering <span className="mil-thin">services</span></h1>
            <p className="mil-text-xl">I work with teams that need thoughtful product design and dependable web, mobile, and backend delivery.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading">
        <div className="container mil-p-120-60">
          <h2 id="capabilities-heading" className="mil-center mil-up mil-mb-60">Ways I can <span className="mil-thin">contribute</span></h2>
          <div className="row">
            {services.map((service) => (
              <div className="col-md-6 col-lg-6 mil-mb-30" key={service.slug}>
                <article className="mil-service-card-lg">
                  <h3 className="mil-up mil-mb-30">{service.title}</h3>
                  <p className="mil-descr mil-up mil-mb-30">{service.short}</p>
                  <ul className="mil-service-list mil-dark mil-mb-30">
                    {service.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <Link href="/contact" className="mil-link mil-dark mil-arrow-place mil-up"><span>Discuss a role or project</span></Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-120-120 mil-center">
          <h2 className="mil-up mil-mb-30">Let&apos;s talk about <span className="mil-thin">what you&apos;re building</span></h2>
          <p className="mil-up mil-mb-60">Based in {site.location}; open to remote engineering roles and selected product engagements.</p>
          <Link href="/contact" className="mil-button mil-arrow-place"><span>Get in touch</span></Link>
        </div>
      </section>
    </>
  );
}
