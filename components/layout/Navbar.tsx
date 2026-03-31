"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
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
  const pathname = usePathname()
  const router = useRouter()

  // Only the homepage has a dark hero — all other pages need dark navbar text immediately
  const isHomepage = pathname === "/"
  const useDarkText = !isHomepage || scrolled

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [isHomepage])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll() // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useDarkText
          ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-sky-200)]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className={`font-body text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
            useDarkText ? "text-[var(--color-ink)]" : "text-white"
          }`}
        >
          Travel With{" "}
          <span
            className="font-display italic font-medium"
            style={{
              color: useDarkText ? "var(--color-sky)" : "rgba(255,255,255,0.9)",
            }}
          >
            Cameron
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-hover font-body text-sm font-medium transition-colors duration-300 ${
                useDarkText
                  ? "text-[var(--color-ink)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-300 ${
              useDarkText
                ? "btn-sky"
                : "border border-white/60 text-white hover:bg-white hover:text-[var(--color-ink)]"
            }`}
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-sky)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              useDarkText ? "bg-[var(--color-ink)]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              useDarkText ? "bg-[var(--color-ink)]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${
              useDarkText ? "bg-[var(--color-ink)]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-sky-200)]/20 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-[var(--color-ink)] py-2 hover:text-[var(--color-sky)] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 btn-sky inline-block px-5 py-2.5 rounded-full text-sm font-semibold font-body text-center"
            onClick={() => setMenuOpen(false)}
          >
            Plan Your Trip
          </Link>
        </div>
      )}
    </nav>
  )
}
