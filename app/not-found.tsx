"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
