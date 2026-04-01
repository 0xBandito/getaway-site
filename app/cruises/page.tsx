import Link from "next/link"
import ImageCard from "@/components/ui/ImageCard"

export const metadata = {
  title: "Cruises | Travel With Cameron",
  description:
    "Cruise planning made personal. Caribbean sailings, Mediterranean voyages, and everything in between.",
}

const cruiseLines = [
  {
    name: "Royal Caribbean",
    description:
      "The world's largest cruise ships with onboard thrills, world-class dining, and Caribbean and Mediterranean itineraries.",
    bestFor: "Families, first-timers, adventure seekers",
    priceRange: "From $599/person",
    searchQuery: "royal caribbean cruise ship ocean",
  },
  {
    name: "Carnival",
    description:
      "Fun, affordable, and packed with entertainment. The most popular cruise line in the world for a reason.",
    bestFor: "Groups, budget-conscious travelers, party atmosphere",
    priceRange: "From $399/person",
    searchQuery: "carnival cruise ship deck pool",
  },
  {
    name: "Norwegian",
    description:
      "Freestyle cruising with no set dining times, specialty restaurants, and some of the best entertainment at sea.",
    bestFor: "Couples, foodies, travelers who want flexibility",
    priceRange: "From $699/person",
    searchQuery: "norwegian cruise ship luxury ocean",
  },
  {
    name: "Celebrity Cruises",
    description:
      "A step up in luxury with modern ships, award-winning cuisine, and a more refined atmosphere.",
    bestFor: "Couples, luxury travelers, wine and food lovers",
    priceRange: "From $899/person",
    searchQuery: "luxury cruise ship elegant ocean",
  },
  {
    name: "MSC Cruises",
    description:
      "European elegance on the water. MSC offers some of the best Mediterranean itineraries and stunning ship design.",
    bestFor: "European itineraries, international travelers, couples",
    priceRange: "From $549/person",
    searchQuery: "mediterranean cruise ship sailing",
  },
  {
    name: "Sandals at Sea",
    description:
      "Adults-only luxury cruising from the brand behind the world's best all-inclusive resorts.",
    bestFor: "Couples, honeymoons, adults-only experience",
    priceRange: "From $1,299/person",
    searchQuery: "luxury adults only cruise caribbean",
  },
]

const itineraries = [
  {
    title: "7-Night Bahamas & Caribbean",
    ports: ["Miami", "Nassau", "CocoCay", "Key West"],
    duration: "7 nights",
    price: "From $599/person",
    chip: "Caribbean cruise",
    searchQuery: "bahamas caribbean beach turquoise water",
  },
  {
    title: "10-Night Western Caribbean",
    ports: ["Galveston", "Cozumel", "Roatán", "Belize City", "Costa Maya"],
    duration: "10 nights",
    price: "From $799/person",
    chip: "Caribbean cruise",
    searchQuery: "caribbean turquoise ocean tropical",
  },
  {
    title: "12-Night Mediterranean",
    ports: ["Barcelona", "Rome", "Athens", "Dubrovnik", "Venice"],
    duration: "12 nights",
    price: "From $1,499/person",
    chip: "Caribbean cruise",
    searchQuery: "mediterranean sea coast europe travel",
  },
  {
    title: "14-Night Hawaii & Pacific",
    ports: ["Los Angeles", "Maui", "Oahu", "Kauai", "Hilo"],
    duration: "14 nights",
    price: "From $1,299/person",
    chip: "Caribbean cruise",
    searchQuery: "hawaii ocean tropical island cruise",
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

      {/* Featured itineraries with images */}
      <div className="bg-cloud-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Popular Itineraries
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-12">
            Where Do You Want To <span className="font-display italic font-medium text-[var(--color-sky)]">Sail</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itineraries.map((itinerary, index) => (
              <ImageCard
                key={index}
                index={index}
                searchQuery={itinerary.searchQuery}
                title={itinerary.title}
                subtitle={itinerary.ports.join(" → ")}
                tag={itinerary.duration}
                price={itinerary.price}
                contactUrl={`/contact?destination=${encodeURIComponent(itinerary.title)}&type=Cruise`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cruise lines with images */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Cruise Lines
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-12">
            Which Line Is <span className="font-display italic font-medium text-[var(--color-sky)]">Right</span> For You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cruiseLines.map((line, index) => (
              <ImageCard
                key={line.name}
                index={index}
                searchQuery={line.searchQuery}
                title={line.name}
                subtitle={`Best for: ${line.bestFor}`}
                price={line.priceRange}
                contactUrl={`/contact?destination=${encodeURIComponent(line.name)}&type=Cruise`}
              />
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
            experience you&apos;re looking for. Hear back within 24–48 hours.
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
