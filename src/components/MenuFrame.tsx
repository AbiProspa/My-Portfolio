"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, projects, site } from "@/lib/data";

export default function MenuFrame() {
  const pathname = usePathname();

  return (
    <div className="mil-menu-frame">
      {/* frame clone */}
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo" aria-label={site.name}>
          {site.logo}
        </Link>
        <button type="button" className="mil-menu-btn" aria-label="Toggle navigation menu" aria-controls="primary-navigation" aria-expanded="false">
          <span aria-hidden="true"></span>
        </button>
      </div>
      {/* frame clone end */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="mil-main-menu" id="primary-navigation" aria-label="Main navigation">
                <ul>
                  {nav.map((item) => (
                    <li key={item.href} className={pathname === item.href ? "mil-active" : ""}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-xl-7">
              <div className="mil-menu-right-frame">
                <div className="mil-animation-in">
                  <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                  </div>
                </div>
                <div className="mil-menu-right">
                  <div className="row">
                    <div className="col-lg-8 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Projects</h6>
                      <ul className="mil-menu-list">
                        {projects.map((p) => (
                          <li key={p.slug}>
                            <Link href={`/projects/${p.slug}`} className="mil-light-soft">
                              {p.title.split(" — ")[0]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Social</h6>
                      <ul className="mil-menu-list">
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
                  <div className="mil-divider mil-mb-60"></div>
                  <div className="row justify-content-between">
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">{site.location}</h6>
                      <p className="mil-light-soft mil-up">
                        {site.tagline} <span className="mil-no-wrap"><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a></span>
                      </p>
                    </div>
                    <div className="col-lg-4 mil-mb-60">
                      <h6 className="mil-muted mil-mb-30">Email</h6>
                      <p className="mil-light-soft">
                        <a className="mil-no-wrap" href={`mailto:${site.email}`}>{site.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
