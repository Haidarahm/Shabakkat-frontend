import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
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
