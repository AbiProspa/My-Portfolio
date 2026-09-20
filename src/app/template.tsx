/* Stands in for Swup's #swupMain container: Next remounts this on every
   navigation, which is what re-runs the template's per-page setup. */

import HiddenElements from "@/components/HiddenElements";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="swupMain" className="mil-main-transition">
      {children}

      {/* hidden elements */}
      <HiddenElements />
      {/* hidden elements end */}
    </div>
  );
}
