/* Converted from the Ashley HTML template — markup preserved, copy is mine.
   The three lines stagger in, then the second block wipes in behind the
   reveal box; the timing lives in TemplateRuntime's preloader timeline. */

export default function Preloader() {
  return (
    <>
    <div className="mil-preloader">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin">Building</p>
          <p className="mil-h3 mil-muted">Digital</p>
          <p className="mil-h3 mil-muted mil-thin">Products</p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box"></p>
            <p className="mil-h3 mil-muted mil-thin">Abi Prospa</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
