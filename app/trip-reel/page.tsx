import Link from "next/link"

export const metadata = {
  title: "Trip Reel | Getaway",
  description:
    "Real trips. Real memories. A look at where Getaway has taken travelers around the world.",
}

const trips = [
  {
    src: "/images/trips/egypt.jpg",
    location: "Egypt",
    caption: "The pyramids at sunrise.",
    rotate: "-rotate-2",
  },
  {
    src: "/images/trips/jamaica.jpg",
    location: "Jamaica",
    caption: "Seven Mile Beach.",
    rotate: "rotate-1",
  },
  {
    src: "/images/trips/paris.jpg",
    location: "Paris, France",
    caption: "The city of light.",
    rotate: "-rotate-1",
  },
  {
    src: "/images/trips/stmaarten.jpg",
    location: "St. Maarten",
    caption: "Half Dutch, half French.",
    rotate: "rotate-2",
  },
  {
    src: "/images/trips/washdc.jpg",
    location: "Washington D.C.",
    caption: "History and culture.",
    rotate: "-rotate-1",
  },
  {
    src: "/images/trips/egypt.jpg",
    location: "PLACEHOLDER",
    caption: "Add your photo here.",
    rotate: "rotate-1",
  },
  {
    src: "/images/trips/jamaica.jpg",
    location: "PLACEHOLDER",
    caption: "Add your photo here.",
    rotate: "-rotate-2",
  },
  {
    src: "/images/trips/paris.jpg",
    location: "PLACEHOLDER",
    caption: "Add your photo here.",
    rotate: "rotate-1",
  },
]

export default function TripReelPage() {
  return (
    <section className="min-h-screen bg-[#F0F6FF]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#4A90D9] mb-4">
          Trip Reel
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-[#1C3F6E] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Real trips. Real memories.
        </h1>
        <p
          className="text-lg text-[#5B7FA6] max-w-2xl mb-20 font-light"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Every photo is from a real trip — planned, booked, and handled
          by Cameron.
        </p>

        {/* Polaroid wall */}
        <div
          className="relative"
          style={{
            background: "#FAF7F2",
            borderRadius: "24px",
            padding: "48px 32px",
            minHeight: "600px",
            boxShadow: "inset 0 2px 12px rgba(28,63,110,0.06)",
          }}
        >
          {/* Cork texture dots */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#EDE5D8]"
                style={{
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {trips.map((trip, index) => (
              <div
                key={index}
                className={`${trip.rotate} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  transformOrigin: "center center",
                }}
              >
                {/* Polaroid frame */}
                <div
                  style={{
                    background: "white",
                    padding: "10px 10px 36px 10px",
                    boxShadow: "0 4px 20px rgba(28,63,110,0.15), 0 1px 4px rgba(28,63,110,0.1)",
                  }}
                >
                  {/* Photo */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      overflow: "hidden",
                      background: "#D8E8F8",
                    }}
                  >
                    <img
                      src={trip.src}
                      alt={trip.location}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  </div>
                  {/* Polaroid caption */}
                  <div style={{ padding: "10px 4px 0" }}>
                    <p
                      className="text-xs text-[#1C3F6E] font-medium tracking-wide"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      {trip.location}
                    </p>
                    <p
                      className="text-xs text-[#5B7FA6] mt-1 italic"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "14px" }}
                    >
                      {trip.caption}
                    </p>
                  </div>
                </div>

                {/* Pin */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4A90D9] z-20"
                  style={{
                    boxShadow: "0 2px 6px rgba(74,144,217,0.4)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p
            className="text-4xl font-light text-[#1C3F6E] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Your trip could be next.
          </p>
          <p
            className="text-[#5B7FA6] mb-8"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Tell Cameron where you want to go.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#4A90D9] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
          >
            Start Planning
          </Link>
        </div>
      </div>
    </section>
  )
}
