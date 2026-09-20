"use client";

/**
 * Port of the Ashley template's js/main.js to React, minus Swup.
 *
 * Structure mirrors main.js exactly:
 *   - the top-level $(function(){...}) body runs once  -> `useEffect(..., [])`
 *   - the swup:contentReplaced handler runs per page    -> `useEffect(..., [pathname])`
 *
 * Swup swapped `#swupMain`; here Next's app/template.tsx remounts that same
 * container on every navigation, so the per-page effect stands in for it.
 *
 * The template's own vendored plugins (jQuery, Swiper 8, fancyBox 3,
 * SmoothScroll) are loaded from /js/plugins as <Script> tags in the layout,
 * so slider and lightbox behaviour is identical to the original. Only the
 * DOM/event glue that jQuery used to provide is rewritten here; GSAP is the
 * same library, taken from npm so it can be imported.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

/* Swiper 8, fancyBox 3 and jQuery are the template's own vendored plugins,
   loaded as <Script> tags in app/layout.tsx — same files, same versions. */
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Swiper?: new (el: Element | string, opts: Record<string, unknown>) => { destroy: (a?: boolean, b?: boolean) => void };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jQuery?: any;
  }
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ---------------------------- colour variables ---------------------------- */

const accent = "rgba(37, 99, 235, 1)";
const dark = "#000";

/* --------------------------------- helpers -------------------------------- */

type Cleanup = () => void;

const $$ = <T extends Element = Element>(sel: string) =>
  Array.from(document.querySelectorAll<T>(sel));

function on<K extends keyof DocumentEventMap>(
  target: Document | Window | Element,
  type: K,
  handler: (e: DocumentEventMap[K]) => void,
  opts?: AddEventListenerOptions
): Cleanup {
  target.addEventListener(type, handler as EventListener, opts);
  return () => target.removeEventListener(type, handler as EventListener, opts);
}

/** Delegated mouseover/mouseleave pair, replacing jQuery's per-element binding. */
function hover(selector: string, enter: () => void, leave: () => void): Cleanup {
  const over = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest?.(selector);
    if (!el) return;
    const from = e.relatedTarget as Node | null;
    if (from && el.contains(from)) return;
    enter();
  };
  const out = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest?.(selector);
    if (!el) return;
    const to = e.relatedTarget as Node | null;
    if (to && el.contains(to)) return;
    leave();
  };
  document.addEventListener("mouseover", over);
  document.addEventListener("mouseout", out);
  return () => {
    document.removeEventListener("mouseover", over);
    document.removeEventListener("mouseout", out);
  };
}

/**
 * jQuery's $(el).data("value-1") reads the attribute directly.
 * `dataset` cannot: a dash before a digit is not camel-cased, so
 * `data-value-1` lands on dataset["value-1"], and dataset.value1 is undefined
 * — which silently turns every scale/parallax value into NaN.
 */
const dataVal = (el: Element, name: string) => el.getAttribute(`data-${name}`) ?? undefined;

const NOT_CURSOR_LINKS =
  "a:not(.mil-choose):not(.mil-more):not(.mil-drag):not(.mil-accent-cursor), input, textarea, .mil-accordion-menu";

