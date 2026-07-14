import Link from "next/link"

export const metadata = {
  title: "Trip Reel",
  description:
    "Real trips. Real memories. Browse photos from real vacations planned by Cameron — Mexico, Dubai, Jamaica, Bali, Italy, and more. Your trip could be next.",
}

const trips = [
  // Aruba
  { src: "/images/trips/aruba1.JPEG", location: "Aruba", destination: "Aruba", tripType: "All-Inclusive Resort", rotate: "-rotate-1" },
  { src: "/images/trips/aruba2.JPG", location: "Aruba", destination: "Aruba", tripType: "All-Inclusive Resort", rotate: "rotate-2" },
  // Carnival Caribbean Cruise
  { src: "/images/trips/carribean_carnival_vista_cruise.jpeg", location: "Caribbean Cruise", destination: "Caribbean Cruise", tripType: "Cruise", rotate: "-rotate-2" },
  { src: "/images/trips/carribean_carnival_vista_cruise2.jpeg", location: "Caribbean Cruise", destination: "Caribbean Cruise", tripType: "Cruise", rotate: "rotate-1" },
  { src: "/images/trips/carribean_carnival_vista_cruise3.jpeg", location: "Caribbean Cruise", destination: "Caribbean Cruise", tripType: "Cruise", rotate: "-rotate-1" },
  { src: "/images/trips/carribean_carnival_vista_cruise4.jpeg", location: "Caribbean Cruise", destination: "Caribbean Cruise", tripType: "Cruise", rotate: "rotate-2" },
  // Mexico
  { src: "/images/trips/cancun_mexico.jpg", location: "Cancun, Mexico", destination: "Cancun, Mexico", tripType: "All-Inclusive Resort", rotate: "-rotate-2" },
  { src: "/images/trips/cancun_mexico2.jpg", location: "Cancun, Mexico", destination: "Cancun, Mexico", tripType: "All-Inclusive Resort", rotate: "rotate-1" },
  { src: "/images/trips/cancun_mexico3.jpg", location: "Cancun, Mexico", destination: "Cancun, Mexico", tripType: "All-Inclusive Resort", rotate: "-rotate-1" },
  { src: "/images/trips/tulum_mexico.JPEG", location: "Tulum, Mexico", destination: "Tulum, Mexico", tripType: "All-Inclusive Resort", rotate: "-rotate-2" },
  { src: "/images/trips/tulum_mexico2.JPEG", location: "Tulum, Mexico", destination: "Tulum, Mexico", tripType: "All-Inclusive Resort", rotate: "rotate-1" },
  { src: "/images/trips/tulum_mexico3.jpg", location: "Tulum, Mexico", destination: "Tulum, Mexico", tripType: "All-Inclusive Resort", rotate: "-rotate-1" },
  { src: "/images/trips/loscabos_mexico.jpg", location: "Los Cabos, Mexico", destination: "Los Cabos, Mexico", tripType: "All-Inclusive Resort", rotate: "rotate-2" },
  // Egypt
  { src: "/images/trips/cairo.JPEG", location: "Cairo, Egypt", destination: "Cairo, Egypt", tripType: "Not sure yet", rotate: "rotate-2" },
  { src: "/images/trips/cairo2.JPEG", location: "Cairo, Egypt", destination: "Cairo, Egypt", tripType: "Not sure yet", rotate: "-rotate-2" },
  // Dubai, UAE
  { src: "/images/trips/dubai_uae.jpg", location: "Dubai, UAE", destination: "Dubai, UAE", tripType: "All-Inclusive Resort", rotate: "rotate-2" },
  { src: "/images/trips/dubai_uae2.jpg", location: "Dubai, UAE", destination: "Dubai, UAE", tripType: "All-Inclusive Resort", rotate: "-rotate-2" },
  // Bali, Indonesia
  { src: "/images/trips/bali_indonesia.PNG", location: "Bali, Indonesia", destination: "Bali, Indonesia", tripType: "Not sure yet", rotate: "-rotate-2" },
  // Italy
  { src: "/images/trips/italy.jpg", location: "Italy", destination: "Italy", tripType: "Not sure yet", rotate: "rotate-1" },
  { src: "/images/trips/italy2.jpg", location: "Italy", destination: "Italy", tripType: "Not sure yet", rotate: "-rotate-1" },
  { src: "/images/trips/italy3.jpg", location: "Italy", destination: "Italy", tripType: "Not sure yet", rotate: "rotate-2" },
  // Las Vegas, NV
  { src: "/images/trips/vegas.jpg", location: "Las Vegas, NV", destination: "Las Vegas, NV", tripType: "Not sure yet", rotate: "-rotate-2" },
  // Los Angeles, CA
  { src: "/images/trips/la_cali.jpg", location: "Los Angeles, CA", destination: "Los Angeles, CA", tripType: "Not sure yet", rotate: "rotate-1" },
  // Jamaica
  { src: "/images/trips/montego_bay_jamaica.JPEG", location: "Montego Bay, Jamaica", destination: "Montego Bay, Jamaica", tripType: "All-Inclusive Resort", rotate: "rotate-1" },
  // Paris, France
  { src: "/images/trips/paris_france.jpg", location: "Paris, France", destination: "Paris, France", tripType: "Not sure yet", rotate: "-rotate-1" },
  // Phuket, Thailand
  { src: "/images/trips/phuket_thailand.JPEG", location: "Phuket, Thailand", destination: "Phuket, Thailand", tripType: "Not sure yet", rotate: "rotate-2" },
  // Thailand
  { src: "/images/trips/thailand.jpg", location: "Thailand", destination: "Thailand", tripType: "Not sure yet", rotate: "rotate-1" },
  { src: "/images/trips/thailand2.jpg", location: "Thailand", destination: "Thailand", tripType: "Not sure yet", rotate: "-rotate-2" },
  { src: "/images/trips/thailand3.jpg", location: "Thailand", destination: "Thailand", tripType: "Not sure yet", rotate: "rotate-2" },
  // Playa del Carmen, Mexico
  { src: "/images/trips/playa_del_carmen_mexico.JPEG", location: "Playa del Carmen, Mexico", destination: "Playa del Carmen, Mexico", tripType: "All-Inclusive Resort", rotate: "-rotate-2" },
  // Puerto Rico
  { src: "/images/trips/puerto_rico.JPEG", location: "Puerto Rico", destination: "Puerto Rico", tripType: "All-Inclusive Resort", rotate: "rotate-1" },
  // Punta Cana, DR
  { src: "/images/trips/punta_cana_dr.JPEG", location: "Punta Cana, DR", destination: "Punta Cana, Dominican Republic", tripType: "All-Inclusive Resort", rotate: "-rotate-1" },
  { src: "/images/trips/punta_cana_dr2.jpg", location: "Punta Cana, DR", destination: "Punta Cana, Dominican Republic", tripType: "All-Inclusive Resort", rotate: "rotate-2" },
]


