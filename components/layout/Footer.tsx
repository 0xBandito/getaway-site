import Link from "next/link"

const exploreLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Cruises", href: "/cruises" },
  { label: "Promotions", href: "/promotions" },
]

const moreLinks = [
  { label: "Trip Reel", href: "/trip-reel" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-sky-50)] border-t border-[var(--color-sky-200)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-body text-lg font-bold text-[var(--color-ink)]">
              Travel With{" "}
              <span className="font-display italic font-medium text-[var(--color-sky)]">
                Cameron
              </span>
            </Link>
            <p className="font-body text-sm leading-[1.7] text-[var(--color-muted)] mt-3 max-w-xs">
              Personalized travel experiences crafted around you. Let Cameron
              handle every detail so you can focus on the memories.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
              Explore
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-ink)]/70 transition-opacity duration-200 hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
              More
            </p>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-ink)]/70 transition-opacity duration-200 hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
              Get In Touch
            </p>
            <p className="font-body text-sm text-[var(--color-ink)]/70 mb-4">
              Ready to start planning your dream trip?
            </p>
            <Link
              href="/contact"
              className="btn-sky inline-block px-6 py-2.5 rounded-full text-sm font-semibold font-body"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

        <div className="divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} Travel With Cameron. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="font-body text-xs text-[var(--color-muted)] transition-opacity duration-200 hover:opacity-60">
              FAQ
            </Link>
            <Link href="/about" className="font-body text-xs text-[var(--color-muted)] transition-opacity duration-200 hover:opacity-60">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
