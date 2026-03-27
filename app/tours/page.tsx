import Link from "next/link"
import ImageCard from "@/components/ui/ImageCard"

export const metadata = {
  title: "Tours | Getaway",
  description:
    "Guided tours and curated travel experiences planned by Cameron.",
}

const tours = [
  {
    title: "10-Night Western Europe",
    destinations: ["Paris", "Rome", "Barcelona"],
    description:
      "Three of Europe's greatest cities in one seamless trip.",
    duration: "10 nights",
    price: "From $2,499/person",
    tag: "Most Popular",
    chip: "Europe tour",
    searchQuery: "europe travel colosseum rome city",
  },
  {
    title: "Greek Island Hopper",
    destinations: ["Athens", "Santorini", "Mykonos"],
    description:
      "Ferry transfers, boutique hotels, and curated experiences across three iconic Greek islands.",
    duration: "8 nights",
    price: "From $2,199/person",
    tag: "Romantic",
    chip: "Honeymoon",
    searchQuery: "santorini greece island blue dome",
  },
  {
    title: "Kenya & Tanzania Safari",
    destinations: ["Nairobi", "Masai Mara", "Serengeti"],
    description:
      "Game drives, luxury tented camps, and the Great Migration.",
    duration: "10 nights",
    price: "From $5,999/person",
    tag: "Bucket List",
    chip: "Group trip",
    searchQuery: "kenya tanzania safari savanna wildlife",
  },
  {
    title: "Peru & Machu Picchu",
    destinations: ["Lima", "Sacred Valley", "Machu Picchu"],
    description:
      "Ancient ruins, Andean culture, and landscapes that stop you cold.",
    duration: "9 nights",
    price: "From $2,499/person",
    tag: "Adventure",
    chip: "Group trip",
    searchQuery: "machu picchu peru andes mountains",
  },
  {
    title: "Southeast Asia Explorer",
    destinations: ["Bangkok", "Chiang Mai", "Bali"],
    description:
      "Street food, ancient temples, rice terraces, and infinity pools.",
    duration: "12 nights",
    price: "From $2,199/person",
    tag: "Immersive",
    chip: "Group trip",
    searchQuery: "bali thailand temple southeast asia",
  },
  {
    title: "South Africa Discovery",
    destinations: ["Cape Town", "Winelands", "Kruger"],
    description:
      "World-class food, stunning scenery, and incredible wildlife.",
    duration: "10 nights",
    price: "From $3,499/person",
    tag: "Wildlife",
    chip: "Group trip",
    searchQuery: "cape town south africa safari",
  },
]

export default function ToursPage() {
  return (
    <section className="min-h-screen bg-[#F0F6FF]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Guided Experiences
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Tours
        </h1>
        <p
          className="text-lg text-[#5B7FA6] max-w-2xl"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Curated multi-destination experiences built around the best each
          region has to offer. Every tour is customizable — Cameron will
          adjust any itinerary to fit your travel style and budget.
        </p>
      </div>

      {/* Tours grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <ImageCard
              key={index}
              index={index}
              searchQuery={tour.searchQuery}
              title={tour.title}
              subtitle={tour.destinations.join(" → ")}
              tag={tour.tag}
              price={tour.price}
              contactUrl={`/contact?destination=${encodeURIComponent(tour.title)}&type=Tour`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1C3F6E] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-6">
            Don't See What You're Looking For?
          </p>
          <h2
            className="text-4xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every tour is customizable.
          </h2>
          <p
            className="text-[#8BACC8] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Tell Cameron where you want to go and what kind of experience
            you're after. Every itinerary can be adjusted, extended, or
            built from scratch.
          </p>
          <Link
            href="/contact?type=Tour"
            className="inline-block px-10 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
          >
            Build My Tour
          </Link>
        </div>
      </div>
    </section>
  )
}