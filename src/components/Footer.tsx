import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">{site.name}.</div>

              <p className="mil-light-soft mil-up mil-mb-30">Looking for a full-stack developer or product partner? Let&apos;s talk:</p>

              <a
                href={`mailto:${site.email}`}
                className="mil-button mil-arrow-place mil-up"
              >
                <span>{site.email}</span>
              </a>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      {nav.map((item) => (
                        <li key={item.href} className="mil-up">
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    {site.socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noreferrer" className="mil-light-soft" aria-label={s.label}>
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">{site.location}</h6>
                  <p className="mil-light-soft mil-up">
                    {site.tagline} <span className="mil-no-wrap"><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a></span>
                  </p>
                </div>
                <div className="col-md-6 col-lg-5 mil-mb-60">
                  <h6 className="mil-muted mil-up mil-mb-30">Availability</h6>
                  <p className="mil-light-soft mil-up">
                    Open to remote roles and selected product projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons mil-up">
                    {site.socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={s.label}>
                          {" "}
                          <i className={s.icon}></i>
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
  );
}
