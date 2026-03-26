const PEXELS_API_KEY = process.env.PEXELS_API_KEY

export type PexelsImage = {
  id: number
  url: string
  thumb: string
  alt: string
  photographer: string
  photographerUrl: string
}

export async function fetchPexelsImages(
  query: string,
  count: number = 9
): Promise<PexelsImage[]> {
  if (!PEXELS_API_KEY) {
    throw new Error("Missing PEXELS_API_KEY")
  }

  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      next: { revalidate: 86400 }, // cache for 24 hours
    }
  )

  if (!res.ok) {
    throw new Error(`Pexels API error: ${res.status}`)
  }

  const data = await res.json()

  return data.photos.map((photo: any) => ({
    id: photo.id,
    url: photo.src.large,
    thumb: photo.src.medium,
    alt: photo.alt || query,
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
  }))
}