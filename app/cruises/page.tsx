import Link from "next/link"
import ImageCard from "@/components/ui/ImageCard"

export const metadata = {
  title: "Cruises | Getaway",
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
      "A step up in luxury — modern ships, award-winning cuisine, and a more refined atmosphere.",
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
    <section className="min-h-screen bg-[#F0F6FF]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Set Sail
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Cruises
        </h1>
        <p
          className="text-lg text-[#5B7FA6] max-w-2xl"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          One price. Multiple destinations. Zero repacking. Cameron will
          find the right ship, the right itinerary, and the right cabin
          for you.
        </p>
      </div>

      {/* Why cruise */}
      <div className="bg-[#FAF7F2] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
            Why Cruise
          </p>
          <h2
            className="text-4xl font-light text-[#1C3F6E] mb-12"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Everything included. Nothing to figure out.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "One price covers everything",
                body: "Your room, meals, entertainment, and transportation between destinations — all in one booking.",
              },
              {
                title: "Multiple countries, one trip",
                body: "Wake up in a different port every day. No flights between cities, no repacking, no logistics stress.",
              },
              {
                title: "Something for everyone",
                body: "From budget-friendly Caribbean sailings to luxury Mediterranean voyages — there's a cruise for every traveler.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-[#4A90D9] mt-1 text-lg">→</span>
                <div>
                  <p
                    className="font-medium text-[#1C3F6E] mb-2"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm text-[#5B7FA6] leading-relaxed"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured itineraries with images */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Popular Itineraries
        </p>
        <h2
          className="text-4xl font-light text-[#1C3F6E] mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Where Do You Want To Sail?
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

      {/* Cruise lines with images */}
      <div className="bg-[#FAF7F2] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
            Cruise Lines
          </p>
          <h2
            className="text-4xl font-light text-[#1C3F6E] mb-12"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Which Line Is Right For You?
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
      <div className="bg-[#1C3F6E] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-6">
            Ready To Sail
          </p>
          <h2
            className="text-4xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let Cameron find your perfect cruise.
          </h2>
          <p
            className="text-[#8BACC8] mb-10"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Tell Cameron your budget, travel dates, and what kind of
            experience you're looking for. Hear back within 24–48 hours.
          </p>
          <Link
            href="/contact?type=Cruise"
            className="inline-block px-10 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
          >
            Plan My Cruise
          </Link>
        </div>
      </div>
    </section>
  )
}