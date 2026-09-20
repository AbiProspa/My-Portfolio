/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingExcludes: {
    "*": ["./Ashley html template/**", "./__MACOSX/**"],
  },
};

export default nextConfig;