/* --------------------------------- append --------------------------------- */
/** $(".mil-arrow").clone().appendTo(".mil-arrow-place") and friends. */
function append() {
  $$(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-lines-place .mil-lines, .mil-current-page a")
    .forEach((el) => el.remove());

  const arrow = document.querySelector(".mil-hidden-elements .mil-arrow");
  if (arrow) $$(".mil-arrow-place").forEach((p) => p.appendChild(arrow.cloneNode(true)));

  const dodecahedron = document.querySelector(".mil-hidden-elements .mil-dodecahedron");
  if (dodecahedron) $$(".mil-animation").forEach((p) => p.appendChild(dodecahedron.cloneNode(true)));

  const lines = document.querySelector(".mil-hidden-elements .mil-lines");
  if (lines) $$(".mil-lines-place").forEach((p) => p.appendChild(lines.cloneNode(true)));

  const active = document.querySelector(".mil-main-menu ul li.mil-active > a");
  const current = document.querySelector(".mil-current-page");
  if (active && current) current.appendChild(active.cloneNode(true));
}

/* -------------------------------- accordion ------------------------------- */

function accordions(): Cleanup {
  const groups = gsap.utils.toArray<HTMLElement>(".mil-accordion-group");
  const cleanups: Cleanup[] = [];

  const toggles = groups.map((element) => {
    const menu = element.querySelector(".mil-accordion-menu");
    const box = element.querySelector(".mil-accordion-content");
    const symbol = element.querySelector(".mil-symbol");
    const minusElement = element.querySelector(".mil-minus");
    const plusElement = element.querySelector(".mil-plus");

    gsap.set(box, { height: "auto" });

    const animation = gsap
      .timeline()
      .from(box, { height: 0, duration: 0.4, ease: "sine" })
      .from(minusElement, { duration: 0.4, autoAlpha: 0, ease: "none" }, 0)
      .to(plusElement, { duration: 0.4, autoAlpha: 0, ease: "none" }, 0)
      .to(symbol, { background: accent, ease: "none" }, 0)
      .reverse();

    return (clickedMenu: Element) => {
      if (clickedMenu === menu) animation.reversed(!animation.reversed());
      else animation.reverse();
    };
  });

  $$(".mil-accordion-menu").forEach((menu) => {
    const handler = () => toggles.forEach((fn) => fn(menu));
    menu.addEventListener("click", handler);
    cleanups.push(() => menu.removeEventListener("click", handler));
  });

  return () => cleanups.forEach((fn) => fn());
}

/* ---------------------------- scroll animations --------------------------- */

function scrollAnimations() {
  $$(".mil-up").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 40, scale: 0.98, ease: "sine" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        scrollTrigger: { trigger: section, toggleActions: "play none none reverse" },
      }
    );
  });

  $$<HTMLElement>(".mil-scale").forEach((section) => {
    gsap.fromTo(
      section,
      { ease: "sine", scale: Number(dataVal(section, "value-1")) },
      {
        scale: Number(dataVal(section, "value-2")),
        scrollTrigger: { trigger: section, scrub: true, toggleActions: "play none none reverse" },
      }
    );
  });

  if (window.innerWidth > 960) {
    $$<HTMLElement>(".mil-parallax").forEach((section) => {
      gsap.fromTo(
        section,
        { ease: "sine", y: dataVal(section, "value-1") },
        {
          y: dataVal(section, "value-2"),
          scrollTrigger: { trigger: section, scrub: true, toggleActions: "play none none reverse" },
        }
      );
    });
  }

  $$<HTMLElement>(".mil-rotate").forEach((section) => {
    gsap.fromTo(
      section,
      { ease: "sine", rotate: 0 },
      {
        rotate: Number(dataVal(section, "value")),
        scrollTrigger: { trigger: section, scrub: true, toggleActions: "play none none reverse" },
      }
    );
  });

  /* progressbar */
  gsap.to(".mil-progress", { height: "100%", ease: "sine", scrollTrigger: { scrub: 0.3 } });

  /* back to top */
  const btt = document.querySelector(".mil-back-to-top .mil-link");
  if (btt) {
    gsap.set(btt, { x: -30, opacity: 0 });
    gsap.to(btt, {
      x: 0,
      opacity: 1,
      ease: "sine",
      scrollTrigger: {
        trigger: "body",
        start: "top -40%",
        end: "top -40%",
        toggleActions: "play none reverse none",
      },
    });
  }
}

/* --------------------------------- sliders -------------------------------- */

