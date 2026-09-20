import Footer from "@/components/Footer";
import HiddenElements from "@/components/HiddenElements";

/**
 * Remounts on every navigation (Next.js template behavior) — this replaces
 * Swup's #swupMain container swap so per-page GSAP/Swiper setup re-runs
 * against fresh DOM.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="swupMain" className="mil-main-transition">
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <HiddenElements />
    </div>
  );
}
