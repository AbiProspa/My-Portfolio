/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The newsletter form is replaced by a direct email call to action, since
   there is no list to subscribe to. */
import Link from "next/link";
import { site, socials } from "@/lib/data";

export default function Footer() {
  return (
    <>
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">{site.name}.</div>
              <p className="mil-light-soft mil-up mil-mb-30">Hiring, or building something? Let&apos;s talk:</p>
              <a href={`mailto:${site.email}`} className="mil-button mil-arrow-place mil-up">
                <span>{site.email}</span>
              </a>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up mil-active">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/portfolio-1">Portfolio</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/team">Experience</Link>
                      </li>
                      <li className="mil-up">
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li>
                      <a href={site.github} target="_blank" rel="noreferrer" className="mil-light-soft">GitHub</a>
                    </li>
                    <li>
                      <a href={site.linkedin} target="_blank" rel="noreferrer" className="mil-light-soft">LinkedIn</a>
                    </li>
                    <li>
                      <a href={site.cv} download className="mil-light-soft">Download CV</a>
                    </li>
                    <li>
                      <Link href="/contact" className="mil-light-soft">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Based in</h6>
                  <p className="mil-light-soft mil-up">
                    {site.location} — working remotely with teams worldwide.
                    <span className="mil-no-wrap">{site.phone}</span>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Availability</h6>
                  <p className="mil-light-soft mil-up">
                    {site.availability}.
                    <span className="mil-no-wrap">{site.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a href={social.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={social.label}>
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mil-light-soft mil-up">© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
