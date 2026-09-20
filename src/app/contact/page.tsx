import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Abiodun Prosper",
  description: "Contact Abiodun Prosper about full-stack engineering roles and selected product engagements.",
};

export default function ContactPage() {
  return (
    <>
      {/* banner */}
      <div className="mil-inner-banner mil-p-0-120">
        <div className="mil-banner-content mil-center mil-up">
          <div className="container">
            <ul className="mil-breadcrumbs mil-center mil-mb-60">
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <h1 className="mil-mb-60">Get in touch!</h1>
            <a href="#contact" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
              <span>Send message</span>
            </a>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://maps.google.com/maps?q=Lagos%2C%20Nigeria&t=&z=11&ie=UTF8&iwloc=&output=embed"
            title={`Map of ${site.location}`}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* map end */}

      {/* contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-30">
            Let&apos;s <span className="mil-thin">Talk</span>
          </h3>
          <p className="mil-center mil-up mil-mb-60">
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>.
            This form opens a draft in your email application.
          </p>
          <form
            className="row align-items-center"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="col-lg-6 mil-up">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" type="text" name="name" placeholder="What's your name" autoComplete="name" required />
            </div>
            <div className="col-lg-6 mil-up">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" type="email" name="email" placeholder="Your email address" autoComplete="email" required />
            </div>
            <div className="col-lg-12 mil-up">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell me about your project or role" required></textarea>
            </div>
            <div className="col-lg-8">
              <p className="mil-up mil-mb-30">If your email application does not open, use the email link above.</p>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right mil-up mil-mb-30">
                <button type="submit" className="mil-button mil-arrow-place">
                  <span>Send message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* contact form end */}
    </>
  );
}
