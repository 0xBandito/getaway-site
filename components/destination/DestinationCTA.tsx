import Link from "next/link"

type Props = {
  name: string
  contactChips: string[]
}

export default function DestinationCTA({ name, contactChips }: Props) {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-6">
          Ready When You Are
        </p>
        <h2
          className="text-4xl md:text-6xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Let's Plan Your {name} Trip
        </h2>
        <p
          className="text-[#5B7FA6] leading-relaxed mb-10 text-lg"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Tell Cameron where you want to go and what you're dreaming of.
          You'll hear back within 24–48 hours with ideas, options, and a
          plan built around you.
        </p>
        <Link
          href={`/contact?destination=${encodeURIComponent(name)}`}
          className="inline-block px-10 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
        >
          Start Planning
        </Link>
      </div>
    </section>
  )
}