import { destinations } from "@/lib/destinations"
import DestinationsClient from "@/components/destination/DestinationsClient"

export const metadata = {
  title: "Destinations | Getaway",
  description:
    "Explore the world with Getaway. Browse curated destinations across the Caribbean, Europe, Asia, Africa, and beyond.",
}

export default function DestinationsPage() {
  return (
    <section className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Explore The World
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Where Do You Want To Go?
        </h1>
        <p
          className="text-lg text-[#5B7FA6] max-w-2xl"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Every destination is handpicked. Every trip is built around you.
          Browse below and let Cameron know where you've been dreaming of going.
        </p>
      </div>

      <DestinationsClient destinations={destinations} />
    </section>
  )
}