function sliders(): Cleanup {
  const S = window.Swiper;
  if (!S) return () => {};

  const made: { destroy: (a?: boolean, b?: boolean) => void }[] = [];
  const make = (sel: string, opts: Record<string, unknown>) => {
    document.querySelectorAll(sel).forEach((el) => {
      made.push(new S(el, opts));
    });
  };

  const dots = [1, 2, 3, 4, 5, 6, 7].map((n) => `<div class="mil-custom-dot mil-slide-${n}"></div>`);

  /* reviews slider */
  make(".mil-reviews-slider", {
    pagination: {
      el: ".mil-revi-pagination",
      clickable: true,
      renderBullet: (index: number, className: string) =>
        `<span class="${className}">${dots[index] ?? ""}</span>`,
    },
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: { nextEl: ".mil-revi-next", prevEl: ".mil-revi-prev" },
  });

  /* infinite slider */
  make(".mil-infinite-show", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: { delay: 0 },
    loop: true,
    freeMode: true,
    breakpoints: { 992: { slidesPerView: 4 } },
  });

  /* portfolio slider */
  make(".mil-portfolio-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: { enable: true },
    navigation: { nextEl: ".mil-portfolio-next", prevEl: ".mil-portfolio-prev" },
    pagination: { el: ".swiper-portfolio-pagination", type: "fraction" },
  });

  /* 1 item slider */
  make(".mil-1-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: { nextEl: ".mil-portfolio-next", prevEl: ".mil-portfolio-prev" },
    pagination: { el: ".swiper-portfolio-pagination", type: "fraction" },
  });

  /* 2 item slider */
  make(".mil-2-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: { nextEl: ".mil-portfolio-next", prevEl: ".mil-portfolio-prev" },
    pagination: { el: ".swiper-portfolio-pagination", type: "fraction" },
    breakpoints: { 992: { slidesPerView: 2 } },
  });

  return () => made.forEach((s) => s.destroy(true, false));
}

/* -------------------------------- component ------------------------------- */

