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
        {/* Header */}
        <header className="bg-darkBlue text-light py-4 md:py-6 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            {/* Logo */}
            <div className="relative w-20 md:w-28 lg:w-36 aspect-square">
              <Image
                src="/orbis-logo.png"
                alt="Orbis Logo"
                fill
                priority
                className="hover:scale-105 transition-transform"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              {[
                { href: "/", label: "Home" },
                { href: "/focus-areas", label: "Focus Areas" },
                { href: "/products", label: "Products" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-orbitBlue hover:text-azureBlue transition font-bold"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-8 px-4 md:px-8">{children}</main>

        {/* Footer */}
        <footer className="bg-darkBlue text-light py-8 px-4 md:px-8">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-azureBlue mb-2">Contact Us</h3>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:17036390911"
                  className="text-orbitBlue hover:text-azureBlue transition"
                >
                  1-703-639-0911
                </a>
              </p>
              <p>
                6862 Elm St. Ste 300 <br />
                McLean, VA 22101-3886
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-azureBlue mb-2">Follow Us</h3>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/company/orbisoperations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Follow us on LinkedIn"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Legal Information */}
            <div>
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Orbis Operations LLC. All rights reserved.
              </p>
              <p>
                Contact us:{" "}
                <a
                  href="mailto:impact@orbisops.com"
                  className="text-orbitBlue hover:text-azureBlue transition"
                >
                  impact@orbisops.com
                </a>
              </p>
              <p>
                <Link href="/privacy" className="text-orbitBlue hover:text-azureBlue transition">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
