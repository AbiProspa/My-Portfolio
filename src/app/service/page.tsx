/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The template's pricing section is dropped: I don't publish fixed package
   prices, and inventing them would be worse than leaving them out. The
   accordion and "other services" markup is kept exactly as the template has it. */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Full-stack product development | ${site.name}`,
  description: "How I work: discovery, interface, API, integrations and release — with the stack and practices behind each stage.",
};

const approach = [
  {
    head: "Discovery and scoping",
    body: [
      "Before any code, I want to understand the job the product is doing and for whom. That means reading the existing flows, asking what success looks like, and agreeing what is in and out of the first release.",
      "Coming from a UI/UX background, I tend to sketch the flow in Figma first. It is far cheaper to move a step around in a prototype than in a shipped screen.",
    ],
  },
  {
    head: "Interface development",
    body: [
      "React and Next.js on the web, React Native on mobile, typed end to end with TypeScript. I build mobile-first, because most of the products I work on are opened on a phone before a desktop.",
      "Components come out of a design system rather than one-off styles, so the interface stays consistent as the product grows.",
    ],
  },
  {
    head: "APIs and data",
    body: [
      "Node.js, NestJS, Express or Laravel over PostgreSQL, MySQL or MongoDB, with Redis where caching earns its place. I design REST endpoints around the flows the client actually needs, not around table shapes.",
      "Authentication is handled with JWT and OAuth 2.0, and I have shipped Paystack and Flutterwave payment integrations into live checkout flows.",
    ],
  },
  {
    head: "Integrations and automation",
    body: [
      "A lot of product value sits between systems. I have wired OpenAI and Claude APIs into customer-support and WhatsApp automation workflows, and used n8n to connect business processes that would otherwise be manual.",
      "The aim is always the same: remove a repetitive human step without hiding what the system is doing.",
    ],
  },
  {
    head: "Release and handover",
    body: [
      "Git-based workflows, CI/CD, and admin or CMS tooling so the team can manage content and operations without coming back to a developer for every change.",
      "I document what I build and hand it over properly — an API reference and a Postman collection beat a long conversation.",
    ],
  },
];

export default function Page() {
  const others = services.slice(1);

  return (
    <>
    {/* banner */}
    <div className="mil-inner-banner">
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
      </div>
      <div className="mil-banner-content mil-up">
        <div className="container">
          <ul className="mil-breadcrumbs mil-mb-60">
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
          <h1 className="mil-mb-60">
            Full-Stack
            <span className="mil-thin">Product</span>
            <br />
            <span className="mil-thin">Development</span>
          </h1>
          <a href="#service" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
            <span>About service</span>
          </a>
        </div>
      </div>
    </div>
    {/* banner end */}
    {/* service */}
    <section id="service">
      <div className="container mil-p-120-90">
        <div className="row justify-content-between">
          <div className="col-lg-4 mil-relative mil-mb-90">
            <h4 className="mil-up mil-mb-30">
              My
              <span className="mil-thin">Approach</span>
              <br />
              and
              <span className="mil-thin">Work Specifics</span>
            </h4>
            <p className="mil-up mil-mb-30">
              I build products end to end — interface, API, integrations and release — rather than handing work over a wall halfway through. That means fewer gaps between what was designed and what ships.
            </p>
            <div className="mil-up">
              <Link href="/portfolio-3" className="mil-link mil-dark mil-arrow-place">
                <span>View works</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            {approach.map((item) => (
              <div className="mil-accordion-group mil-up" key={item.head}>
                <div className="mil-accordion-menu">
                  <p className="mil-accordion-head">{item.head}</p>
                  <div className="mil-symbol mil-h3">
                    <div className="mil-plus">+</div>
                    <div className="mil-minus">-</div>
                  </div>
                </div>
                <div className="mil-accordion-content">
                  {item.body.map((paragraph, i) => (
                    <p className="mil-mb-30" key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* service end */}
    {/* other services */}
    <section>
      <div className="container mil-p-120-90">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Other services</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <Link href="/services" className="mil-link mil-dark mil-arrow-place">
                <span>View all</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {others.map((service) => (
            <div className="col-lg-4" key={service.titleMain}>
              <Link href={service.href} className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
                <h4 className="mil-up mil-mb-30">
                  {service.titleMain}
                  <br />
                  {service.titleRest}
                </h4>
                <p className="mil-descr mil-up mil-mb-30">{service.short}</p>
                <ul className="mil-service-list mil-dark mil-mb-30">
                  {service.points.map((point) => (
                    <li className="mil-up" key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mil-link mil-dark mil-arrow-place mil-up">
                  <span>Read more</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
