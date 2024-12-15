"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
            <div className="relative w-32 md:w-40 lg:w-48">
              <Image
                src="/orbis-logo.png"
                alt="Orbis Logo"
                width={160}
                height={40} // Adjust dimensions as per your logo's aspect ratio
                priority
                className="hover:scale-105 transition-transform"
              />
            </div>

            {/* Desktop Navigation */}
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

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-orbitBlue focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-darkBlue text-light py-4 px-4">
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/focus-areas", label: "Focus Areas" },
                  { href: "/products", label: "Products" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block text-orbitBlue hover:text-azureBlue transition font-bold"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
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
                  className="text-orbitBlue hover:text-azureBlue transition"
                  aria-label="Follow us on LinkedIn"
                >
                  LinkedIn
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
                </Link>{" "}
                |{" "}
                <Link href="/terms" className="text-orbitBlue hover:text-azureBlue transition">
                  Terms of Use
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
