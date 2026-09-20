/* Everything outside the template's #swupMain container.
   Mirrors the <head> and wrapper markup of the Ashley HTML pages. */

import type { Metadata } from "next";
import Script from "next/script";

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import MenuFrame from "@/components/MenuFrame";
import Frame from "@/components/Frame";
import TemplateRuntime from "@/components/TemplateRuntime";
import { site } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | ${site.role}`, template: "%s" },
  description:
    "Abiodun Prosper is a Lagos-based software engineer building web, mobile and AI-enabled products with TypeScript, React, React Native, Next.js, NestJS and Laravel.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: "Software engineer building web, mobile and AI-enabled products across fintech, commerce and newcomer services.",
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: "Software engineer building web, mobile and AI-enabled products across fintech, commerce and newcomer services.",
    creator: "@Abi_Prospa",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* bootstrap grid css */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        {/* font awesome css */}
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        {/* swiper css */}
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        {/* fancybox css */}
        <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
        {/* ashley scss */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>

      <body>
        {/* wrapper */}
        <div className="mil-wrapper" id="top">

          {/* cursor */}
          <Cursor />
          {/* cursor end */}

          {/* preloader */}
          <Preloader />
          {/* preloader end */}

          {/* scrollbar progress */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          {/* scrollbar progress end */}

          {/* menu */}
          <MenuFrame />
          {/* menu end */}

          {/* curtain */}
          <div className="mil-curtain"></div>
          {/* curtain end */}

          {/* frame */}
          <Frame />
          {/* frame end */}

          {/* content */}
          <div className="mil-content">{children}</div>
          {/* content end */}

        </div>
        {/* wrapper end */}

        {/* the template's own vendored plugins, loaded before hydration so the
            runtime can use them exactly as main.js did */}
        {/* jQuery js */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        {/* swiper js */}
        <Script src="/js/plugins/swiper.min.js" strategy="beforeInteractive" />
        {/* fancybox js */}
        <Script src="/js/plugins/fancybox.min.js" strategy="beforeInteractive" />
        {/* scroll smoother */}
        <Script src="/js/plugins/smooth-scroll.js" strategy="beforeInteractive" />

        <TemplateRuntime />
      </body>
    </html>
  );
}
