import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Use "standalone" for dynamic server-side features while allowing static content
  trailingSlash: true, // Ensures routes end with a trailing slash (useful for static hosting)
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://default.api.url", // Provide a fallback value for environment variables
  },
  async redirects() {
    return [
      {
        source: "/old-route/",
        destination: "/new-route/",
        permanent: true, // Redirects users from /old-route/ to /new-route/
      },
    ];
  },
};

export default nextConfig;
