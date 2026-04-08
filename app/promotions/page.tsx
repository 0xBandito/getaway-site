import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Promotions | Travel With Cameron",
  description:
    "Current travel deals and promotions. Limited time offers on cruises, all-inclusive resorts, and international trips.",
}

const promotions = [
  {
    tag: "Sale",
    title: "Easter Travel Deals",
    destination: "Various Destinations",
    description:
      "Fresh season of travel is here! Deals on sunny beach getaways, fall escapes, holiday trips, and cruise adventures. Packages available through February 2027 & Spring Break cruises available!",
    price: "Book Now & Save",
    dates: "Limited Time",
    image: "/images/promotions/easter_travel.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Sale",
    title: "Spring Savings Event",
    destination: "Hotel Stays",
    description:
      "Hop to it! Up to $200 off hotel stays. Up to $150 off 4-5 night stays, up to $100 off 3 night stays. Valid for most destinations.",
    price: "Up to $200 Off",
    dates: "Book April 3-6, Travel by Dec 31, 2026",
    image: "/images/promotions/resort_pool.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Sale",
    title: "MSC Cruises Spring Savings",
    destination: "MSC Cruises",
    description:
      "Up to 30% off MSC cruises plus kids sail free on select sailings. Limited-time offer — restrictions apply.",
    price: "Up to 30% Off",
    dates: "Limited Time",
    image: "/images/promotions/cruise_ship_ocean.jpg",
    chip: "Cruise",
  },
  {
    tag: "Theme Park",
    title: "Universal Epic Universe",
    destination: "Universal Epic Universe, Orlando",
    description:
      "Experience Universal Epic Universe in Orlando, Florida. Non-stop flights and hotel accommodations included.",
    price: "From $650/person",
    dates: "June 14-17 & July 16-19, 2026",
    image: "/images/promotions/epic_universe.jpg",
    chip: "Theme park",
  },
  {
    tag: "Beach Getaway",
    title: "Jamaican Getaway",
    destination: "Jamaica",
    description:
      "Flights, 4-star all-inclusive resort, and airport transportation. Deposit: $225 per person.",
    price: "From $1,170/person",
    dates: "June 5-8, Aug 1-4, Sept 5-8, 2026",
    image: "/images/promotions/jamaica_resort.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Luxury",
    title: "The Luxury Escape - Dubai",
    destination: "Dubai",
    description:
      "Roundtrip flights from Atlanta and 4-star resort accommodations. Deposit: $300 per person.",
    price: "From $1,200/person",
    dates: "July 7-15 & Oct 4-11, 2026",
    image: "/images/promotions/dubai_luxury.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "Costa Rica Escape",
    destination: "Costa Rica",
    description:
      "Roundtrip flights, 4-star all-inclusive resort, and airport transfers. Deposit: $300 per person.",
    price: "From $1,200/person",
    dates: "Aug 18-22, Sept 12-16, Dec 5-8, 2026",
    image: "/images/promotions/costarica_adventure.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "4 Night Getaway in Belize",
    destination: "Belize",
    description:
      "Flights from ATL, 4-star resort, and airport transportation. Deposit: $300 per person.",
    price: "From $1,100/person",
    dates: "Sept 12-16 & Oct 21-25, 2026",
    image: "/images/promotions/belize.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "Puerto Rican Escape",
    destination: "San Juan, Puerto Rico",
    description:
      "Roundtrip flights and 4-star resort accommodations. No passport required! Deposit: $250 per person.",
    price: "From $750/person",
    dates: "Sept 15-18 & Nov 7-10, 2026",
    image: "/images/promotions/puertorico.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Beach Getaway",
    title: "Punta Cana Getaway",
    destination: "Punta Cana, Dominican Republic",
    description:
      "Non-stop flights from ATL, 4-star all-inclusive resort, and airport transportation included. Deposit: $225 per person.",
    price: "From $1,200/person",
    dates: "Oct 26-31 & Nov 27-30, 2026",
    image: "/images/promotions/puntacana_fall.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Holiday Special",
    title: "Labor Day Weekend Getaway",
    destination: "Cancun, Mexico",
    description:
      "Roundtrip flights, 4-star all-inclusive resort, and airport transportation included. Deposit: $300 per person.",
    price: "From $1,250/person",
    dates: "Sept 3-8 & Sept 3-6, 2026",
    image: "/images/promotions/labor_day_cancun.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Adventure",
    title: "The Asian Escape",
    destination: "Bangkok & Phuket, Thailand",
    description:
      "Roundtrip flights from ATL, 3 nights in Bangkok and 3 nights in Phuket. Packages start at $1,600 per person.",
    price: "From $1,600/person",
    dates: "Sept 16-27 & Oct 10-27, 2026",
    image: "/images/promotions/bangkok_phuket.jpg",
    chip: "Group trip",
  },
  {
    tag: "Family",
    title: "Hilton Tulum All-Inclusive",
    destination: "Tulum, Riviera Maya",
    description:
      "Kids & teens (17 and under) stay and eat free! Book an all-inclusive family stay at the Hilton Tulum Riviera Maya resort.",
    price: "Kids & Teens Free",
    dates: "Limited Time",
    image: "/images/promotions/tulum_resort.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Holiday Special",
    title: "Thanksgiving in Dubai",
    destination: "Dubai",
    description:
      "Round-trip flights, 4-star hotel accommodation, and daily breakfast included. Limited spots available.",
    price: "From $1,600/person",
    dates: "November 24 - December 1, 2026",
    image: "/images/promotions/dubai_thanksgiving.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Holiday Special",
    title: "Holidays at Disney",
    destination: "Disney World, Orlando",
    description:
      "Disney Resort (3 nights), 2 day park tickets, and Disney park transportation. Deposit: $100 per person.",
    price: "From $455/person",
    dates: "Nov 23-25 & Dec 6-8, 2026",
    image: "/images/promotions/disney.jpg",
    chip: "Theme park",
  },
  {
    tag: "Christmas",
    title: "Cancun Christmas",
    destination: "Cancun, Mexico",
    description:
      "Round-trip flights, all-inclusive beach resort, airport transfers, and all meals, drinks, and activities included.",
    price: "From $1,650/person",
    dates: "December 22-26, 2026",
    image: "/images/promotions/cancun.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Christmas",
    title: "Christmas in Punta Cana",
    destination: "Punta Cana, Dominican Republic",
    description:
      "Round-trip flights, all-inclusive resort, airport transfers, meals, drinks, and activities. Deposit: $300 per person.",
    price: "From $1,500/person",
    dates: "December 22-26, 2026",
    image: "/images/promotions/puntacana_xmas_resort.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Christmas",
    title: "Puerto Rico Christmas Getaway",
    destination: "Puerto Rico",
    description:
      "Escape to sunny Puerto Rico this Christmas. Round-trip flights and resort accommodations. No passport required!",
    price: "From $1,200/person",
    dates: "December 23-26, 2026",
    image: "/images/promotions/puertorico.jpg",
    chip: "All-inclusive resort",
  },
  {
    tag: "Cruise",
    title: "Holiday Cruise Getaway - Bahamas",
    destination: "Bahamas Cruise",
    description:
      "4 day Bahamas cruise departing from Miami. Stops at Half Moon Cay and Celebration Key. Deposit: $50 per person.",
    price: "From $615/person",
    dates: "December 24-28, 2026",
    image: "/images/promotions/bahamas_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Carnival Firenze & Miracle Sailings",
    destination: "Caribbean Cruise",
    description:
      "2027/2028 sailings now unlocked. Carnival Firenze to New York and Port Canaveral, Carnival Miracle to Baltimore. Unforgettable Caribbean journeys.",
    price: "Search for pricing",
    dates: "2027/2028 Sailings",
    image: "/images/promotions/carnival_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Carnival Cruise Adventure",
    destination: "Bahamas & Celebration Key",
    description:
      "Budget-friendly Bahamas sailing with multiple dates and ports available. Two incredible stops, one unforgettable vacation.",
    price: "From $250/person",
    dates: "Aug - Nov 2026",
    image: "/images/promotions/carnival_cruise.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "MLK Weekend Getaway",
    destination: "Key West & Bimini - Virgin Voyages",
    description:
      "Virgin Voyages adults-only (18+) cruise to Key West and Bimini. Luxury, modern, and unapologetic. Deposits from $150.",
    price: "From $150 deposit",
    dates: "January 14-18, 2027",
    image: "/images/promotions/mlk_cruise_sunset.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Spring Break at Sea",
    destination: "Icon of the Seas, Miami",
    description:
      "The ultimate spring break on Royal Caribbean's Icon of the Seas departing from Miami. Kids sail free — pay only taxes & fees!",
    price: "From $1,400/person",
    dates: "April 3-10 & April 10-17, 2027",
    image: "/images/promotions/cruise_sunset.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Halloween Cruise",
    destination: "Utopia of the Seas",
    description:
      "Spooky fun meets sunny skies on Royal Caribbean's Utopia of the Seas! Costumes, cocktails, and Caribbean good times. Deposits from $100.",
    price: "From $600/person",
    dates: "Oct 30 - Nov 2, 2026",
    image: "/images/promotions/halloween_ship.jpg",
    chip: "Cruise",
  },
  {
    tag: "Cruise",
    title: "Holiday Cruise - Christmas & New Year's",
    destination: "Holiday Cruise from Orlando",
    description:
      "Choose your holiday adventure — Christmas Cruise (Dec 24-28) or New Year's Cruise (Dec 31-Jan 4). Departs from Orlando, Florida.",
    price: "From $675/person",
    dates: "Dec 2026 - Jan 2027",
    image: "/images/promotions/holiday_cruise_clean.jpg",
    chip: "Cruise",
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
                className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md card-lift bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sunset)] bg-[var(--color-sunset)]/10 px-3 py-1 rounded-full mb-4">
                      {promo.tag}
                    </span>
                    <h2 className="font-body text-xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
                      {promo.title}
                    </h2>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-2">
                      {promo.description}
                    </p>
                    <p className="font-body text-xs text-[var(--color-sky)] tracking-wide mb-6">
                      {promo.dates}
                    </p>
                  </div>
                  <div>
                    <div className="border-t border-[var(--color-sky-200)]/30 pt-6 mb-6">
                      <p className="font-body text-2xl font-bold text-[var(--color-ink)] mb-1">
                        {promo.price}
                      </p>
                    </div>
                    <Link
                      href={`/contact?destination=${encodeURIComponent(promo.destination)}&type=${encodeURIComponent(
                        promo.chip === "Cruise" ? "Cruise" : promo.chip === "Theme park" ? "Theme Park" : "All-Inclusive Resort"
                      )}`}
                      className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body block text-center"
                    >
                      Claim This Deal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
