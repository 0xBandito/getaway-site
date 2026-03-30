export async function getHeroImage(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=airplane+window+wing+sky+clouds&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        next: { revalidate: 86400 },
      }
    )
    const data = await res.json()
    return data.results?.[0]?.urls?.full || null
  } catch {
    return null
  }
}