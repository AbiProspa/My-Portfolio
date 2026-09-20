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
            Website
            <span className="mil-thin">Design</span>
            <br />
            and
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
              Your
              <span className="mil-thin">Approach</span>
              <br />
              and
              <span className="mil-thin">Work Specifics</span>
            </h4>
            <p className="mil-up mil-mb-30">
              At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.
            </p>
            <div className="mil-up">
              <Link href="/portfolio-3" className="mil-link mil-dark mil-arrow-place">
                <span>View works</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-accordion-group mil-up">
              <div className="mil-accordion-menu">
                <p className="mil-accordion-head">UX Audits</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              <div className="mil-accordion-content">
                <p className="mil-mb-30">
                  A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the website's design, functionality, and content to identify areas of improvement that can enhance the user's overall experience.
                </p>
                <p className="mil-mb-30">
                  During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the website's usability, accessibility, and overall user experience.
                </p>
                <p className="mil-mb-30">
                  The audit may cover various aspects of the website, such as navigation, layout, visual design, content structure, and mobile responsiveness. The goal is to identify any pain points or obstacles that users may encounter while browsing the website and provide actionable recommendations to improve their experience.
                </p>
                <p className="mil-mb-30">
                  In summary, a UX audit can help website owners identify areas of improvement that can enhance their website's user experience and increase user engagement and satisfaction.
                </p>
              </div>
            </div>
            <div className="mil-accordion-group mil-up">
              <div className="mil-accordion-menu">
                <p className="mil-accordion-head">Design thinking</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              <div className="mil-accordion-content">
                <p className="mil-mb-30">
                  Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, identifying and defining the problem, generating multiple possible solutions, prototyping and testing those solutions, and iterating based on feedback.
                </p>
                <p className="mil-mb-30">
                  Design thinking encourages a human-centered approach to innovation and is often used in fields such as product design, user experience (UX) design, and business strategy to create user-centric and innovative solutions. It promotes a mindset that embraces experimentation, iteration, and continuous learning throughout the design process.
                </p>
              </div>
            </div>
            <div className="mil-accordion-group mil-up">
              <div className="mil-accordion-menu">
                <p className="mil-accordion-head">wireframing</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              <div className="mil-accordion-content">
                <p className="mil-mb-30">
                  Wireframing is a vital step in web design where a visual representation of a website's structure is created. It focuses on layout and user experience, using basic shapes and lines to outline elements like headers, menus, and content sections. Wireframes establish the website's architecture and functionality, facilitating communication between designers, developers, and clients. They serve as a blueprint for user-friendly websites, setting the foundation for design and development.
                </p>
              </div>
            </div>
            <div className="mil-accordion-group mil-up">
              <div className="mil-accordion-menu">
                <p className="mil-accordion-head">Aesthetics</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              <div className="mil-accordion-content">
                <p className="mil-mb-30">
                  Aesthetics in web design focus on the visual appeal of a website, incorporating elements like colors, typography, images, and layout. It aims to create an engaging and visually pleasing user experience that reflects the brand identity and purpose of the website. A well-designed aesthetic balances visual appeal with functionality, leaving a lasting impression on users.
                </p>
              </div>
            </div>
            <div className="mil-accordion-group mil-up">
              <div className="mil-accordion-menu">
                <p className="mil-accordion-head">Methodologies</p>
                <div className="mil-symbol mil-h3">
                  <div className="mil-plus">+</div>
                  <div className="mil-minus">-</div>
                </div>
              </div>
              <div className="mil-accordion-content">
                <p className="mil-mb-30">
                  Libero quam alias tempora facilis necessitatibus quis officiis voluptatem architecto harum exercitationem quidem illum eligendi. Veniam non vitae, nemo dolor tempora, necessitatibus enim sapiente quam voluptas architecto minima omnis sequi aperiam aliquam vel quo reprehenderit, tempore tenetur. Architecto dolorem assumenda voluptas, odio nemo vero illo praesentium pariatur, ut perspiciatis, est itaque minus ratione vitae laboriosam molestiae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* service end */}
    {/* prices */}
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-120">
          <div className="mil-center">
            <h2 className="mil-muted mil-up mil-mb-30">
              Reasonable
              <span className="mil-thin">prices</span>
              <br />
              for innovative
              <span className="mil-thin">solutions</span>
            </h2>
            <p className="mil-light-soft mil-up mil-mb-120">
              At our agency, we have a unique approach to web design and development.
              <br />
              We believe in creating in terms of user experience, functionality.
            </p>
          </div>
          <Link href="/contact" className="mil-price-card mil-choose mil-accent-cursor mil-up">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="mil-price-number mil-mb-30">
                  <span className="mil-muted mil-thin">$</span>
                  <span className="mil-accent">19</span>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mil-muted mil-mb-30">
                  Tailored Designs for
                  <br />
                  Every Budget
                </h5>
              </div>
              <div className="col-lg-4">
                <p className="mil-light-soft mil-mb-30">
                  Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.
                </p>
              </div>
              <div className="col-lg-2">
                <div className="mil-adaptive-right mil-mb-30">
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/contact" className="mil-price-card mil-choose mil-accent-cursor mil-up">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="mil-price-number mil-mb-30">
                  <span className="mil-muted mil-thin">$</span>
                  <span className="mil-accent">29</span>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mil-muted mil-mb-30">
                  Inspiring and Customized
                  <br />
                  Design Solutions
                </h5>
              </div>
              <div className="col-lg-4">
                <p className="mil-light-soft mil-mb-30">
                  Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.
                </p>
              </div>
              <div className="col-lg-2">
                <div className="mil-adaptive-right mil-mb-30">
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/contact" className="mil-price-card mil-choose mil-accent-cursor mil-up">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="mil-price-number mil-mb-30">
                  <span className="mil-muted mil-thin">$</span>
                  <span className="mil-accent">49</span>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mil-muted mil-mb-30">
                  Unleashing the Beauty of Space
                  <br />
                  with Unique Designs
                </h5>
              </div>
              <div className="col-lg-4">
                <p className="mil-light-soft mil-mb-30">
                  Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.
                </p>
              </div>
              <div className="col-lg-2">
                <div className="mil-adaptive-right mil-mb-30">
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/contact" className="mil-price-card mil-choose mil-accent-cursor mil-up mil-mb-60">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="mil-price-number mil-mb-30">
                  <span className="mil-muted mil-thin">$</span>
                  <span className="mil-accent">199</span>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mil-muted mil-mb-30">
                  Exquisite Design Concepts
                  <br />
                  for Discerning Clients
                </h5>
              </div>
              <div className="col-lg-4">
                <p className="mil-light-soft mil-mb-30">
                  Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.
                </p>
              </div>
              <div className="col-lg-2">
                <div className="mil-adaptive-right mil-mb-30">
                  <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                </div>
              </div>
            </div>
          </Link>
          <div className="mil-center">
            <Link href="/contact" className="mil-button  mil-arrow-place">
              <span>individual solution</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* prices end */}
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
          <div className="col-lg-4">
            <Link href="/service" className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
              <h4 className="mil-up mil-mb-30">
                Branding and
                <br />
                Identity Design
              </h4>
              <p className="mil-descr mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul className="mil-service-list mil-dark mil-mb-30">
                <li className="mil-up">UX Audits</li>
                <li className="mil-up">Design thinking</li>
                <li className="mil-up">Methodologies</li>
                <li className="mil-up">Wireframing</li>
              </ul>
              <div className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Read more</span>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link href="/service" className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
              <h4 className="mil-up mil-mb-30">
                Advertising
                <br />
                and Marketing
              </h4>
              <p className="mil-descr mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul className="mil-service-list mil-dark mil-mb-30">
                <li className="mil-up">UX Audits</li>
                <li className="mil-up">Design thinking</li>
                <li className="mil-up">Methodologies</li>
                <li className="mil-up">Wireframing</li>
              </ul>
              <div className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Read more</span>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link href="/service" className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
              <h4 className="mil-up mil-mb-30">
                Creative
                <br />
                Consulting
              </h4>
              <p className="mil-descr mil-up mil-mb-30">Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul className="mil-service-list mil-dark mil-mb-30">
                <li className="mil-up">UX Audits</li>
                <li className="mil-up">Design thinking</li>
                <li className="mil-up">Methodologies</li>
                <li className="mil-up">Wireframing</li>
              </ul>
              <div className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Read more</span>
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
