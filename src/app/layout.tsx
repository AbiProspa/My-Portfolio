import type { Metadata } from "next";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import AshleyRuntime from "@/components/AshleyRuntime";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import MenuFrame from "@/components/MenuFrame";
import Frame from "@/components/Frame";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://prosper-portfolio.onrender.com"),
  title: `${site.name} | Full-Stack Developer`,
  description:
    "Abiodun Prosper is a Lagos-based full-stack developer building web and mobile products with TypeScript, React, React Native, Next.js, and Node.js.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Full-Stack Developer`,
    description: "Full-stack developer building web and mobile products across fintech, commerce, and newcomer services.",
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Full-Stack Developer`,
    description: "Full-stack developer building web and mobile products across fintech, commerce, and newcomer services.",
    creator: "@Abi_Prospa",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* the theme's dark sections invert the page behind them via
            backdrop-filter, which needs an actually-painted background */}
        <style>{`body { background-color: #fff; }`}</style>
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div className="mil-wrapper" id="top">
          <Cursor />
          <Preloader />

          {/* scrollbar progress */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>

          <MenuFrame />

          {/* curtain */}
          <div className="mil-curtain"></div>

          <Frame />

          {/* content */}
          <div className="mil-content">{children}</div>
        </div>
        <AshleyRuntime />
      </body>
    </html>
  );
}
