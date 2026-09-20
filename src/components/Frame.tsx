/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";
import { site } from "@/lib/data";

export default function Frame() {
  return (
    <>
    <div className="mil-frame">
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo">{site.logo}</Link>
        <div className="mil-menu-btn">
          <span></span>
        </div>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page"></div>
        <div className="mil-back-to-top">
          <a href="#top" className="mil-link mil-dark mil-arrow-place">
            <span>Back to top</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