export default function TripReelPage() {
  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            Trip Reel
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Real trips. <span className="font-display italic font-medium text-[var(--color-sky)]">Real memories</span>.
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-2xl mb-20 leading-relaxed">
            Every photo is from a real trip, planned, booked, and handled
            by Cameron.
          </p>
        </div>
      </div>

      {/* Polaroid wall */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div
            className="relative rounded-2xl p-8 md:p-12"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 2px 12px rgba(28,63,110,0.06)",
            }}
          >
            {/* Cork texture dots */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-20">
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
                  className={`${trip.rotate} hover:rotate-0 hover:scale-105 transition-transform duration-300 cursor-pointer relative`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  {/* Polaroid frame */}
                  <div className="rounded-xl overflow-hidden"
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
                        background: "var(--color-sky-200)",
                        borderRadius: "6px",
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
                    {/* Polaroid label + destination link */}
                    <div style={{ padding: "10px 4px 0" }}>
                      <p className="font-body text-xs text-[var(--color-ink)] font-semibold tracking-wide">
                        {trip.location}
                      </p>
                      <Link
                        href={`/contact?destination=${encodeURIComponent(trip.destination)}&type=${encodeURIComponent(trip.tripType)}`}
                        className="font-display italic text-sm text-[var(--color-sky)] mt-1 inline-block hover:underline underline-offset-2 transition-opacity duration-200 hover:opacity-80"
                      >
                        Plan this trip →
                      </Link>
                    </div>
                  </div>

                  {/* Pin */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-sky)] z-20"
                    style={{
                      boxShadow: "0 2px 6px rgba(74,144,217,0.4)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cloud-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 text-center">
          <h2 className="font-body text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] mb-4">
            Your trip could be <span className="font-display italic font-medium text-[var(--color-sky)]">next</span>.
          </h2>
          <p className="font-body text-[var(--color-muted)] mb-8">
            Tell Cameron where you want to go.
          </p>
          <Link
            href="/contact"
            className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block"
          >
            Start Planning
          </Link>
        </div>
      </div>
    </section>
  )
}
