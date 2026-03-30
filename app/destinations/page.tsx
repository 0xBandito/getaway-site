import { destinations } from "@/lib/destinations"
import { getHeroImage } from "@/lib/getHeroImage"
import HomeClient from "@/components/home/HomeClient"

export default async function HomePage() {
  const [heroImage] = await Promise.all([
    getHeroImage(),
  ])

  const featured = destinations.slice(0, 6)

  return <HomeClient heroImage={heroImage} featured={featured} />
}