"use client";

import './globals.css';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <html lang="en">
      <body className="bg-accent text-darkBlue font-sans">
        {/* Header */}
        <header className="bg-darkBlue text-light py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-24 md:w-32 lg:w-40 aspect-square">
                <Image
                  src="/orbis-logo.png" // Ensure this matches your logo file in the public/ directory
                  alt="Orbis Logo"
                  fill // Automatically adjusts size
                  className="object-contain" // Maintains aspect ratio
                  priority
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-end">
              <Link href="/" aria-label="Home">
                <a className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">Home</a>
              </Link>
              <Link href="/focus-areas" aria-label="Focus Areas">
                <a className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">Focus Areas</a>
              </Link>
              <Link href="/products" aria-label="Products">
                <a className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">Products</a>
              </Link>
              <Link href="/careers" aria-label="Careers">
                <a className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">Careers</a>
              </Link>
              <Link href="/contact" aria-label="Contact">
                <a className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">Contact</a>
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-darkBlue text-light py-6 px-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Orbis Operations LLC. All rights reserved.</p>
            <p>
              Contact us:{" "}
              <a
                href="mailto:impact@orbisops.com"
                className="text-orbitBlue hover:text-azureBlue transition"
              >
                impact@orbisops.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
