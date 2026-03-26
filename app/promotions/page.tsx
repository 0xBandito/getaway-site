import Link from "next/link"

export const metadata = {
  title: "Promotions | Getaway",
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
    title: "Cancún All-Inclusive Package",
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
    <section className="min-h-screen bg-[#F0F6FF]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Current Offers
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Promotions
        </h1>
        <p
          className="text-lg text-[#5B7FA6] max-w-2xl mb-16"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          These deals move fast. If something catches your eye, reach out to
          Cameron before it's gone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white border border-[#D8E8F8] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs tracking-widest uppercase text-[#4A90D9] bg-[#F0F6FF] px-3 py-1 mb-4">
                  {promo.tag}
                </span>
                <h2
                  className="text-2xl font-light text-[#1C3F6E] mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {promo.title}
                </h2>
                <p
                  className="text-sm text-[#5B7FA6] leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {promo.description}
                </p>
              </div>
              <div>
                <div className="border-t border-[#D8E8F8] pt-6 mb-6">
                  <p
                    className="text-2xl font-light text-[#1C3F6E] mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {promo.price}
                  </p>
                  <p
                    className="text-xs text-[#4A90D9] tracking-wide"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {promo.expires}
                  </p>
                </div>
                <Link
                  href={`/contact?trip=${encodeURIComponent(promo.chip)}`}
                  className="block text-center px-6 py-3 bg-[#4A90D9] text-white text-xs tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
                >
                  Claim This Deal
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
