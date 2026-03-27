type Props = {
  highlights: string[]
}

export default function DestinationHighlights({ highlights }: Props) {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          Need To Know
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-12"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What To Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => {
            const [label, detail] = highlight.split(": ")
            return (
              <div
                key={index}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-[#D8E8F8] hover:shadow-md transition-shadow duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#F0F6FF] flex items-center justify-center">
                  <span className="text-[#4A90D9] text-sm font-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.15em] uppercase text-[#4A90D9] mb-1"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[#1C3F6E] leading-relaxed"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {detail || highlight}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}