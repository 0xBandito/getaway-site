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
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-lg transition-all duration-500 card-lift"
    >
      <div className="relative overflow-hidden aspect-[16/9] bg-[var(--color-sky-100)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sky-300)]/30 to-[var(--color-ink)]/40" />
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
            <span className="font-body text-xs tracking-widest uppercase bg-[var(--color-sunset)] text-white px-3 py-1.5 rounded-full font-medium">
              {tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--color-ink)] mb-2">
            {title}
          </h3>
          <p className="font-body text-xs font-medium text-[var(--color-sky)] tracking-widest uppercase mb-4">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-sky-200)]/30">
          <p className="font-display text-xl font-semibold text-[var(--color-ink)]">
            {price}
          </p>
          <Link
            href={contactUrl}
            className="btn-sky px-5 py-2.5 rounded-full text-xs font-semibold font-body tracking-wide"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
