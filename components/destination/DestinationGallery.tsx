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
        if (data.images) setImages(data.images.slice(1))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [searchQuery])

  if (loading) {
    return (
      <section className="bg-[#F0F6FF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6 justify-center flex-wrap">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-[#D8E8F8] animate-pulse"
                style={{
                  width: i === 0 ? "220px" : "160px",
                  height: i === 0 ? "280px" : "200px",
                  borderRadius: "110px",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!images.length) return null

  const sizes = [
    { w: 220, h: 280, r: 110 },
    { w: 160, h: 200, r: 80 },
    { w: 180, h: 240, r: 90 },
    { w: 160, h: 200, r: 80 },
    { w: 200, h: 260, r: 100 },
  ]

  return (
  <section className="bg-[#FAF7F2] py-20">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
        Gallery
      </p>
      <h2
        className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-12"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        See It For Yourself
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`group overflow-hidden rounded-2xl border border-[#D8E8F8] shadow-sm hover:shadow-md transition-shadow duration-300 ${
              index === 0 ? "col-span-2 md:col-span-2" : ""
            }`}
            style={{ height: index === 0 ? "380px" : "240px" }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}