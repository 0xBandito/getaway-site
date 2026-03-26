import { notFound } from "next/navigation"
import { getDestinationBySlug, getAllSlugs } from "@/lib/destinations"
import DestinationHero from "@/components/destination/DestinationHero"
import DestinationHighlights from "@/components/destination/DestinationHighlights"
import DestinationGallery from "@/components/destination/DestinationGallery"
import DestinationDeals from "@/components/destination/DestinationDeals"
import DestinationCTA from "@/components/destination/DestinationCTA"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)
  if (!destination) return {}

  return {
    title: `${destination.name} Travel | Getaway`,
    description: destination.description,
  }
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestinationBySlug(slug)

  if (!destination) notFound()

  return (
    <>
      <DestinationHero
        name={destination.name}
        tagline={destination.tagline}
        searchQuery={destination.searchQuery}
        contactChip={destination.contactChip}
      />
      <DestinationHighlights highlights={destination.highlights} />
      <DestinationGallery searchQuery={destination.searchQuery} />
      <DestinationDeals
        deals={destination.deals}
        contactChip={destination.contactChip}
      />
      <DestinationCTA
        name={destination.name}
        contactChip={destination.contactChip}
      />
    </>
  )
}