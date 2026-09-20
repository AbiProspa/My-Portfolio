"use client";

/**
 * Ports the Ashley template's main.js to React/Next.js.
 *
 * - One-time setup: custom cursor, menu toggling, and anchor scrolling.
 * - Per-route setup (re-runs on every navigation): element cloning
 *   (arrows / dodecahedron / lines / current page label), GSAP ScrollTrigger
 *   animations (.mil-up / .mil-scale / .mil-parallax / .mil-rotate), progress
 *   bar, back-to-top, Fancybox galleries and accordions.
 * - Swup is replaced by Next.js routing: app/template.tsx remounts the page
 *   content per navigation and we emulate the html.is-animating curtain
 *   transition classes here.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Fancybox } from "@fancyapps/ui";

const ACCENT = "rgba(37, 99, 235, 1)";
const DARK = "#000";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ---------------------------------- helpers --------------------------------- */

function closestMatch(e: Event, selector: string): Element | null {
  const t = e.target as Element | null;
  if (!t || !(t instanceof Element)) return null;
  return t.closest(selector);
}

/** mouseover/mouseout pair that only fires when actually entering/leaving `selector`. */
function onHover(selector: string, enter: (el: Element) => void, leave: (el: Element) => void) {
  const over = (e: MouseEvent) => {
    const el = closestMatch(e, selector);
    if (!el) return;
    const from = e.relatedTarget as Element | null;
    if (from && el.contains(from)) return; // moving within the element
    enter(el);
  };
  const out = (e: MouseEvent) => {
    const el = closestMatch(e, selector);
    if (!el) return;
    const to = e.relatedTarget as Element | null;
    if (to && el.contains(to)) return;
    leave(el);
  };
  document.addEventListener("mouseover", over);
  document.addEventListener("mouseout", out);
  return () => {
    document.removeEventListener("mouseover", over);
    document.removeEventListener("mouseout", out);
  };
}

function closeMenu() {
  document.querySelectorAll(".mil-menu-btn").forEach((b) => {
    b.classList.remove("mil-active");
    b.setAttribute("aria-expanded", "false");
  });
  document.querySelector(".mil-menu-frame")?.classList.remove("mil-active");
}

/* --------------------------------- component -------------------------------- */

