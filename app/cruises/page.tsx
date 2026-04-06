import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Cruises | Travel With Cameron",
  description:
    "Cruise planning made personal. Caribbean sailings, Mediterranean voyages, and everything in between.",
}

const cruises = [
  {
    title: "Holiday Cruise Getaway - Bahamas",
    description:
      "Christmas on the water! 4 day Bahamas cruise departing from Miami, Florida. Stops at Half Moon Cay and Celebration Key.",
    dates: "December 24-28, 2026",
    deposit: "$50 per person",
    pricing: [
      { cabin: "Interior Room", price: "$615/person" },
      { cabin: "Oceanview Room", price: "$715/person" },
      { cabin: "Balcony Room", price: "$875/person" },
    ],
    image: "/images/promotions/bahamas_cruise.jpg",
    tag: "Holiday Special",
  },
  {
    title: "Carnival Firenze & Miracle Sailings",
    description:
      "2027/2028 sailings now unlocked! Carnival Firenze brings Fun Italian Style to New York and Port Canaveral, while Carnival Miracle will move to Baltimore. Each offering unforgettable journeys to the Caribbean.",
    dates: "2027/2028 Sailings",
    deposit: "Contact for details",
    pricing: [],
    image: "/images/promotions/carnival_cruise.jpg",
    tag: "New Sailings",
  },
]

export default function CruisesPage() {
  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Set Sail
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Cruises
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
            One price. Multiple destinations. Zero repacking. Cameron will
            find the right ship, the right itinerary, and the right cabin
            for <span className="font-display italic font-medium text-[var(--color-sky)]">you</span>.
          </p>
        </div>
      </div>

      {/* Why cruise */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Why Cruise
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-12">
            Everything included. <span className="font-display italic font-medium text-[var(--color-sky)]">Nothing</span> to figure out.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "One price covers everything",
                body: "Your room, meals, entertainment, and transportation between destinations, all in one booking.",
              },
              {
                title: "Multiple countries, one trip",
                body: "Wake up in a different port every day. No flights between cities, no repacking, no logistics stress.",
              },
              {
                title: "Something for everyone",
                body: "From budget-friendly Caribbean sailings to luxury Mediterranean voyages, there's a cruise for every traveler.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md card-lift p-6">
                <span className="text-[var(--color-sky)] mt-1 text-lg">→</span>
                <p className="font-body font-semibold text-[var(--color-ink)] mb-2 mt-3">
                  {item.title}
                </p>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Cruise Deals */}
      <div className="bg-cloud-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Current Deals
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-12">
            Available <span className="font-display italic font-medium text-[var(--color-sky)]">Sailings</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cruises.map((cruise, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md card-lift bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={cruise.image}
                    alt={cruise.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-white bg-[var(--color-sunset)] px-3 py-1 rounded-full">
                      {cruise.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-body text-2xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
                      {cruise.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                      {cruise.description}
                    </p>
                    <p className="font-body text-xs font-semibold text-[var(--color-sky)] tracking-wide mb-2">
                      {cruise.dates}
                    </p>
                    <p className="font-body text-xs text-[var(--color-muted)] mb-6">
                      Deposit: {cruise.deposit}
                    </p>

                    {cruise.pricing.length > 0 && (
                      <div className="border-t border-[var(--color-sky-200)]/30 pt-4 mb-6 space-y-2">
                        {cruise.pricing.map((tier) => (
                          <div key={tier.cabin} className="flex justify-between items-center">
                            <span className="font-body text-sm text-[var(--color-muted)]">
                              {tier.cabin}
                            </span>
                            <span className="font-body text-sm font-bold text-[var(--color-ink)]">
                              {tier.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/contact?destination=${encodeURIComponent(cruise.title)}&type=Cruise`}
                    className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body block text-center"
                  >
                    Book This Cruise
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[var(--color-ink)] py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-6">
            Ready To Sail
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Let Cameron find your <span className="font-display italic font-medium text-[var(--color-sky)]">perfect cruise</span>.
          </h2>
          <p className="font-body text-[var(--color-muted)] mb-10 leading-relaxed">
            Tell Cameron your budget, travel dates, and what kind of
            experience you&apos;re looking for. Hear back within 24-48 hours.
          </p>
          <Link
            href="/contact?type=Cruise"
            className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block"
          >
            Plan My Cruise
          </Link>
        </div>
      </div>
    </section>
  )
}
