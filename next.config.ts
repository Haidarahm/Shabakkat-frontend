import type { NextConfig } from "next";

// Fonts are self-hosted via next/font/google (no runtime requests to Google's font
// CDN). Uploaded CMS images are proxied from Laravel via /storage/* rewrites so
// next/image can treat them as same-origin.
const isDev = process.env.NODE_ENV !== "production";

const backendOrigin = (
  process.env.BACKEND_API_URL ??
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  "http://127.0.0.1:8000/api"
)
  .trim()
  .replace(/[`'"]+$/g, "")
  .replace(/\/api\/?$/, "");

const csp = [
  "default-src 'self'",
  `script-src 'self'${isDev ? " 'unsafe-eval' 'unsafe-inline'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // Backend origin kept for any absolute CMS URLs; /storage is same-origin via rewrite.
  `img-src 'self' data: blob: ${backendOrigin} http://127.0.0.1:8000 http://localhost:8000`,
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
  reactStrictMode: true,
  images: {
    // Absolute backend URLs (legacy / direct) + local proxy paths both work.
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/storage/:path*",
        destination: `${backendOrigin}/storage/:path*`,
      },
    ];
  },
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
        source: "/about-us",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
