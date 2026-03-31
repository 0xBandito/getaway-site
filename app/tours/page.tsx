import Link from "next/link"
import ImageCard from "@/components/ui/ImageCard"

export const metadata = {
  title: "Tours | Travel With Cameron",
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
    <section className="min-h-screen">
      {/* Header */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Guided Experiences
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Tours
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Curated multi-destination experiences built around the best each
            region has to offer. Every tour is customizable — Cameron will
            adjust any itinerary to fit your <span className="font-display italic font-medium text-[var(--color-sky)]">travel style</span> and budget.
          </p>
        </div>
      </div>

      {/* Tours grid */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
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
      </div>

      {/* CTA */}
      <div className="bg-[var(--color-ink)] py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-6">
            Don&apos;t See What You&apos;re Looking For?
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Every tour is <span className="font-display italic font-medium text-[var(--color-sky)]">customizable</span>.
          </h2>
          <p className="font-body text-[var(--color-muted)] mb-10 leading-relaxed">
            Tell Cameron where you want to go and what kind of experience
            you&apos;re after. Every itinerary can be adjusted, extended, or
            built from scratch.
          </p>
          <Link
            href="/contact?type=Tour"
            className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block"
          >
            Build My Tour
          </Link>
        </div>
      </div>
    </section>
  )
}
