const travels = [
  { src: "/images/cameron/egypt.jpg", label: "Egypt", rotate: "-rotate-2" },
  { src: "/images/cameron/jamaica.jpg", label: "Jamaica", rotate: "rotate-1" },
  { src: "/images/cameron/paris.jpg", label: "Paris", rotate: "-rotate-1" },
  { src: "/images/cameron/stmaarten.jpg", label: "St. Maarten", rotate: "rotate-2" },
  { src: "/images/cameron/washdc.jpg", label: "Washington D.C.", rotate: "-rotate-1" },
  { src: "/images/cameron/cairo_egypt.JPEG", label: "Cairo", rotate: "rotate-2" },
  { src: "/images/cameron/chicago.JPEG", label: "Chicago", rotate: "-rotate-2" },
  { src: "/images/cameron/dubai_uae.JPG", label: "Dubai", rotate: "rotate-1" },
  { src: "/images/cameron/la_california.JPEG", label: "Los Angeles", rotate: "-rotate-1" },
  { src: "/images/cameron/phuket_thailand.JPEG", label: "Phuket", rotate: "rotate-2" },
]

export default function MyTravels() {
  return (
    <section className="py-20 bg-cream-gradient">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-12 text-center">
          My Travels
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {travels.map((trip) => (
            <div
              key={trip.label}
              className={`flex flex-col items-center gap-4 ${trip.rotate} hover:rotate-0 transition-transform duration-500 cursor-default`}
            >
              <div
                className="hover:scale-105 transition-transform duration-500"
                style={{
                  width: "200px",
                  height: "260px",
                  borderRadius: "80px",
                  background: "var(--color-cream)",
                  padding: "10px",
                  boxShadow: "0 0 0 2px var(--color-warm), 0 12px 40px rgba(28,43,54,0.1)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "90px",
                    overflow: "hidden",
                    background: "var(--color-sky-100)",
                  }}
                >
                  <img
                    src={trip.src}
                    alt={trip.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-[var(--color-muted)]">
                {trip.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
