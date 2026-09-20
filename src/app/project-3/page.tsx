/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ashley" };


export default function Page() {
  return (
    <>
    {/* banner */}
    <div className="mil-inner-banner">
      <div className="mil-banner-content mil-up">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"></div>
        </div>
        <div className="container">
          <ul className="mil-breadcrumbs mil-mb-60">
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/portfolio-1">Portfolio</Link>
            </li>
            <li>
              <Link href="/project-1">Project</Link>
            </li>
          </ul>
          <h1 className="mil-mb-60">
            Kemia Honest
            <span className="mil-thin">Skincare</span>
          </h1>
          <a href="#project" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
            <span>Read more</span>
          </a>
        </div>
      </div>
    </div>
    {/* banner end */}
    {/* project */}
    <section id="project">
      <div className="container mil-p-120-120">
        <div className="swiper-container mil-1-slider mil-up">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="mil-image-frame mil-horizontal mil-drag">
                <img src="/img/works/3/1.jpg" alt="image" />
                <a data-fancybox="gallery" data-no-swup="" href="/img/works/3/1.jpg" className="mil-zoom-btn">
                  <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mil-image-frame mil-horizontal mil-drag">
                <img src="/img/works/3/2.jpg" alt="image" />
                <a data-fancybox="gallery" data-no-swup="" href="/img/works/3/2.jpg" className="mil-zoom-btn">
                  <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mil-image-frame mil-horizontal mil-drag">
                <img src="/img/works/3/3.jpg" alt="image" />
                <a data-fancybox="gallery" data-no-swup="" href="/img/works/3/3.jpg" className="mil-zoom-btn">
                  <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="mil-image-frame mil-horizontal mil-drag">
                <img src="/img/works/3/4.jpg" alt="image" />
                <a data-fancybox="gallery" data-no-swup="" href="/img/works/3/4.jpg" className="mil-zoom-btn">
                  <img src="/img/icons/zoom.svg" alt="zoom" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-info mil-up">
          <div>
            Client:
            <span className="mil-dark">Envato Market</span>
          </div>
          <div>
            Date:
            <span className="mil-dark">April 2023</span>
          </div>
          <div>
            Author:
            <span className="mil-dark">Paul Trueman</span>
          </div>
        </div>
        <div className="row justify-content-between mil-p-120-90">
          <div className="col-lg-5">
            <h3 className="mil-up mil-mb-60">Simplicity, elegance, innovation!</h3>
          </div>
          <div className="col-lg-6">
            <p className="mil-up mil-mb-30">
              A home surveillance camera that pays great attention to security and user privacy, featuring two modes to provide security while protecting personal privacy.The camera has an open and closed mode, we define the product to have clear two sides, expressing two working states and emotions.
            </p>
            <p className="mil-up mil-mb-30">
              Presents a simple and quiet state when not in use, delivering a gentle and security.At the same time, the camera can adapt to a variety of environments, providing elegant ways of wall hanging and standing installation.
            </p>
          </div>
        </div>
        <div className="mil-works-nav mil-up">
          <Link href="/project-2" className="mil-link mil-dark mil-arrow-place mil-icon-left">
            <span>Prev project</span>
          </Link>
          <Link href="/portfolio-1" className="mil-link mil-dark">
            <span>All projects</span>
          </Link>
          <Link href="/project-4" className="mil-link mil-dark mil-arrow-place">
            <span>Next project</span>
          </Link>
        </div>
      </div>
    </section>
    {/* project end */}
    {/* call to action */}
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Looking to make your mark? We'll help you turn
              <br />
              your project into a success story.
            </span>
          </div>
        </div>
        <div className="mil-center">
          <h2 className="mil-up mil-mb-60">
            Ready to bring your
            <span className="mil-thin">ideas to</span>
            life?
            <br />
            We're
            <span className="mil-thin">here to help</span>
          </h2>
          <div className="mil-up">
            <Link href="/contact" className="mil-button mil-arrow-place">
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
