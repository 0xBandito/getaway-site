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
    title: `${destination.name} Travel`,
    description: destination.description.slice(0, 160),
    openGraph: {
      title: `${destination.name} Travel | Travel With Cameron`,
      description: destination.tagline,
    },
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
        slug={slug}
        contactChips={destination.contactChips}
      />
      <DestinationHighlights highlights={destination.highlights} />
      <DestinationGallery slug={slug} />
      <DestinationDeals
        deals={destination.deals}
        contactChips={destination.contactChips}
      />
      <DestinationCTA
        name={destination.name}
        contactChips={destination.contactChips}
      />
    </>
  )
}