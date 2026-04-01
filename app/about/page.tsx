import Link from "next/link"
import Image from "next/image"
import MyTravels from "@/components/about/MyTravels"

export const metadata = {
  title: "About | Travel With Cameron",
  description:
    "Meet Cameron, the person behind every trip. Personalized travel planning built around you.",
}

export default function AboutPage() {
  return (
    <section className="min-h-screen">
      {/* Hero — full photo visible */}
      <div className="relative bg-[var(--color-ink)]">
        <Image
          src="/images/cameron/washdc.jpg"
          alt="Cameron in Washington D.C."
          width={4032}
          height={2495}
          className="w-full h-auto opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pb-8 md:pb-12">
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            About{" "}
            <span className="font-display italic font-medium text-[var(--color-sky-300)]">
              Cameron.
            </span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-sky-wash">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
                The Story
              </p>
              <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-8">
                Travel started at{" "}
                <span className="font-display italic font-medium text-[var(--color-sky)]">
                  8
                </span>
                . It never really stopped.
              </h2>
              <div className="space-y-6 font-body text-[var(--color-muted)] leading-relaxed">
                <p>
                  My first trip was Washington, D.C. at 8 years old. Growing up
                  in a military household, my father in the service, my mother
                  in federal government, moving was just life. That shaped how I
                  see the world.
                </p>
                <p>
                  First domestic flight at 14. First international at 27.
                  Somewhere in between, I became the person everyone called when
                  they needed a trip planned. In 2018, I made it official.
                </p>
                <p>
                  At Travel With Cameron, the goal is simple: seamless,
                  stress-free, and actually memorable. I handle every detail. You
                  just show up.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block mt-10"
              >
                Plan Your Trip
              </Link>
            </div>

            {/* Right column: Cameron photo — centered in its column */}
            <div className="flex items-start justify-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/cameron/camheadshot.JPG"
                  alt="Cameron — Travel Advisor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* By The Numbers — full width horizontal strip */}
      <div className="bg-cream-gradient border-y border-[var(--color-sky-200)]/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-10 text-center">
            By The Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[var(--color-sky-200)]/30">
            {[
              { number: "24–48hrs", label: "Response time on every inquiry" },
              { number: "12+", label: "Destinations we specialize in" },
              { number: "100%", label: "Personalized, because no two trips are alike" },
              { number: "1", label: "Person handling your trip, start to finish" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8">
                <p className="font-display italic text-4xl md:text-5xl font-medium text-[var(--color-sky)] mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-sm md:text-base text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Travels */}
      <MyTravels />
    </section>
  )
}
