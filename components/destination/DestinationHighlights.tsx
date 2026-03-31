type Props = {
  highlights: string[]
}

export default function DestinationHighlights({ highlights }: Props) {
  return (
    <section className="bg-cream-gradient py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
          Need To Know
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-12">
          What To Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => {
            const [label, detail] = highlight.split(": ")
            return (
              <div
                key={index}
                className="card-lift flex gap-6 p-6 bg-white rounded-xl border border-[var(--color-sky-200)]"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-cloud)] flex items-center justify-center">
                  <span className="text-[var(--color-sky)] text-sm font-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-sky)] mb-1">
                    {label}
                  </p>
                  <p className="font-body text-base leading-[1.7] text-[var(--color-ink)]">
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
