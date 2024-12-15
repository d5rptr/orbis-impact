"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/router";

// Define the structure for navigation links
interface NavLink {
  href: string;
  label: string;
}

// Reusable Navigation Component
const Navigation: React.FC<{ links: NavLink[]; onLinkClick?: () => void }> = ({ links, onLinkClick }) => (
  <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6">
    {links.map(({ href, label }) => (
      <li key={label}>
        <Link
          href={href}
          className="text-orbitBlue hover:text-azureBlue transition font-bold block md:inline-block"
          onClick={onLinkClick}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

// Reusable Footer Section Component
const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-azureBlue mb-2">{title}</h3>
    {children}
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks: NavLink[] = [
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/offerings", label: "Offerings" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Add 'loaded' class to body after initial render
    document.body.classList.add("loaded");

    // Cleanup AOS instance on component unmount
    return () => {
      AOS.refreshHard();
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="bg-accent text-darkBlue font-sans min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-darkBlue text-light py-4 md:py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="relative w-32 md:w-40 lg:w-48">
            <Link href="/" aria-label="Orbis Home">
              <Image
                src="/orbis-logo.png"
                alt="Orbis Logo"
                width={160}
                height={40}
                priority
                className="hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <Navigation links={navLinks} />
          </nav>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-orbitBlue focus:outline-none focus:ring-2 focus:ring-azureBlue rounded"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden bg-darkBlue text-light transition-transform transform ${
            isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-4">
            <Navigation links={navLinks} onLinkClick={() => setMenuOpen(false)} />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 md:px-8">{children}</main>

      {/* Footer */}
      <footer className="bg-darkBlue text-light py-8 px-4 md:px-8">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
          {/* Contact Information */}
          <FooterSection title="Contact Us">
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
          </FooterSection>

          {/* Social Media Links */}
          <FooterSection title="Follow Us">
            <div className="flex justify-center md:justify-start space-x-4">
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
          </FooterSection>

          {/* Legal Information */}
          <FooterSection title="Legal">
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
          </FooterSection>
        </div>
      </footer>
    </div>
  );
}
