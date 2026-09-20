/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The template's form posts nowhere; this one opens a pre-addressed draft in
   the visitor's mail client, and the email and phone are shown as links too,
   so the page still works if the form does not. */
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: "Get in touch with Abiodun Prosper about full-stack engineering roles and product work.",
};

export default function Page() {
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
          style={{ border: "0" }}
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
          Let&apos;s
          <span className="mil-thin">Talk</span>
        </h3>
        <p className="mil-center mil-up mil-mb-120">
          Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>.
          <br />
          {site.availability}.
        </p>
        <form className="row align-items-center" action={`mailto:${site.email}`} method="post" encType="text/plain">
          <div className="col-lg-6 mil-up">
            <input type="text" name="name" placeholder="What's your name" autoComplete="name" required />
          </div>
          <div className="col-lg-6 mil-up">
            <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
          </div>
          <div className="col-lg-12 mil-up">
            <textarea name="message" placeholder="Tell me about the role or project" required></textarea>
          </div>
          <div className="col-lg-8">
            <p className="mil-up mil-mb-30">
              <span className="mil-accent">*</span>
              This opens a draft in your email app. If nothing happens, use the email link above.
            </p>
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
      <Footer />
    </>
  );
}
