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
});

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
        <footer className="bg-[radial-gradient(circle_at_center,#0377B7,#223D80)] text-white py-17 px-6 md:px-16 lg:px-29">
          <div className="max-w-[1400px] mx-auto">
            {/* Main Content - 3 Column Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Column 1: Logo + Description + Social + Partners */}
              <div className="lg:w-[280px] flex-shrink-0">
                <Image
                  src="/rosawhitelogo.png"
                  alt="Rosa eSolutions"
                  width={170}
                  height={65}
                  className="mb-5"
                />
                <p className="text-white text-[17px] leading-[1.7] mb-6">
                  ROSA eSolutions is a 360° digital marketing & Google partner
                  company that focuses on driving results via effective and
                  measurable solutions.
                </p>

                {/* Social Icons */}
                <div className="flex gap-2.5 mb-6">
                  <Link href="#">
                    <Image src="/ficon5.png" alt="X" width={30} height={30} />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/ficon1.png"
                      alt="Facebook"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/ficon2.png"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/ficon3.png"
                      alt="Instagram"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/ficon.png"
                      alt="Pinterest"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>

                {/* Partners Box */}
                <div className="border-2 border-white rounded-xl p-6 flex flex-wrap items-center justify-center gap-2">
                  <Image
                    src="/google.png"
                    alt="Google"
                    width={44}
                    height={44}
                  />
                  <Image src="/fmeta.png" alt="Meta" width={55} height={37} />
                  <Image
                    src="/fdrive.png"
                    alt="Analytics"
                    width={43}
                    height={39}
                  />
                  <Image
                    src="/fshopify.png"
                    alt="Shopify"
                    width={39}
                    height={45}
                  />
                  <Image
                    src="/fwordpress.png"
                    alt="WordPress"
                    width={42}
                    height={42}
                  />
                  <Image
                    src="/semrushf.png"
                    alt="SEMRush"
                    width={95}
                    height={40}
                  />
                  <Image
                    src="/famazon.png"
                    alt="Amazon"
                    width={65}
                    height={36}
                  />
                </div>
              </div>

              {/* Column 2: Important Links + Get In Touch (stacked) */}
              <div className="lg:w-[1440px] ">
                <div className="flex flex-col gap-20">
                  {/* Important Links */}
                  <div className="flex gap-8">
                    <h3 className="text-white text-[28px] font-bold mb-3">
                      Important Links
                    </h3>
                    {/* <ul className="space-y-1.5 text-[12px] text-white mb-8">
          <li><Link href="/about" className="hover:opacity-80">About Us</Link></li>
          <li><Link href="/clients" className="hover:opacity-80">Our Clients</Link></li>
          <li><Link href="/blog" className="hover:opacity-80">Blog</Link></li>
          <li><Link href="/contact" className="hover:opacity-80">Contact Us</Link></li>
          <li><Link href="/quote" className="hover:opacity-80">Request a Quote</Link></li>
        </ul> */}
                    <div className="flex flex-col gap-2.5">
                      <p>About us</p>
                      <p>our Clients</p>
                      <p>Blog</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <p>Contact Us</p>
                      <p>Request a Quote</p>
                    </div>
                  </div>
                  {/* Get In Touch */}
                  <div className="flex gap-10">
                    <h3 className="text-white text-[28px] font-bold mb-3">
                      Get In Touch
                    </h3>
                    <div className="lg:w-[220px] flex-shrink-0">
                      <h4 className="text-white font-semibold text-[18px] ">
                        TORONTO
                      </h4>
                      <p className="text-white text-[16px] leading-[1.5] mb-2">
                        60 Atlantic Avenue Suite 200 Toronto Ontario M6K 1X9,
                        Canada
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Monday – Friday: 9:00 – 17:00
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Saturday: Off
                      </p>
                      <p className="text-white text-[16px] leading-[1.6] mb-2">
                        Sunday: Off
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Email: info@erosa.ae
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Phone: (+1)4168481590
                      </p>
                    </div>
                    <div className="lg:w-[230px] flex-shrink-0">
                      <h4 className="text-white font-semibold text-[18px] tracking-wide mb-2">
                        DUBAI
                      </h4>
                      <p className="text-white text-[16px] leading-[1.5] mb-2">
                        Dubai Digital Park, Dtec,
                        <br />
                        Building A5, FLEX 1026, UAE
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Monday – Thursday: 9:00 – 18:00
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Friday: 9:00 – 13:00
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Saturday: Off
                      </p>
                      <p className="text-white text-[16px] leading-[1.6] mb-2">
                        Sunday: Off
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Email: Info@erosa.ae
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Phone: (+971) 52 808 0465
                      </p>
                      <p className="text-white text-[16px] leading-[1.6]">
                        Phone: (+971) 4 272 4971
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Toronto */}

              {/* Column 4: Dubai */}
            </div>

            {/* Our Clients */}
            <div className="mt-12 pt-4">
              <h3 className="text-white text-[28px] font-bold mb-6">
                Our Clients
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "/footer2.png",
                  "/footer10.png",
                  "/footer4.png",
                  "/footer5.png",
                  "/footer6.png",
                  "/footer3.png",
                  "/footer8.png",
                  "/footer1.png",
                  "/footer9.png",
                  "/footer7.png",
                ].map((client, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-2.5 h-[85px] w-[85px] flex items-center justify-center"
                  >
                    <Image
                      src={client}
                      alt="Client"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright */}

            <div className="mt-10 border-t border-white/20 pt-6 text-center">
              <p className="text-white/60 text-[17px] font-normal">
                © 2025 Rosa eSolutions. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
