const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

export type UnsplashImage = {
  id: string
  url: string
  thumb: string
  alt: string
  photographer: string
  photographerUrl: string
}

export async function fetchUnsplashImages(
  query: string,
  count: number = 9
): Promise<UnsplashImage[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error("Missing UNSPLASH_ACCESS_KEY")
  }

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: 86400 }, // cache for 24 hours
    }
  )

  if (!res.ok) {
    throw new Error(`Unsplash API error: ${res.status}`)
  }

  const data = await res.json()

  return data.results.map((photo: any) => ({
    id: photo.id,
    url: photo.urls.full,
    thumb: photo.urls.small,
    alt: photo.alt_description || query,
    photographer: photo.user.name,
    photographerUrl: photo.user.links.html,
  }))
}