import Link from "next/link"

const links = [
  { label: "Destinations", href: "/destinations" },
  { label: "Cruises", href: "/cruises" },
  { label: "Tours", href: "/tours" },
  { label: "Promotions", href: "/promotions" },
  { label: "Trip Reel", href: "/trip-reel" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C3F6E] text-[#8BACC8]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-semibold tracking-widest text-white uppercase mb-4">
              Getaway
            </p>
            <p className="text-sm leading-relaxed">
              Personalized travel experiences crafted around you. Let Cameron
              handle every detail so you can focus on the memories.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white mb-4">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <p>Ready to start planning?</p>
              <Link
                href="/contact"
                className="inline-block px-5 py-3 bg-[#4A90D9] text-white text-sm tracking-wide text-center hover:bg-[#3a7bc8] transition-colors duration-200"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A4F7E] text-xs text-center">
          © {new Date().getFullYear()} Getaway. All rights reserved.
        </div>
      </div>
    </footer>
  )
}