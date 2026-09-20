/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ashley" };


export default function Page() {
  return (
    <>
    {/* banner */}
    <section className="mil-banner mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
          <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
        </div>
        <div className="mil-gradient"></div>
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Designing
              <span className="mil-thin">a Better</span>
              <br />
              World
              <span className="mil-thin">Today</span>
            </h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">
                  Welcome to our world of endless imagination and boundless creativity. Together, let's embark on a remarkable journey where dreams become tangible realities.
                </p>
              </div>
            </div>
            <Link href="/services" className="mil-button mil-arrow-place mil-btn-space">
              <span>What we do</span>
            </Link>
            <Link href="/portfolio-1" className="mil-link mil-muted mil-arrow-place">
              <span>View works</span>
            </Link>
            <div className="mil-circle-text">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    {/* circle text */}
                    <textPath xlinkHref="#circlePath">Scroll down - Scroll down -</textPath>
                  </text>
                </g>
              </svg>
              <a href="#about" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* banner end */}
    {/* about */}
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Discover
                <br />
                Our
                <span className="mil-thin">Studio</span>
              </h2>
              <p className="mil-up mil-mb-30">
                At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
              </p>
              <p className="mil-up mil-mb-60">
                Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.
              </p>
              <div className="mil-about-quote">
                <div className="mil-avatar mil-up">
                  <img src="/img/faces/customers/2.jpg" alt="Founder" />
                </div>
                <h6 className="mil-quote mil-up">
                  Passionately Creating
                  <span className="mil-thin">Design Wonders:</span>
                  Unleashing
                  <span className="mil-thin">Boundless Creativity</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place"></div>
              <div className="mil-up mil-img-frame" style={{ paddingBottom: "160%" }}>
                <img src="/img/photo/1.jpg" alt="img" className="mil-scale" data-value-1="1" data-value-2="1.2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about end */}
    {/* services */}
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: "300px", right: "-100px" }}></div>
          <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: "150px" }}></div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  Professionals focused on helping your brand
                  <br />
                  grow and move forward.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img src="/img/photo/2.jpg" alt="team" />
              </span>
              <h2 className="mil-h1 mil-muted mil-center">
                Unique
                <span className="mil-thin">Ideas</span>
              </h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">
                For Your
                <span className="mil-thin">Business.</span>
              </h2>
              <Link href="/services" className="mil-services-button mil-button mil-arrow-place">
                <span>What we do</span>
              </Link>
            </div>
          </div>
          <div className="row mil-services-grid m-0">
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <Link href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Branding and
                  <br />
                  Identity Design
                </h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <Link href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Website Design
                  <br />
                  and Development
                </h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <Link href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Advertising and
                  <br />
                  Marketing Campaigns
                </h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0">
              <Link href="/service" className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30">
                  Creative Consulting
                  <br />
                  and Development
                </h5>
                <p className="mil-light-soft mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
                <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* services end */}
    {/* team */}
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Meet
                <br />
                Our Team
              </h2>
              <p className="mil-up mil-mb-30">
                We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
              </p>
              <p className="mil-up mil-mb-60">Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
              <div className="mil-up">
                <Link href="/team" className="mil-button mil-arrow-place mil-mb-60">
                  <span>Read more</span>
                </Link>
              </div>
              <h4 className="mil-up">
                <span className="mil-thin">We</span>
                delivering
                <br />
                <span className="mil-thin">exceptional</span>
                results.
              </h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="mil-lines-place"></div>
              <div className="row mil-mb-60">
                <div className="col-sm-6">
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/1.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <Link href="/home-2">Anna Oldman</Link>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Art Director</p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/3.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <Link href="/home-2">Oscar Freeman</Link>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Frontend Dev</p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{ height: "30px" }}>
                    <span className="mil-accent">*</span>
                    The founders of our agency
                  </p>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/2.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <Link href="/home-2">Emma Newman</Link>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">Founder</p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mil-team-card mil-up mil-mb-30">
                    <img src="/img/faces/4.jpg" alt="Team member" />
                    <div className="mil-description">
                      <div className="mil-secrc-text">
                        <h5 className="mil-muted mil-mb-5">
                          <Link href="/home-2">Lisa Trueman</Link>
                        </h5>
                        <p className="mil-link mil-light-soft mil-mb-10">UI/UX Designer</p>
                        <ul className="mil-social-icons mil-center">
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-behance"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#." target="_blank" className="social-icon">
                              <i className="fab fa-github"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* team end */}
    {/* reviews */}
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Customer reviews are a valuable source
              <br />
              of information for both businesses and consumers.
            </span>
          </div>
        </div>
        <h2 className="mil-center mil-up mil-mb-60">
          Customer
          <span className="mil-thin">Voices:</span>
          <br />
          Hear What
          <span className="mil-thin">They Say!</span>
        </h2>
        <div className="mil-revi-pagination mil-up mil-mb-60"></div>
        <div className="row mil-relative justify-content-center">
          <div className="col-lg-8">
            <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
              <div className="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place"></div>
              <div className="mil-slider-arrow mil-revi-next mil-arrow-place"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon mil-up">
              <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#000000" />
            </svg>
            <div className="swiper-container mil-reviews-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Emma Trueman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="mil-review-frame mil-center" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                    <h5 className="mil-up mil-mb-10">Sarah Newman</h5>
                    <p className="mil-mb-5 mil-upper mil-up mil-mb-30">Envato market</p>
                    <p className="mil-text-xl mil-up">
                      This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* reviews end */}
    {/* partners */}
    <div className="mil-soft-bg">
      <div className="container mil-p-0-120">
        <div className="swiper-container mil-infinite-show mil-up">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#." className="mil-partner-frame" style={{ width: "60px" }}>
                <img src="/img/partners/1.svg" alt="logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#." className="mil-partner-frame" style={{ width: "100px" }}>
                <img src="/img/partners/2.svg" alt="logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#." className="mil-partner-frame" style={{ width: "60px" }}>
                <img src="/img/partners/1.svg" alt="logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#." className="mil-partner-frame" style={{ width: "100px" }}>
                <img src="/img/partners/2.svg" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* partners end */}
    {/* blog */}
    <section>
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Popular Publications:</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <Link href="/blog" className="mil-link mil-dark mil-arrow-place">
                <span>View all</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Link href="/publication" className="mil-blog-card mil-mb-60">
              <div className="mil-cover-frame mil-up">
                <img src="/img/blog/1.jpg" alt="cover" />
              </div>
              <div className="mil-post-descr">
                <div className="mil-labels mil-up mil-mb-30">
                  <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                  <div className="mil-label mil-upper">may 24 2023</div>
                </div>
                <h4 className="mil-up mil-mb-30">How to Become a Graphic Designer in 10 Simple Steps</h4>
                <p className="mil-post-text mil-up mil-mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                </p>
                <div className="mil-link mil-dark mil-arrow-place mil-up">
                  <span>Read more</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link href="/publication" className="mil-blog-card mil-mb-60">
              <div className="mil-cover-frame mil-up">
                <img src="/img/blog/2.jpg" alt="cover" />
              </div>
              <div className="mil-post-descr">
                <div className="mil-labels mil-up mil-mb-30">
                  <div className="mil-label mil-upper mil-accent">TECHNOLOGY</div>
                  <div className="mil-label mil-upper">may 24 2023</div>
                </div>
                <h4 className="mil-up mil-mb-30">16 Best Graphic Design Online and Offline Courses</h4>
                <p className="mil-post-text mil-up mil-mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi aliquid, asperiores impedit tempora sequi est reprehenderit cumque explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam repudiandae id ut at iure! Totam, a!
                </p>
                <div className="mil-link mil-dark mil-arrow-place mil-up">
                  <span>Read more</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
