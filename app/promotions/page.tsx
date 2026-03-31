import Link from "next/link"

export const metadata = {
  title: "Promotions | Travel With Cameron",
  description:
    "Current travel deals and promotions. Limited time offers on cruises, all-inclusive resorts, and international trips.",
}

const promotions = [
  {
    tag: "Limited Time",
    title: "Caribbean Cruise Flash Sale",
    description:
      "7-night Caribbean sailings with stops in Cozumel, Grand Cayman, and Nassau. Book before spots fill up.",
    price: "From $699/person",
    expires: "While availability lasts",
    chip: "Caribbean cruise",
  },
  {
    tag: "Best Seller",
    title: "Cancun All-Inclusive Package",
    description:
      "Beachfront resort, all meals and drinks, airport transfers included. The most popular trip we book.",
    price: "From $799/person",
    expires: "Travel through December 2025",
    chip: "All-inclusive resort",
  },
  {
    tag: "Honeymoon Special",
    title: "Maldives Overwater Bungalow",
    description:
      "7 nights in your own overwater villa. All-inclusive dining, snorkeling, and sunset cruises.",
    price: "From $4,999/couple",
    expires: "Book 90 days in advance",
    chip: "Honeymoon",
  },
  {
    tag: "Group Deal",
    title: "Europe Tour — Groups of 6+",
    description:
      "10-night Western Europe tour with group pricing. Paris, Rome, and Barcelona in one seamless trip.",
    price: "From $1,999/person",
    expires: "Spring and Fall departures",
    chip: "Group trip",
  },
  {
    tag: "Adventure",
    title: "Costa Rica Explorer",
    description:
      "Zip-lining, white water rafting, wildlife tours, and a beach finish. The ultimate active vacation.",
    price: "From $1,499/person",
    expires: "Dry season bookings available",
    chip: "Not sure yet",
  },
  {
    tag: "Safari",
    title: "Kenya & Tanzania — Early Bird",
    description:
      "10 nights across the Masai Mara and Serengeti. Book early for the best camp availability.",
    price: "From $5,499/person",
    expires: "Book 6 months in advance",
    chip: "Group trip",
  },
]

export default function PromotionsPage() {
  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Current Offers
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Promotions
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed mb-16">
            These deals move fast. If something catches your eye, reach out to
            Cameron before it&apos;s <span className="font-display italic font-medium text-[var(--color-sky)]">gone</span>.
          </p>
        </div>
      </div>

      {/* Promotions grid */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md card-lift bg-white/80 backdrop-blur-sm p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sunset)] bg-[var(--color-sunset)]/10 px-3 py-1 rounded-full mb-4">
                    {promo.tag}
                  </span>
                  <h2 className="font-body text-xl font-bold tracking-tight text-[var(--color-ink)] mb-4">
                    {promo.title}
                  </h2>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                    {promo.description}
                  </p>
                </div>
                <div>
                  <div className="border-t border-[var(--color-sky-200)]/30 pt-6 mb-6">
                    <p className="font-body text-2xl font-bold text-[var(--color-ink)] mb-1">
                      {promo.price}
                    </p>
                    <p className="font-body text-xs text-[var(--color-sky)] tracking-wide">
                      {promo.expires}
                    </p>
                  </div>
                  <Link
                    href={`/contact?destination=${encodeURIComponent(promo.title)}&type=Resort`}
                    className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body block text-center"
                  >
                    Claim This Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
