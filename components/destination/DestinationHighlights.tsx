type Props = {
  highlights: string[]
}

export default function DestinationHighlights({ highlights }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
        Need To Know
      </p>
      <h2
        className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-12"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        What To Expect
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex gap-4 p-6 bg-white border border-[#D8E8F8]"
          >
            <span className="text-[#4A90D9] text-lg mt-0.5">→</span>
            <p
              className="text-[#5B7FA6] leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}