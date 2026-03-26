const trips = [
  { src: "/images/trips/egypt.jpg", label: "Egypt" },
  { src: "/images/trips/jamaica.jpg", label: "Jamaica" },
  { src: "/images/trips/paris.jpg", label: "Paris" },
  { src: "/images/trips/stmaarten.jpg", label: "St. Maarten" },
  { src: "/images/trips/washdc.jpg", label: "Washington D.C." },
]

export default function TripReel() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[#5B7FA6] mb-12 text-center">
          Recent Trips
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {trips.map((trip) => (
            <div key={trip.label} className="flex flex-col items-center gap-4">
              {/* Plane window frame */}
              <div
                style={{
                  width: "200px",
                  height: "260px",
                  borderRadius: "80px",
                  background: "#FAF7F2",
                  padding: "10px",
                  boxShadow: "0 0 0 2px #EDE5D8, 0 12px 40px rgba(28,63,110,0.12)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "90px",
                    overflow: "hidden",
                    background: "#D8E8F8",
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
              <p
                className="text-xs tracking-[0.15em] uppercase text-[#5B7FA6]"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {trip.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}