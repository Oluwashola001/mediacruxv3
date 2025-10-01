import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // <- allows build to succeed even with ESLint errors
  },
};

export default nextConfig;
