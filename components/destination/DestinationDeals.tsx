import Link from "next/link"
import { Deal } from "@/lib/destinations"

type Props = {
  deals: Deal[]
  contactChips: string[]
}

export default function DestinationDeals({ deals, contactChips }: Props) {
  return (
    <section className="bg-[#F0F6FF] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Featured Packages
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What We Can Build For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#D8E8F8] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-2xl font-light text-[#1C3F6E]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {deal.title}
                  </h3>
                  <span className="text-xs tracking-wide text-[#4A90D9] bg-[#F0F6FF] px-3 py-1 ml-4 whitespace-nowrap">
                    {deal.duration}
                  </span>
                </div>
                <p
                  className="text-[#5B7FA6] leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {deal.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className="text-xl font-medium text-[#1C3F6E]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {deal.price}
                </p>
                <Link
                  href={`/contact?destination=${encodeURIComponent(deal.title)}&type=Resort`}
                  className="px-6 py-3 bg-[#4A90D9] text-white text-xs tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
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