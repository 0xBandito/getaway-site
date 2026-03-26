"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Destination } from "@/lib/destinations"

type Props = {
  destinations: Destination[]
}

export default function FeaturedDestinations({ destinations }: Props) {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Popular Right Now
        </p>
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-4xl md:text-5xl font-light text-[#1C3F6E]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Top Destinations
          </h2>
          <Link
            href="/destinations"
            className="text-sm tracking-widest uppercase text-[#4A90D9] hover:text-[#3a7bc8] transition-colors duration-200 hidden md:block"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <FeaturedCard key={destination.slug} destination={destination} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/destinations"
            className="text-sm tracking-widest uppercase text-[#4A90D9]"
          >
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ destination }: { destination: Destination }) {
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
        className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#D8E8F8] mb-4 shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1"
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
          <h3
            className="text-2xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {destination.name}
          </h3>
          <p
            className="text-xs tracking-[0.2em] uppercase text-white/50 mt-1 group-hover:text-white/70 transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {destination.continent}
          </p>
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