import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for Cloudflare Pages
  trailingSlash: true, // Ensures all routes have a trailing slash (important for static sites)
};

export default nextConfig;
