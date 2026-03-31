import Image from "next/image"
import Link from "next/link"
import { getHeroImageForSlug } from "@/lib/images"

type Props = {
  name: string
  tagline: string
  slug: string
  contactChips: string[]
}

export default function DestinationHero({
  name,
  tagline,
  slug,
  contactChips,
}: Props) {
  const heroImage = getHeroImageForSlug(slug)

  return (
    <section className="relative h-[90vh] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
          Destination
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-light text-white mb-4">
          {name}
        </h1>
        <p className="font-body text-lg md:text-xl leading-[1.7] text-white/80 mb-8 max-w-xl">
          {tagline}
        </p>
        <Link
          href={`/contact?destination=${encodeURIComponent(name)}`}
          className="btn-sky rounded-full inline-block px-8 py-4 text-sm tracking-widest uppercase"
        >
          Plan This Trip
        </Link>
      </div>
    </section>
  )
}
