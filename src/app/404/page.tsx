/* Converted from the Ashley HTML template — markup preserved verbatim. */
import Link from "next/link";

export default function Page() {
  return (
    <>
    {/* 404 */}
    <div className="mil-404-banner mil-dark-bg">
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-4 mil-scale" data-value-1="9" data-value-2="1.4" style={{ right: "40%" }}></div>
      </div>
      <div className="mi-invert-fix mil-up">
        <div className="container">
          <div className="mil-404-frame">
            <div className="mil-scale-frame">
              <h1 className="mil-404" data-text="404">404</h1>
            </div>
            <h4 className="mil-404-text mil-dark mil-mb-60">That page doesn&apos;t exist — but my work does.</h4>
            <Link href="/" className="mil-button mil-arrow-place">
              <span>Back to homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
