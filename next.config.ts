import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // Ensures routes end with a trailing slash (useful for static hosts)
  images: {
    unoptimized: true, // Disables image optimization (helpful for easier hosting configurations)
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Add your custom environment variables here
  },
  async redirects() {
    return [
      {
        source: "/old-route/",
        destination: "/new-route/",
        permanent: true, // Redirect from old routes to new ones
      },
    ];
  },
  experimental: {
    appDir: true, // Enables app directory support for modern Next.js features
  },
};

export default nextConfig;
