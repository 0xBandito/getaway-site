import Link from "next/link"
import { Deal } from "@/lib/destinations"

type Props = {
  deals: Deal[]
  contactChips: string[]
}

export default function DestinationDeals({ deals, contactChips }: Props) {
  return (
    <section className="bg-cloud-gradient py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
          Featured Packages
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12">
          What We Can Build For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="card-lift bg-white rounded-xl border border-[var(--color-sky-200)] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-light text-[var(--color-ink)]">
                    {deal.title}
                  </h3>
                  <span className="font-body text-xs tracking-wide text-[var(--color-sky)] bg-[var(--color-cloud)] px-3 py-1 ml-4 whitespace-nowrap rounded-full">
                    {deal.duration}
                  </span>
                </div>
                <p className="font-body text-base leading-[1.7] text-[var(--color-muted)] mb-6">
                  {deal.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-display text-xl font-medium text-[var(--color-ink)]">
                  {deal.price}
                </p>
                <Link
                  href={`/contact?destination=${encodeURIComponent(deal.title)}&type=Resort`}
                  className="btn-sky rounded-full px-6 py-3 text-xs tracking-widest uppercase"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
