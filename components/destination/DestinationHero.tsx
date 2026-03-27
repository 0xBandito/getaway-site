"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Props = {
  name: string
  tagline: string
  searchQuery: string
  contactChips: string[]
}

export default function DestinationHero({
  name,
  tagline,
  searchQuery,
  contactChips,
}: Props) {
  const [heroImage, setHeroImage] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/images?query=${encodeURIComponent(searchQuery)}&count=1`)
      .then((res) => res.json())
      .then((data) => {
        if (data.images?.[0]) {
          setHeroImage(data.images[0].url)
        }
      })
      .catch(console.error)
  }, [searchQuery])

  return (
    <section className="relative h-[90vh] flex items-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: heroImage
            ? `url(${heroImage})`
            : undefined,
          backgroundColor: heroImage ? undefined : "#1C3F6E",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="text-xs tracking-widest uppercase text-white/60 mb-4">
          Destination
        </p>
        <h1
          className="text-6xl md:text-8xl font-light text-white mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {name}
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {tagline}
        </p>
        <Link
          href={`/contact?destination=${encodeURIComponent(name)}`}
          className="inline-block px-8 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
        >
          Plan This Trip
        </Link>
      </div>
    </section>
  )
}