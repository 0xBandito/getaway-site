import Link from "next/link"

export const metadata = {
  title: "About | Getaway",
  description:
    "Meet Cameron — the person behind every Getaway trip. Personalized travel planning built around you.",
}

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#F0F6FF]">
      {/* Hero */}
      <div className="relative h-[50vh] bg-[#1C3F6E]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/images/trips/washdc.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 h-full flex items-end max-w-7xl mx-auto px-6 pb-12">
          <h1
            className="text-5xl md:text-7xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            About Getaway
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
              The Story
            </p>
            <h2
              className="text-4xl font-light text-[#1C3F6E] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Travel started at 8.
              It never really stopped.
            </h2>
            <div
              className="space-y-6 text-[#5B7FA6] leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              <p>
                My first trip was Washington, D.C. at 8 years old. Growing up in a military household — my father in the service, my mother in federal government — moving was just life. That shaped how I see the world.
              </p>
              <p>
                First domestic flight at 14. First international at 27. Somewhere in between, I became the person everyone called when they needed a trip planned. In 2018, I made it official.
              </p>
              <p>
                At Getaway to Remember, the goal is simple: seamless, stress-free, and actually memorable. I handle every detail. You just show up.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div
              className="border border-[#D8E8F8] p-8"
            >
              <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-6">
                By The Numbers
              </p>
              {[
                { number: "24–48hrs", label: "Response time on every inquiry" },
                { number: "12+", label: "Destinations we specialize in" },
                { number: "100%", label: "Personalized — no two trips alike" },
                { number: "1", label: "Person handling your trip, start to finish" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 py-4 border-b border-[#D8E8F8] last:border-0"
                >
                  <p
                    className="text-3xl font-light text-[#4A90D9] w-24 shrink-0"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="text-sm text-[#5B7FA6]"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* PLACEHOLDER — Cameron photo */}
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundImage: "url(/images/cameron/camheadshot.JPG)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}