import { destinations } from "@/lib/destinations"
import DestinationsClient from "@/components/destination/DestinationsClient"

export const metadata = {
  title: "Destinations",
  description:
    "Explore curated travel destinations across the Caribbean, Mexico, Europe, Asia, Africa, and beyond. Find your perfect getaway with personalized planning from Cameron.",
}

export default function DestinationsPage() {
  return <DestinationsClient destinations={destinations} />
}
