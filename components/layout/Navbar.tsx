"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const links = [
  { label: "Destinations", href: "/destinations" },
  { label: "Cruises", href: "/cruises" },
  { label: "Tours", href: "/tours" },
  { label: "Promotions", href: "/promotions" },
  { label: "Trip Reel", href: "/trip-reel" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-sm font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
            scrolled ? "text-[#1C3F6E]" : "text-white"
          }`}
        >
          Getaway
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#4A90D9] ${
                scrolled ? "text-[#5B7FA6]" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-4 px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
              scrolled
                ? "bg-[#4A90D9] text-white hover:bg-[#3a7bc8]"
                : "border border-white text-white hover:bg-white hover:text-[#1C3F6E]"
            }`}
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              scrolled ? "bg-[#1C3F6E]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              scrolled ? "bg-[#1C3F6E]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              scrolled ? "bg-[#1C3F6E]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D8E8F8] px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase text-[#5B7FA6] hover:text-[#4A90D9] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-6 py-3 bg-[#4A90D9] text-white text-xs tracking-[0.15em] uppercase text-center"
            onClick={() => setMenuOpen(false)}
          >
            Plan Your Trip
          </Link>
        </div>
      )}
    </nav>
  )
}