"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Portofolio", href: "/portofolio" },
];

const layananItems = [
  { label: "Web Development", href: "/layanan/web-development" },
  { label: "UI/UX Design", href: "/layanan/uiux-design" },
  { label: "Mobile App", href: "/layanan/mobile-app" },
  { label: "ML/AI", href: "/layanan/mlai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
          : "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center shrink-0">
          <img src="/images/logo-ani.png" alt="ANI Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Dropdown Layanan */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
            >
              Layanan
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-green-600" : ""}`}
              />
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                dropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="py-1.5">
                {layananItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-bold bg-green-600 text-white rounded-full hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all duration-300 active:scale-95"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeAll}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={closeAll}>
            <img src="/images/logo-ani.png" alt="ANI Logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={closeAll}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Panel Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeAll}
              className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Mobile Layanan Accordion */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              Layanan
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-green-600" : "text-gray-400"}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                dropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-3 pl-4 border-l-2 border-green-100 mt-1 space-y-0.5">
                {layananItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeAll}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Panel CTA */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={closeAll}
            className="flex items-center justify-center w-full py-3 text-sm font-bold bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
