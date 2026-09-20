"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () =>
    setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return;

    const swipeDistance = event.changedTouches[0].clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(swipeDistance) < 48) return;
    if (swipeDistance > 0) showPrevious();
    else showNext();
  };

  return (
    <section className="mil-soft-bg mil-client-voices" aria-labelledby="testimonials-heading">
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

        <div className="mil-revi-pagination mil-up mil-mb-60" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className={`swiper-pagination-bullet${index === activeIndex ? " swiper-pagination-bullet-active" : ""}`}
              key={`${testimonial.initials}-${index}`}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show testimonial ${index + 1}`}
            >
              <span
                className="mil-custom-dot"
                style={testimonial.image ? { backgroundImage: `url(${testimonial.image})` } : undefined}
              >
                {testimonial.image ? null : testimonial.initials}
              </span>
            </button>
          ))}
        </div>

        <div
          className="row mil-relative justify-content-center mil-testimonial-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}
          tabIndex={0}
          aria-label="Swipe left or right to change testimonials"
        >
          <div className="col-lg-8">
            <div className="mil-slider-nav mil-soft mil-reviews-nav mil-up">
              <button type="button" className="mil-slider-arrow mil-prev" onClick={showPrevious} aria-label="Previous testimonial">→</button>
              <button type="button" className="mil-slider-arrow" onClick={showNext} aria-label="Next testimonial">→</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon mil-up" aria-hidden="true">
              <path d="M13.5 10a8.5 8.5 0 0 0 4.8 15.52c-.87 3.7-2.42 6.28-3.94 8.07-2.29 2.69-4.41 3.52-4.41 3.52a1.5 1.5 0 1 0 1.11 2.79s2.87-1.85 5.59-4.36C19.35 32.35 22 27.07 22 19a8.5 8.5 0 0 0-8.5-9Zm21 0a8.5 8.5 0 0 0 4.8 15.52c-.87 3.7-2.42 6.28-3.94 8.07-2.29 2.69-4.41 3.52-4.41 3.52a1.5 1.5 0 1 0 1.11 2.79s2.87-1.85 5.59-4.36C40.35 32.35 43 27.07 43 19a8.5 8.5 0 0 0-8.5-9Z" />
            </svg>
            <div className="mil-review-frame mil-center mil-testimonial-slide" role="tabpanel" key={activeIndex}>
              <h5 className="mil-up mil-mb-10">{activeTestimonial.name}</h5>
              <p className="mil-mb-5 mil-upper mil-up mil-mb-30">{activeTestimonial.role}</p>
              <p className="mil-text-xl mil-up">{activeTestimonial.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
