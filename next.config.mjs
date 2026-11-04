/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Let job-application forms fetch the CV PDFs (read-only, public files).
    const cors = [{ key: "Access-Control-Allow-Origin", value: "*" }];
    return [
      { source: "/cv/:file*", headers: cors },
      { source: "/Abiodun-Prosper-CV.pdf", headers: cors },
    ];
  },
};

export default nextConfig;
