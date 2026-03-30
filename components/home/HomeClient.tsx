"use client"

import Link from "next/link"
import { Destination } from "@/lib/destinations"
import TripReel from "@/components/home/TripReel"
import FeaturedDestinations from "@/components/home/FeaturedDestinations"

type Props = {
  heroImage: string | null
  featured: Destination[]
}

export default function HomeClient({ heroImage, featured }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: heroImage
                ? `url(${heroImage})`
                : "linear-gradient(135deg, #1C3F6E 0%, #4A90D9 100%)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-8">
              Personalized Travel Planning
            </p>
            <h1
              className="text-7xl md:text-9xl font-light text-white mb-8 leading-none"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your dream
              <br />
              <span className="italic text-[#87B8E8]">trip,</span>
              <br />
              planned for you.
            </h1>
            <p
              className="text-lg text-white/60 mb-12 max-w-md leading-relaxed font-light"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Tell Cameron where you've been dreaming of going.
              Get a personalized plan built around you — not a template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#4A90D9] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3a7bc8] transition-all duration-300 text-center w-fit"
              >
                Start Planning
              </Link>
              <Link
                href="/destinations"
                className="inline-block px-10 py-4 border border-white/40 text-white text-xs tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300 text-center w-fit"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TripReel />

      {/* Why Getaway */}
      <section className="bg-[#F0F6FF] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#4A90D9] mb-6">
                Why Getaway
              </p>
              <h2
                className="text-5xl md:text-6xl font-light text-[#1C3F6E] leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Travel planning that actually feels{" "}
                <span className="italic text-[#4A90D9]">personal.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p
                className="text-[#5B7FA6] leading-relaxed text-lg font-light"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                No call centers. No bots. No packages you didn't ask for.
                Just Cameron — one person who handles every detail of your
                trip from the first message to the moment you land home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#D8E8F8]">
            {[
              {
                number: "01",
                title: "Built around you",
                body: "Every trip starts with a conversation about what you actually want. Not what's popular. Not what's on sale. What you want.",
              },
              {
                number: "02",
                title: "One person, start to finish",
                body: "You work with Cameron directly. Someone who knows your trip as well as you do — and is reachable when you need them.",
              },
              {
                number: "03",
                title: "Every detail handled",
                body: "Flights, hotels, transfers, experiences. All of it. You focus on looking forward to the trip. Cameron handles the rest.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`py-12 px-8 ${
                  index !== 0 ? "border-t md:border-t-0 md:border-l border-[#D8E8F8]" : ""
                }`}
              >
                <p
                  className="text-6xl font-light text-[#D8E8F8] mb-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.number}
                </p>
                <h3
                  className="text-2xl font-light text-[#1C3F6E] mb-4"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#5B7FA6] leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-8">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#4A90D9] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3a7bc8] transition-all duration-300"
            >
              Plan My Trip
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#D8E8F8]" />
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#4A90D9]"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                24–48hr response time
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedDestinations destinations={featured} />

      {/* Testimonials */}
      <section className="bg-[#F0F6FF] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#4A90D9] mb-4">
            What Travelers Say
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#1C3F6E] mb-16"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Real trips. Real people.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#D8E8F8] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-[#4A90D9]">★</span>
                  ))}
                </div>
                <p
                  className="text-[#5B7FA6] leading-relaxed mb-6 italic text-lg font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  "Cameron made our honeymoon everything we dreamed of and
                  more. Every detail was perfect and we didn't have to
                  stress about a thing."
                </p>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-[#1C3F6E]"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  — Happy Traveler, Caribbean
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 bg-[#FAF7F2]">
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#5B7FA6] mb-8">
            Ready?
          </p>
          <h2
            className="text-6xl md:text-8xl font-light text-[#1C3F6E] mb-8 leading-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let's build
            <br />
            <span className="italic text-[#4A90D9]">your trip.</span>
          </h2>
          <p
            className="text-[#5B7FA6] text-lg mb-12 leading-relaxed font-light"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Tell Cameron where you want to go. Hear back within 24–48
            hours with a plan built around you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#4A90D9] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3a7bc8] transition-all duration-300"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  )
}