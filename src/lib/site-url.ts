/**
 * Canonical origin for metadata, sitemap and robots.
 *
 * NEXT_PUBLIC_SITE_URL overrides it (e.g. once a custom domain is attached).
 * Production uses the public portfolio domain; previews use their own Vercel URL.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "production"
    ? "https://abiodunprosper.vercel.app"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
