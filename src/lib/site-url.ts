/**
 * Canonical origin for metadata, sitemap and robots.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel once the Namecheap domain is attached.
 * Falls back to the Vercel-assigned URL, then to localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
