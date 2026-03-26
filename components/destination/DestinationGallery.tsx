"use client"

import { useEffect, useState } from "react"

type Image = {
  id: string | number
  url: string
  alt: string
  photographer: string
}

type Props = {
  searchQuery: string
}

export default function DestinationGallery({ searchQuery }: Props) {
  const [images, setImages] = useState<Image[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/images?query=${encodeURIComponent(searchQuery)}&count=6`)
      .then((res) => res.json())
      .then((data) => {
        if (data.images) {
          setImages(data.images.slice(1)) // skip first — used in hero
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [searchQuery])

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-[#D8E8F8] animate-pulse"
              style={{ height: i === 0 ? "400px" : "280px" }}
            />
          ))}
        </div>
      </section>
    )
  }

  if (!images.length) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
        Gallery
      </p>
      <h2
        className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-12"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        See It For Yourself
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`overflow-hidden ${index === 0 ? "col-span-2 md:col-span-2" : ""}`}
            style={{ height: index === 0 ? "400px" : "280px" }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}