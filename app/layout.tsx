"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <html lang="en">
      <body className="bg-accent text-darkBlue font-sans">
        <header className="bg-darkBlue text-light py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <div className="relative w-24 md:w-32 lg:w-40 aspect-square">
              <Image src="/orbis-logo.png" alt="Orbis Logo" layout="fill" objectFit="contain" priority />
            </div>
            <nav className="flex flex-wrap justify-end">
              <Link href="/" className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">
                Home
              </Link>
              <Link href="/focus-areas" className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">
                Focus Areas
              </Link>
              <Link href="/products" className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">
                Products
              </Link>
              <Link href="/careers" className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">
                Careers
              </Link>
              <Link href="/contact" className="mx-2 md:mx-4 text-orbitBlue hover:text-azureBlue transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-darkBlue text-light py-6 px-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Orbis Operations LLC. All rights reserved.</p>
            <p>
              Contact us:{" "}
              <a href="mailto:impact@orbisops.com" className="text-orbitBlue hover:text-azureBlue transition">
                impact@orbisops.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
