import Image from "next/image"
import Link from "next/link"
import { Destination } from "@/lib/destinations"
import { getHeroImageForSlug } from "@/lib/images"

type Props = {
  destinations: Destination[]
}

const continents = [
  "North America",
  "Europe",
  "Asia",
  "Africa",
  "South America",
  "Global",
]

export default function DestinationsClient({ destinations }: Props) {
  return (
    <div>
      {continents.map((continent) => {
        const group = destinations.filter((d) => d.continent === continent)
        if (!group.length) return null

        return (
          <div key={continent} className="max-w-7xl mx-auto px-6 pb-20">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-8 border-t border-[var(--color-sky-200)] pt-8">
              {continent}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.map((destination) => (
                <DestinationCard
                  key={destination.slug}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function DestinationCard({ destination }: { destination: Destination }) {
  const heroImage = getHeroImageForSlug(destination.slug)

  return (
    <Link href={`/destinations/${destination.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl aspect-[4/3] mb-4 relative bg-[var(--color-sky-200)] card-lift group-hover:-translate-y-1 transition-transform duration-500">
        <Image
          src={heroImage}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="img-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-1">
            {destination.continent}
          </p>
          <h2 className="font-display text-3xl font-light text-white group-hover:text-[#e8d5c0] transition-colors duration-300">
            {destination.name}
          </h2>
          <p className="font-body text-xs text-white/0 group-hover:text-white/70 transition-opacity duration-300 mt-2 translate-y-2 group-hover:translate-y-0">
            {destination.tagline}
          </p>
        </div>
      </div>
    </Link>
  )
}
