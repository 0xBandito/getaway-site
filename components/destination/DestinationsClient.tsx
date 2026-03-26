"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Destination } from "@/lib/destinations"

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
            <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-8 border-t border-[#D8E8F8] pt-8">
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
  const [image, setImage] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    fetch(
      `/api/images?query=${encodeURIComponent(destination.searchQuery)}&count=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.images?.[0]) setImage(data.images[0].thumb)
      })
      .catch(console.error)
  }, [inView, destination.searchQuery])

  return (
    <Link href={`/destinations/${destination.slug}`} className="group block">
      <div
        ref={ref}
        className="overflow-hidden rounded-2xl aspect-[4/3] mb-4 relative bg-[#D8E8F8] shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#87B8E8]/40 to-[#1C3F6E]/60" />
        {image && (
          <img
            src={image}
            alt={destination.name}
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {destination.continent}
          </p>
          <h2
            className="text-3xl font-light text-white group-hover:text-[#e8d5c0] transition-colors duration-300"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {destination.name}
          </h2>
          <p
            className="text-xs text-white/0 group-hover:text-white/70 transition-all duration-300 mt-2 translate-y-2 group-hover:translate-y-0"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {destination.tagline}
          </p>
        </div>
      </div>
    </Link>
  )
}