export default function AshleyRuntime() {
  const pathname = usePathname();
  const firstLoad = useRef(true);
  const accordionCleanups = useRef<(() => void)[]>([]);

  /* ------------------------- one-time global behaviors ------------------------ */
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    /* cursor ball */
    const cursor = document.querySelector(".mil-ball") as HTMLElement | null;
    if (cursor) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });

      const move = (e: PointerEvent) => {
        gsap.to(cursor, { duration: 0.6, ease: "sine", x: e.clientX, y: e.clientY });
      };
      document.addEventListener("pointermove", move);
      cleanups.push(() => document.removeEventListener("pointermove", move));

      cleanups.push(
        onHover(
          ".mil-drag, .mil-more, .mil-choose",
          () => gsap.to(cursor, { duration: 0.2, width: 90, height: 90, opacity: 1, ease: "sine" }),
          () => gsap.to(cursor, { duration: 0.2, width: 20, height: 20, opacity: 0.1, ease: "sine" })
        ),
        onHover(
          ".mil-accent-cursor",
          () => {
            gsap.to(cursor, { duration: 0.2, background: ACCENT, ease: "sine" });
            cursor.classList.add("mil-accent");
          },
          () => {
            gsap.to(cursor, { duration: 0.2, background: DARK, ease: "sine" });
            cursor.classList.remove("mil-accent");
          }
        ),
        onHover(
          ".mil-drag",
          () => gsap.to(".mil-ball .mil-icon-1", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-icon-1", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        onHover(
          ".mil-more",
          () => gsap.to(".mil-ball .mil-more-text", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-more-text", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        onHover(
          ".mil-choose",
          () => gsap.to(".mil-ball .mil-choose-text", { duration: 0.2, scale: 1, ease: "sine" }),
          () => gsap.to(".mil-ball .mil-choose-text", { duration: 0.2, scale: 0, ease: "sine" })
        ),
        onHover(
          "a:not(.mil-choose):not(.mil-more):not(.mil-drag):not(.mil-accent-cursor), input, textarea, .mil-accordion-menu",
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

      const down = () => gsap.to(cursor, { duration: 0.2, scale: 0.1, ease: "sine" });
      const up = () => gsap.to(cursor, { duration: 0.2, scale: 1, ease: "sine" });
      document.body.addEventListener("mousedown", down);
      document.body.addEventListener("mouseup", up);
      cleanups.push(() => {
        document.body.removeEventListener("mousedown", down);
        document.body.removeEventListener("mouseup", up);
      });
    }

    /* menu button + submenu + anchor scroll (delegated so they survive re-renders) */
    const click = (e: MouseEvent) => {
      const btn = closestMatch(e, ".mil-menu-btn");
      if (btn) {
        const menu = document.querySelector(".mil-menu-frame");
        const expanded = !menu?.classList.contains("mil-active");
        document.querySelectorAll(".mil-menu-btn").forEach((b) => {
          b.classList.toggle("mil-active", expanded);
          b.setAttribute("aria-expanded", String(expanded));
        });
        menu?.classList.toggle("mil-active", expanded);
        return;
      }

      const subParent = closestMatch(e, ".mil-has-children > a");
      if (subParent) {
        e.preventDefault();
        const wasActive = subParent.classList.contains("mil-active");
        document.querySelectorAll(".mil-has-children ul").forEach((u) => u.classList.remove("mil-active"));
        document.querySelectorAll(".mil-has-children a").forEach((a) => a.classList.remove("mil-active"));
        if (!wasActive) {
          subParent.classList.add("mil-active");
          subParent.nextElementSibling?.classList.add("mil-active");
        }
        return;
      }

      /* smooth anchor scrolling */
      const anchor = closestMatch(e, 'a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href") || "");
        if (target) {
          const offset = window.innerWidth < 1200 ? 90 : 0;
          gsap.to(window, {
            duration: 0.4,
            scrollTo: { y: target, offsetY: offset },
            ease: "power1.out",
          });
        }
        return;
      }

      /* close the fullscreen menu when a navigation link inside it is clicked */
      const menuLink = closestMatch(e, '.mil-menu-frame a[href^="/"]');
      if (menuLink) closeMenu();
    };
    document.addEventListener("click", click);
    cleanups.push(() => document.removeEventListener("click", click));
    const escapeMenu = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", escapeMenu);
    cleanups.push(() => document.removeEventListener("keydown", escapeMenu));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ------------------------------ per-route setup ------------------------------ */
  useEffect(() => {
    const isFirst = firstLoad.current;
    firstLoad.current = false;

    closeMenu();

    if (!isFirst) {
      /* emulate the swup curtain transition */
      window.scrollTo(0, 0);
      const html = document.documentElement;
      html.classList.add("is-changing", "is-animating", "is-leaving");
      // force reflow so the curtain shows instantly, then release to animate out
      void html.offsetHeight;
      requestAnimationFrame(() => {
        setTimeout(() => {
          html.classList.remove("is-changing", "is-animating", "is-leaving");
        }, 60);
      });
      gsap.to(".mil-progress", {
        height: 0,
        ease: "sine",
        onComplete: () => ScrollTrigger.refresh(),
      });
    }

    /* --- clone decorative elements into their placeholders (like main.js) --- */
    document
      .querySelectorAll(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-lines-place .mil-lines, .mil-current-page a")
      .forEach((el) => el.remove());

    const arrow = document.querySelector(".mil-hidden-elements .mil-arrow");
    if (arrow) {
      document.querySelectorAll(".mil-arrow-place").forEach((el) => el.appendChild(arrow.cloneNode(true)));
    }
    const dodecahedron = document.querySelector(".mil-hidden-elements .mil-dodecahedron");
    if (dodecahedron) {
      document.querySelectorAll(".mil-animation").forEach((el) => el.appendChild(dodecahedron.cloneNode(true)));
    }
    const lines = document.querySelector(".mil-hidden-elements .mil-lines");
    if (lines) {
      document.querySelectorAll(".mil-lines-place").forEach((el) => el.appendChild(lines.cloneNode(true)));
    }
    const activeLink = document.querySelector(".mil-main-menu ul li.mil-active > a");
    const currentPage = document.querySelector(".mil-current-page");
    if (activeLink && currentPage) currentPage.appendChild(activeLink.cloneNode(true));

    /* ----------------------------- scroll animations ---------------------------- */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(".mil-up, .mil-scale, .mil-parallax, .mil-rotate", { clearProps: "all" });
    } else {
    document.querySelectorAll(".mil-up").forEach((section) => {
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

    document.querySelectorAll(".mil-scale").forEach((section) => {
      const el = section as HTMLElement;
      gsap.fromTo(
        el,
        { ease: "sine", scale: parseFloat(el.dataset.value1 || "1") },
        {
          scale: parseFloat(el.dataset.value2 || "1"),
          scrollTrigger: { trigger: el, scrub: true, toggleActions: "play none none reverse" },
        }
      );
    });

    if (window.innerWidth > 960) {
      document.querySelectorAll(".mil-parallax").forEach((section) => {
        const el = section as HTMLElement;
        gsap.fromTo(
          el,
          { ease: "sine", y: el.dataset.value1 },
          {
            y: el.dataset.value2,
            scrollTrigger: { trigger: el, scrub: true, toggleActions: "play none none reverse" },
          }
        );
      });
    }

    document.querySelectorAll(".mil-rotate").forEach((section) => {
      const el = section as HTMLElement;
      gsap.fromTo(
        el,
        { ease: "sine", rotate: 0 },
        {
          rotate: parseFloat(el.dataset.value || "0"),
          scrollTrigger: { trigger: el, scrub: true, toggleActions: "play none none reverse" },
        }
      );
    });

    /* progress bar */
    gsap.to(".mil-progress", {
      height: "100%",
      ease: "sine",
      scrollTrigger: { scrub: 0.3 },
    });

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

    /* -------------------------------- accordions -------------------------------- */
    const groups = gsap.utils.toArray<HTMLElement>(".mil-accordion-group");
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
        .to(symbol, { background: ACCENT, ease: "none" }, 0)
        .reverse();
      return { menu, fn: (clicked: Element | null) => {
        if (clicked === menu) animation.reversed(!animation.reversed());
        else animation.reverse();
      } };
    });
    document.querySelectorAll(".mil-accordion-menu").forEach((menu) => {
      const handler = () => toggles.forEach((t) => t.fn(menu));
      menu.addEventListener("click", handler);
      accordionCleanups.current.push(() => menu.removeEventListener("click", handler));
    });

    /* --------------------------------- fancybox --------------------------------- */
    Fancybox.bind('[data-fancybox="gallery"]');

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      accordionCleanups.current.forEach((fn) => fn());
      accordionCleanups.current = [];
      Fancybox.unbind('[data-fancybox="gallery"]');
      Fancybox.close();
    };
  }, [pathname]);

  return null;
}
