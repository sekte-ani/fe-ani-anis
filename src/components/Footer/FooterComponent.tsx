"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const layananLinks = [
  { label: "Web Development", href: "/layanan/web-development" },
  { label: "UI/UX Design", href: "/layanan/uiux-design" },
  { label: "Mobile App", href: "/layanan/mobile-app" },
  { label: "ML / AI", href: "/layanan/mlai" },
];

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Hubungi Kami", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/">
              <img
                src="/images/logo-ani.png"
                alt="ANI Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Solusi teknologi digital terpercaya untuk membantu bisnis Anda berkembang di era modern.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="mailto:aniteknologi@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white hover:bg-green-600 hover:text-white border border-blue-200 text-green-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Mail size={16} />
              </Link>
              <Link
                href="https://wa.link/pk884n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white hover:bg-green-600 hover:text-white border border-blue-200 text-green-600 flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Phone size={16} />
              </Link>
            </div>
          </div>

          {/* Navigasi */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-green-600 transition-colors flex items-center gap-1 group font-medium"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Layanan
            </h3>
            <ul className="space-y-3">
              {layananLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-green-600 transition-colors flex items-center gap-1 group font-medium"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:aniteknologi@gmail.com"
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-green-600 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center shrink-0 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    <Mail size={14} />
                  </span>
                  <span className="pt-1">aniteknologi@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.link/pk884n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-green-600 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center shrink-0 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all">
                    <Phone size={14} />
                  </span>
                  <span className="pt-1">WhatsApp Kami</span>
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center shrink-0 text-green-600 shadow-sm">
                    <MapPin size={14} />
                  </span>
                  <span className="pt-1">Indonesia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 font-medium">
            © {year} ANI Solution – All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Crafted with care for better digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
