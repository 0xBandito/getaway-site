import Image from "next/image"
import { getGalleryForSlug } from "@/lib/images"

type Props = {
  slug: string
}

export default function DestinationGallery({ slug }: Props) {
  const images = getGalleryForSlug(slug)

  if (!images.length) return null

  return (
    <section className="bg-cream-gradient py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
          Gallery
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12">
          See It For Yourself
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-xl border border-[var(--color-sky-200)] card-lift relative ${
                index === 0 ? "col-span-2 md:col-span-2" : ""
              }`}
              style={{ height: index === 0 ? "380px" : "240px" }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="img-overlay absolute inset-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
