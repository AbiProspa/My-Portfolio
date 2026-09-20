import Link from "next/link";
import { site } from "@/lib/data";

export default function Frame() {
  return (
    <div className="mil-frame">
      <div className="mil-frame-top">
        <Link href="/" className="mil-logo" aria-label={site.name}>
          {site.logo}
        </Link>
        <button type="button" className="mil-menu-btn" aria-label="Toggle navigation menu" aria-controls="primary-navigation" aria-expanded="false">
          <span aria-hidden="true"></span>
        </button>
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
  );
}
