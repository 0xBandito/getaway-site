"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

type Props = {
  searchQuery: string
  title: string
  subtitle: string
  tag?: string
  price: string
  contactUrl: string
  index?: number
}

export default function ImageCard({
  searchQuery,
  title,
  subtitle,
  tag,
  price,
  contactUrl,
  index = 0,
}: Props) {
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
    const delay = index * 300
    const timer = setTimeout(() => {
      fetch(`/api/images?query=${encodeURIComponent(searchQuery)}&count=1`)
        .then((res) => res.json())
        .then((data) => {
          if (data.images?.[0]) setImage(data.images[0].thumb)
        })
        .catch(console.error)
    }, delay)
    return () => clearTimeout(timer)
  }, [inView, searchQuery, index])

  return (
    <div
      ref={ref}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[16/9] bg-[#D8E8F8]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#87B8E8]/40 to-[#1C3F6E]/60" />
        {image && (
          <img
            src={image}
            alt={title}
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className="text-xs tracking-[0.15em] uppercase bg-[#4A90D9] text-white px-3 py-1.5 rounded-full"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3
            className="text-2xl font-light text-[#1C3F6E] mb-2"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {title}
          </h3>
          <p
            className="text-xs text-[#4A90D9] tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D8E8F8]">
          <p
            className="text-xl font-light text-[#1C3F6E]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {price}
          </p>
          <Link
            href={contactUrl}
            className="px-5 py-2.5 bg-[#4A90D9] text-white text-xs tracking-[0.15em] uppercase rounded-full hover:bg-[#3a7bc8] transition-colors duration-200"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </div>
  )
}