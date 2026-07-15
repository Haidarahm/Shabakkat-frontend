import type { NextConfig } from "next";

// Fonts are self-hosted via next/font/google (no runtime requests to Google's font
// CDN) and all images are served from /public via next/image, so script/style/img/
// font sources can stay scoped to 'self' without an allowlist of external hosts.
// Next's dev server (HMR, source maps) needs 'unsafe-eval'/'unsafe-inline' script
// sources that the production build does not — only relax script-src in dev.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  `script-src 'self'${isDev ? " 'unsafe-eval' 'unsafe-inline'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Only takes effect once the site is actually served over HTTPS by the host.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
