import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for platforms requiring pre-rendered HTML
  trailingSlash: true, // Ensures routes end with a trailing slash (good for static hosts)
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Environment variable example
  },
  experimental: {
    appDir: true, // Enables support for the app directory if you're using it
  },
  async redirects() {
    return [
      {
        source: "/old-route/",
        destination: "/new-route/",
        permanent: true, // Example of handling route redirections
      },
    ];
  },
};

export default nextConfig;
