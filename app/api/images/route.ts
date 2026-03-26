import { fetchUnsplashImages } from "@/lib/unsplash"
import { fetchPexelsImages } from "@/lib/pexels"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get("query")
  const count = parseInt(searchParams.get("count") || "9")

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 }
    )
  }

  try {
    // Try Unsplash first
    const images = await fetchUnsplashImages(query, count)
    return NextResponse.json({ images, source: "unsplash" })
  } catch (unsplashError) {
    console.warn("Unsplash failed, falling back to Pexels:", unsplashError)

    try {
      // Fall back to Pexels
      const images = await fetchPexelsImages(query, count)
      return NextResponse.json({ images, source: "pexels" })
    } catch (pexelsError) {
      console.error("Both image sources failed:", pexelsError)
      return NextResponse.json(
        { error: "Failed to fetch images" },
        { status: 500 }
      )
    }
  }
}
