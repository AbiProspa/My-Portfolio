"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () =>
    setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);

  return (
    <section className="mil-soft-bg mil-testimonials" aria-labelledby="testimonials-heading">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Feedback from teams and clients I have worked with.
            </span>
          </div>
        </div>

        <h2 id="testimonials-heading" className="mil-center mil-up mil-mb-60">
          Client <span className="mil-thin">Voices:</span>
          <br />
          Hear What <span className="mil-thin">They Say.</span>
        </h2>

        <div className="mil-testimonial-avatars mil-up" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className={`mil-testimonial-avatar${index === activeIndex ? " mil-active" : ""}`}
              key={`${testimonial.initials}-${index}`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show testimonial ${index + 1}`}
            >
              {testimonial.image ? <img src={testimonial.image} alt="" /> : testimonial.initials}
            </button>
          ))}
        </div>

        <div className="mil-testimonial-stage mil-up">
          <div className="mil-testimonial-content mil-center" role="tabpanel">
            <div className="mil-testimonial-quote" aria-hidden="true">“</div>
            <h5 className="mil-mb-10">{activeTestimonial.name}</h5>
            <p className="mil-upper mil-mb-30">{activeTestimonial.role}</p>
            <p className="mil-text-xl">{activeTestimonial.quote}</p>
          </div>

          <div className="mil-testimonial-controls">
            <button type="button" onClick={showPrevious} aria-label="Previous testimonial">←</button>
            <button type="button" onClick={showNext} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
