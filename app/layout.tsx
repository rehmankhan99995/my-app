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
      <footer className="bg-[radial-gradient(circle_at_center,#0377B7,#223D80)] text-white py-12 px-6 md:px-24">
  <div className="max-w-[1440px] mx-auto">
    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-10">
      
      {/* Left Section: Logo + Text + Social Icons + Partners */}
      <div className="lg:col-span-3">
        <Image
          src="/rosawhitelogo.png"
          alt="Rosa eSolutions"
          width={200}
          height={80}
          className="mb-6"
        />
        <p className="text-white/90 text-[15px] leading-relaxed mb-6 max-w-xs">
          ROSA eSolutions is a 360° digital marketing & Google partner company
          that focuses on driving results via effective and measurable solutions.
        </p>

        {/* Social Media */}
        <div className="flex items-center gap-3 mb-6">
          {["/ficon5.png","/ficon1.png","/ficon2.png","/ficon3.png","/ficon.png"].map((icon, i) => (
            <Link href="#" key={i}>
              <Image src={icon} alt="icon" width={35} height={35} />
            </Link>
          ))}
        </div>

        {/* Partners Logos Box */}
        <div className="border border-white/20 rounded-xl p-4 flex flex-wrap items-center justify-center gap-4 bg-white/5">
          <Image src="/google.png" alt="Google" width={38} height={38} />
          <Image src="/fmeta.png" alt="Meta" width={48} height={30} />
          <Image src="/fshopify.png" alt="Shopify" width={35} height={40} />
          <Image src="/fdrive.png" alt="Analytics" width={38} height={35} />
          <Image src="/fwordpress.png" alt="WordPress" width={36} height={36} />
          <Image src="/semrushf.png" alt="SEMRush" width={100} height={40} />
          <Image src="/famazon.png" alt="Amazon" width={70} height={40} />
        </div>
      </div>

      {/* Important Links */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-4">Important Links</h3>
        <h3>Get in Touch</h3>
        {/* <ul className="space-y-2.5 text-sm text-white/90">
          <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          <li><Link href="/clients" className="hover:text-white">Our Clients</Link></li>
          <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          <li><Link href="/quote" className="hover:text-white">Request a Quote</Link></li>
        </ul> */}
      </div>

      {/* Toronto */}
      <div className="lg:col-span-3 ml-20">
        <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">TORONTO</h4>
          <p className="text-white/80 text-xs leading-relaxed">
            60 Atlantic Avenue Suite 200<br />
            Toronto Ontario M6K 1X9, Canada
          </p>
          <p className="text-white/80 text-xs mt-2">Monday – Friday: 9:00 – 17:00</p>
          <p className="text-white/80 text-xs">Saturday: Off</p>
          <p className="text-white/80 text-xs mb-2">Sunday: Off</p>
          <p className="text-white/80 text-xs">Email: info@erosa.ae</p>
          <p className="text-white/80 text-xs">Phone: (+1)416 848 1590</p>
        </div>
      </div>

      {/* Dubai */}
      <div className="lg:col-span-4">
        <div className="lg:mt-12">
          <h4 className="text-sm font-semibold mb-2">DUBAI</h4>
          <p className="text-white/80 text-xs leading-relaxed">
            Dubai Digital Park, Dtec,<br />
            Building A5, FLEX 1026, UAE
          </p>
          <p className="text-white/80 text-xs mt-2">Monday – Thursday: 9:00 – 18:00</p>
          <p className="text-white/80 text-xs">Friday: 9:00 – 13:00</p>
          <p className="text-white/80 text-xs">Saturday: Off</p>
          <p className="text-white/80 text-xs mb-2">Sunday: Off</p>
          <p className="text-white/80 text-xs">Email: info@erosa.ae</p>
          <p className="text-white/80 text-xs">Phone: (+971) 52 808 0465</p>
          <p className="text-white/80 text-xs">Phone: (+971) 4 272 4971</p>
        </div>
      </div>
    </div>

    {/* Clients */}
    <div className="mt-12 pt-8">
      <h3 className="text-lg font-semibold mb-6">Our Clients</h3>
      <div className="flex flex-wrap gap-4">
        {["/footer2.png","/footer10.png","/footer4.png","/footer5.png","/footer6.png","/footer3.png","/footer8.png","/footer1.png","/footer9.png","/footer7.png"].map((client, i) => (
          <div key={i} className="bg-white rounded-lg p-3 h-[97px] w-[97px] flex items-center justify-center">
            <Image src={client} alt="Client" width={80} height={80} className="object-contain" />
          </div>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-10 pt-6 text-center border-t border-white/10">
      <p className="text-white/70 text-xs">© 2025 Rosa eSolutions. All Rights Reserved.</p>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}
