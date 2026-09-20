/* The card LinkedIn, X, Slack and WhatsApp show when the link is shared.
   Generated at build time, so there is no binary to keep in sync with the
   site's copy. Next reuses this for the Twitter card too. */
import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#2563eb";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        {/* accent disc, echoing the site's dark sections — kept clear of the
            headline, since Satori has no blur to soften the edge */}
        <div
          style={{
            position: "absolute",
            top: -300,
            right: -220,
            width: 560,
            height: 560,
            borderRadius: 560,
            background: ACCENT,
            opacity: 0.18,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 600 }}>
          {site.logo}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.05, letterSpacing: -3 }}>
            Software Engineer
          </div>
          {/* one line at this size — wrapping crowds the card */}
          <div style={{ fontSize: 46, lineHeight: 1.3, marginTop: 18, color: "rgba(255,255,255,0.6)" }}>
            Web, mobile &amp; AI-enabled products
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28 }}>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}>
            {site.name} · {site.location}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 14, height: 14, borderRadius: 14, background: ACCENT, marginRight: 14 }} />
            <div style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}>
              React · Next.js · React Native · Node.js
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