export default function TemplateRuntime() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  /* ============ the top-level main.js body — runs once ============ */
  useEffect(() => {
    const cleanups: Cleanup[] = [];

    /* ---------------------------- preloader ---------------------------- */
    const timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", { opacity: 1 });

    timeline.fromTo(
      ".mil-animation-1 .mil-h3",
      { y: "30px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: 0.4 }
    );

    timeline.to(".mil-animation-1 .mil-h3", { opacity: 0, y: "-30" }, "+=.3");

    timeline.fromTo(".mil-reveal-box", 0.1, { opacity: 0 }, { opacity: 1, x: "-30" });

    timeline.to(".mil-reveal-box", 0.45, { width: "100%", x: 0 }, "+=.1");
    timeline.to(".mil-reveal-box", { right: "0" });
    timeline.to(".mil-reveal-box", 0.3, { width: "0%" });
    timeline.fromTo(".mil-animation-2 .mil-h3", { opacity: 0 }, { opacity: 1 }, "-=.5");
    timeline.to(".mil-animation-2 .mil-h3", 0.6, { opacity: 0, y: "-30" }, "+=.5");
    timeline.to(".mil-preloader", 0.8, { opacity: 0, ease: "sine" }, "+=.2");
    timeline.fromTo(
      ".mil-up",
      0.8,
      { opacity: 0, y: 40, scale: 0.98, ease: "sine" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: () => document.querySelector(".mil-preloader")?.classList.add("mil-hidden"),
      },
      "-=1"
    );
    cleanups.push(() => timeline.kill());

    /* --------------------------- anchor scroll -------------------------- */
    cleanups.push(
      on(document, "click", (e) => {
        const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
        if (!anchor) return;
        e.preventDefault();
        const href = anchor.getAttribute("href") || "";
        if (href === "#." || href === "#") return; // menu group toggles
        const target = document.querySelector(href);
        if (!target) return;
        const offset = window.innerWidth < 1200 ? 90 : 0;
        gsap.to(window, { duration: 0.4, scrollTo: { y: target, offsetY: offset } });
      })
    );

    /* ------------------------------ cursor ------------------------------ */
    const cursor = document.querySelector(".mil-ball");
    if (cursor) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });

      cleanups.push(
        on(document, "pointermove", (e) => {
          gsap.to(cursor, { duration: 0.6, ease: "sine", x: e.clientX, y: e.clientY });
        })
      );

      cleanups.push(
        hover(
          ".mil-drag, .mil-more, .mil-choose",
          () => gsap.to(cursor, { duration: 0.2, width: 90, height: 90, opacity: 1, ease: "sine" }),
          () => gsap.to(cursor, { duration: 0.2, width: 20, height: 20, opacity: 0.1, ease: "sine" })
        ),
        hover(
          ".mil-accent-cursor",
          () => {
            gsap.to(cursor, { duration: 0.2, background: accent, ease: "sine" });
            cursor.classList.add("mil-accent");
          },
          () => {
            gsap.to(cursor, { duration: 0.2, background: dark, ease: "sine" });
            cursor.classList.remove("mil-accent");
          }
        ),
        hover(
          ".mil-drag",
          () => gsap.to(".mil-ball .mil-icon-1", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-icon-1", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        hover(
          ".mil-more",
          () => gsap.to(".mil-ball .mil-more-text", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-more-text", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        hover(
          ".mil-choose",
          () => gsap.to(".mil-ball .mil-choose-text", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-choose-text", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        hover(
          NOT_CURSOR_LINKS,
          () => {
            gsap.to(cursor, { duration: 0.2, scale: 0, ease: "sine" });
            gsap.to(".mil-ball svg", { duration: 0.2, scale: 0 });
          },
          () => {
            gsap.to(cursor, { duration: 0.2, scale: 1, ease: "sine" });
            gsap.to(".mil-ball svg", { duration: 0.2, scale: 1 });
          }
        )
      );

      cleanups.push(
        on(document.body, "mousedown", () => gsap.to(cursor, { duration: 0.2, scale: 0.1, ease: "sine" })),
        on(document.body, "mouseup", () => gsap.to(cursor, { duration: 0.2, scale: 1, ease: "sine" }))
      );
    }

    /* ------------------------------- menu ------------------------------- */
    cleanups.push(
      on(document, "click", (e) => {
        const target = e.target as Element | null;

        if (target?.closest?.(".mil-menu-btn")) {
          $$(".mil-menu-btn").forEach((b) => b.classList.toggle("mil-active"));
          document.querySelector(".mil-menu")?.classList.toggle("mil-active");
          document.querySelector(".mil-menu-frame")?.classList.toggle("mil-active");
          return;
        }

        /* main menu: $('.mil-has-children a').on('click', ...) */
        const link = target?.closest?.(".mil-has-children a");
        if (link) {
          const wasActive = link.classList.contains("mil-active");
          $$(".mil-has-children ul").forEach((u) => u.classList.remove("mil-active"));
          $$(".mil-has-children a").forEach((a) => a.classList.remove("mil-active"));
          if (!wasActive) {
            link.classList.add("mil-active");
            link.nextElementSibling?.classList.add("mil-active");
          }
        }
      })
    );

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ====== the swup:contentReplaced handler — runs on every page ====== */
  useEffect(() => {
    const isFirst = firstRun.current;
    firstRun.current = false;

    if (!isFirst) {
      window.scrollTo(0, 0);

      gsap.to(".mil-progress", {
        height: 0,
        ease: "sine",
        onComplete: () => ScrollTrigger.refresh(),
      });

      /* menu */
      $$(".mil-menu-btn").forEach((b) => b.classList.remove("mil-active"));
      document.querySelector(".mil-menu")?.classList.remove("mil-active");
      document.querySelector(".mil-menu-frame")?.classList.remove("mil-active");
    }

    /* append */
    append();

    /* accordion */
    const killAccordions = accordions();

    /* scroll animations + progressbar + back to top */
    scrollAnimations();

    /* fancybox */
    const $ = window.jQuery;
    if ($) {
      $('[data-fancybox="gallery"]').fancybox({
        buttons: ["slideShow", "zoom", "fullScreen", "close"],
        loop: false,
        protect: true,
      });
      $.fancybox.defaults.hash = false;
    }

    /* sliders */
    const killSliders = sliders();

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(".mil-up, .mil-scale, .mil-parallax, .mil-rotate, .mil-progress");
      killAccordions();
      killSliders();
      window.jQuery?.fancybox?.close?.();
    };
  }, [pathname]);

  return null;
}
