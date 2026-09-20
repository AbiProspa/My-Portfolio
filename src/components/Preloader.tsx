"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={`portfolio-preloader${visible ? " is-visible" : ""}`} aria-hidden="true">
      <div className="portfolio-preloader-content">
        <span className="portfolio-preloader-name">Abiodun Prosper</span>
        <span className="portfolio-preloader-tagline">Build. Integrate. Ship.</span>
        <span className="portfolio-preloader-track"><span /></span>
      </div>
    </div>
  );
}
