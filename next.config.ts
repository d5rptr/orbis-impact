import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures routes end with a trailing slash
  images: {
    unoptimized: true, // Disables image optimization for static sites
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Example environment variable
  },
};

export default nextConfig;
