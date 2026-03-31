/**
 * Local image mapping for all destinations.
 * Images are stored in public/images/destinations/{slug}/
 * Each destination has: hero.jpg + gallery-1.jpg through gallery-5.jpg
 */

export type DestinationImages = {
  hero: string
  gallery: string[]
}

const DEST_BASE = "/images/destinations"

function getDestImages(slug: string): DestinationImages {
  return {
    hero: `${DEST_BASE}/${slug}/hero.jpg`,
    gallery: [
      `${DEST_BASE}/${slug}/gallery-1.jpg`,
      `${DEST_BASE}/${slug}/gallery-2.jpg`,
      `${DEST_BASE}/${slug}/gallery-3.jpg`,
      `${DEST_BASE}/${slug}/gallery-4.jpg`,
      `${DEST_BASE}/${slug}/gallery-5.jpg`,
    ],
  }
}

export const destinationImages: Record<string, DestinationImages> = {
  caribbean: getDestImages("caribbean"),
  mexico: getDestImages("mexico"),
  europe: getDestImages("europe"),
  mediterranean: getDestImages("mediterranean"),
  hawaii: getDestImages("hawaii"),
  maldives: getDestImages("maldives"),
  "southeast-asia": getDestImages("southeast-asia"),
  africa: getDestImages("africa"),
  "central-america": getDestImages("central-america"),
  "south-america": getDestImages("south-america"),
  cruises: getDestImages("cruises"),
  "all-inclusive": getDestImages("all-inclusive"),
}

export function getHeroImageForSlug(slug: string): string {
  return destinationImages[slug]?.hero ?? `${DEST_BASE}/caribbean/hero.jpg`
}

export function getGalleryForSlug(slug: string): string[] {
  return destinationImages[slug]?.gallery ?? []
}

/** Featured destinations for the homepage — first 6 */
export const featuredSlugs = [
  "caribbean",
  "mexico",
  "europe",
  "maldives",
  "hawaii",
  "mediterranean",
]
