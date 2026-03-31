import { destinations } from "@/lib/destinations"
import DestinationsClient from "@/components/destination/DestinationsClient"

export const metadata = {
  title: "Destinations | Travel With Cameron",
  description:
    "Explore curated travel destinations across the Caribbean, Europe, Asia, Africa, and beyond. Find your perfect getaway.",
}

export default function DestinationsPage() {
  return <DestinationsClient destinations={destinations} />
}
