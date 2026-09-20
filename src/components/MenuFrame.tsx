"use client";

/* Converted from the Ashley HTML template.
   The template hard-codes `mil-active` on the group holding the current page;
   here it is derived from the pathname so the "current page" label stays right. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuGroups, menuLists, menuOffices, site } from "@/lib/data";

export default function MenuFrame() {
  const pathname = usePathname();

  return (
    <div className="mil-menu-frame">
      {/* frame clone */}
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">{site.logo}</Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      {/* frame clone end */}
      <div className="container">
        <div className="mil-menu-content">
          <div className="row">
            <div className="col-xl-5">

              <nav className="mil-main-menu" id="swupMenu">
                <ul>
                  {menuGroups.map((group) => {
                    const active = group.items.some((item) => item.href === pathname);
                    return (
                      <li key={group.label} className={`mil-has-children${active ? " mil-active" : ""}`}>
                        <a href="#.">{group.label}</a>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item.href + item.label}>
                              <Link href={item.href}>{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
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

                      <h6 className="mil-muted mil-mb-30">{menuLists.projects.title}</h6>

                      <ul className="mil-menu-list">
                        {menuLists.projects.items.map((item) => (
                          <li key={item.href + item.label}>
                            <Link href={item.href} className="mil-light-soft">{item.label}</Link>
                          </li>
                        ))}
                      </ul>

                    </div>
                    <div className="col-lg-4 mil-mb-60">

                      <h6 className="mil-muted mil-mb-30">{menuLists.useful.title}</h6>

                      <ul className="mil-menu-list">
                        {menuLists.useful.items.map((item) => (
                          <li key={item.href + item.label}>
                            {item.external ? (
                              <a href={item.href} target="_blank" rel="noreferrer" className="mil-light-soft">{item.label}</a>
                            ) : (
                              <Link href={item.href} className="mil-light-soft">{item.label}</Link>
                            )}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                  <div className="mil-divider mil-mb-60"></div>
                  <div className="row justify-content-between">

                    {menuOffices.map((office, i) => (
                      <div className="col-lg-4 mil-mb-60" key={office.title}>

                        <h6 className="mil-muted mil-mb-30">{office.title}</h6>

                        <p className={i === 0 ? "mil-light-soft mil-up" : "mil-light-soft"}>
                          {office.text} <span className="mil-no-wrap">{office.contact}</span>
                        </p>

                      </div>
                    ))}
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
