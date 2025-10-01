"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
    weight: ["400", "500", "600", "700"], 
  variable: "--font-roboto",
});;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // for mobile dropdown

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-50 ">
          <nav className="max-w-[1140px] mx-auto flex items-center justify-between px-6 py-4 relative">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logorosa.png"
                alt="Rosa Solutions"
                width={145}
                height={60}
                priority
              />
            </Link>

            {/* Request a Quote (MOBILE - Centered) */}
            <div className="absolute right-1/100 transform -translate-x-1/2 md:hidden">
              <Link
                href="/quote"
                className="bg-gradient-to-r from-[#6255FD] to-[#9477D1] text-white px-3 py-2.5 rounded-full text-sm font-light shadow-md hover:opacity-90"
              >
                Request a Quote
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium text-gray-800">
              <li>
                <Link
                  href="/"
                  className="text-[#6B46FF] font-semibold hover:text-[#6B46FF]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>

              {/* Desktop Services Dropdown */}
              <li className="relative group">
                <button className="flex items-center gap-1">
                  Services <span className="rotate-90 text-xs">›</span>
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg p-4 min-w-[200px]">
                  <Link
                    href="/services/seo"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Seo
                  </Link>
                  <Link
                    href="/services/digital-ads-advertising"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Digital Ads Advertising
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/pr&-media-coverage"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    PR & MEDIA COVERAGE
                  </Link>
                  <Link
                    href="/services/account-management"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Account Management
                  </Link>
                  <Link
                    href="/services/app-development"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    App Development
                  </Link>
                  <Link
                    href="/services/email-automated-marketing"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    EMAIL/AUTOMATED MARKETING
                  </Link>
                  <Link
                    href="/services/marketing-consulting"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Marketing Consulting
                  </Link>
                  <Link
                    href="/services/graphic-design"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Graphic design
                  </Link>
                  <Link
                    href="/services/video-development"
                    className="block px-2 py-1 hover:text-[#6B46FF]"
                  >
                    Video-Development
                  </Link>
                </div>
              </li>

              <li>
                <Link href="/clients">Our Clients</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <div className="">
              <li className="flex items-center gap-6">
                <Image src="/uae.png" alt="UAE Flag" width={18} height={12} />
                <span className="">العربية</span>
              </li>
              </div>
            </ul>

            {/* Request a Quote (DESKTOP - Right side) */}
            <Link
              href="/quote"
              className="
                hidden md:block 
                bg-gradient-to-r from-[#6255FD] to-[#9477D1] text-white px-6 py-2 rounded-full 
                text-[15px] font-light shadow-md hover:opacity-90
              "
            >
              Request a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1 z-50"
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg absolute top-[72px] left-0 w-full p-6 space-y-4">
              <Link href="/" className="block">
                Home
              </Link>
              <Link href="/about" className="block">
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Services</span>
                  <span
                    className={`transform transition-transform ${
                      servicesOpen ? "rotate-90" : ""
                    }`}
                  >
                    ›
                  </span>
                </button>

                {servicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      href="/services/seo"
                      className="block hover:text-[#6B46FF]"
                    >
                      Seo
                    </Link>
                    <Link
                      href="/services/digital-ads-advertising"
                      className="block hover:text-[#6B46FF]"
                    >
                      Digital Ads Advertising
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="block hover:text-[#6B46FF]"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/pr&-media-coverage"
                      className="block hover:text-[#6B46FF]"
                    >
                      PR & MEDIA COVERAGE
                    </Link>
                    <Link
                      href="/services/account-management"
                      className="block hover:text-[#6B46FF]"
                    >
                      Account Management
                    </Link>
                    <Link
                      href="/services/app-development"
                      className="block hover:text-[#6B46FF]"
                    >
                      App Development
                    </Link>
                    <Link
                      href="/services/email-automated-marketing"
                      className="block hover:text-[#6B46FF]"
                    >
                      EMAIL/AUTOMATED MARKETING
                    </Link>
                    <Link
                      href="/services/marketing-consulting"
                      className="block hover:text-[#6B46FF]"
                    >
                      Marketing Consulting
                    </Link>
                    <Link
                      href="/services/graphic-design"
                      className="block hover:text-[#6B46FF]"
                    >
                      Graphic design
                    </Link>
                    <Link
                      href="/services/video-development"
                      className="block hover:text-[#6B46FF]"
                    >
                      Video-Development
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/clients" className="block">
                Our Clients
              </Link>
              <Link href="/blog" className="block">
                Blog
              </Link>
              <Link href="/contact" className="block">
                Contact Us
              </Link>

              {/* Language */}
              <div className="flex items-center gap-2 ">
                <Image src="/uae.png" alt="UAE Flag" width={18} height={12} />
                <span>العربية</span>
              </div>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
