import Link from "next/link"

type Props = {
  name: string
  contactChips: string[]
}

export default function DestinationCTA({ name, contactChips }: Props) {
  return (
    <section className="bg-cream-gradient py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-6">
          Ready When You Are
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-[var(--color-ink)] mb-6">
          Let's Plan Your {name} Trip
        </h2>
        <p className="font-body text-lg leading-[1.7] text-[var(--color-muted)] mb-10">
          Tell Cameron where you want to go and what you're dreaming of.
          You'll hear back within 24-48 hours with ideas, options, and a
          plan built around you.
        </p>
        <Link
          href={`/contact?destination=${encodeURIComponent(name)}`}
          className="btn-sky rounded-full inline-block px-10 py-4 text-sm tracking-widest uppercase"
        >
          Start Planning
        </Link>
      </div>
    </section>
  )
}
