"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-side only features run on the client
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {isClient ? (
        <>
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg"
          >
            Go Back Home
          </Link>
        </>
      ) : (
        <p className="text-xl">Loading...</p>
      )}
    </div>
  );
};

export default NotFound;
