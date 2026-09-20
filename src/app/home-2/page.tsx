/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ashley" };


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
                  Ashley
                  <br />
                  Goodman
                </h1>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <span className="mil-suptitle mil-suptitle-dark mil-mb-60">
                      Passionately Creating Design Wonders:
                      <br />
                      Unleashing Boundless Creativity
                    </span>
                    <Link href="/services" className="mil-link mil-dark mil-arrow-place">
                      <span>More about me</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-portrait-frame">
                <img src="/img/faces/large/1.png" alt="Portrait" />
              </div>
            </div>
          </div>
          <div className="mil-banner-panel">
            <h5>Designing a Better World Today</h5>
            <div className="mil-right">
              <div className="mil-social-frame">
                <ul className="mil-social-icons mil-dark">
                  <li>
                    <a href="#." target="_blank" className="social-icon">
                      <i className="far fa-circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#." target="_blank" className="social-icon">
                      <i className="far fa-circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#." target="_blank" className="social-icon">
                      <i className="far fa-circle"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#." target="_blank" className="social-icon">
                      <i className="far fa-circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <Link href="/portfolio-3" className="mil-button mil-arrow-place">
                <span>View pOrtfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
