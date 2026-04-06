"use client"

import Link from "next/link"
import Image from "next/image"
import { destinations } from "@/lib/destinations"
import { getHeroImageForSlug, featuredSlugs } from "@/lib/images"
import ParallaxHero from "@/components/home/ParallaxHero"

export default function HomePage() {
  const featured = destinations.filter((d) => featuredSlugs.includes(d.slug))

  return (
    <>
      {/* ===== PARALLAX HERO ===== */}
      <ParallaxHero />

      {/* ===== SEARCH BAR — bridges hero into content ===== */}
      <section className="relative z-30 -mt-8 pb-12 md:pb-16 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="search-bar rounded-full px-6 py-3.5 flex items-center gap-3 shadow-lg shadow-[var(--color-sky-200)]/20">
            <svg className="w-5 h-5 text-[var(--color-muted)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
            <input
              type="text"
              placeholder="Search by destination, city, or experience"
              className="w-full bg-transparent font-body text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none"
            />
            <Link
              href="/destinations"
              className="btn-sky px-5 py-2 rounded-full text-sm font-semibold font-body shrink-0"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY TRAVEL WITH CAMERON ===== */}
      <section className="bg-sky-wash py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
            <div>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sky)] mb-4">
                Why Travel With Cameron
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-ink)] leading-tight">
                Travel planning that actually feels{" "}
                <span className="italic text-[var(--color-sky)]">personal.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-base md:text-lg leading-[1.7] text-[var(--color-muted)]">
                No call centers. No bots. No packages you didn't ask for.
                Just Cameron, one person who handles every detail of your
                trip from the first message to the moment you land home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--color-sky-200)]/40">
            {[
              {
                number: "01",
                title: "Built around you",
                body: "Every trip starts with a conversation about what you actually want. Not what's popular. Not what's on sale. What you want.",
              },
              {
                number: "02",
                title: "One person, start to finish",
                body: "You work with Cameron directly. Someone who knows your trip as well as you do, and is reachable when you need them.",
              },
              {
                number: "03",
                title: "Every detail handled",
                body: "Flights, hotels, transfers, experiences. All of it. You focus on looking forward to the trip. Cameron handles the rest.",
              },
            ].map((item, index) => (
              <div
                key={item.number}
                className={`py-10 md:py-12 px-0 md:px-8 ${
                  index !== 0
                    ? "border-t md:border-t-0 md:border-l border-[var(--color-sky-200)]/40"
                    : ""
                }`}
              >
                <p className="font-display text-5xl md:text-6xl font-light text-[var(--color-sky-200)] mb-5">
                  {item.number}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-[1.7] text-[var(--color-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="btn-sky px-8 py-3.5 rounded-full text-sm font-semibold font-body"
            >
              Plan My Trip
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[var(--color-sky-200)]" />
              <p className="font-body text-xs tracking-widest uppercase text-[var(--color-sky)]">
                24–48hr response time
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== FEATURED DESTINATIONS ===== */}
      <section className="bg-cloud-gradient py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-3">
              Featured
            </p>
            <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
              Find a Getaway
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--color-ink)] link-hover"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured.slice(0, 4).map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="card-lift group cursor-pointer block"
            >
              <div className="img-overlay rounded-xl overflow-hidden mb-5 relative h-[260px] md:h-[340px] lg:h-[420px]">
                <Image
                  src={getHeroImageForSlug(dest.slug)}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-body text-lg md:text-xl font-semibold text-[var(--color-ink)] mb-1">
                    {dest.name}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-muted)]">
                    {dest.continent} · {dest.deals[0]?.duration || "Custom"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body text-lg md:text-xl font-bold text-[var(--color-ink)]">
                    {dest.deals[0]?.price || "Custom"}
                  </p>
                  <p className="font-body text-xs text-[var(--color-muted)]">Per Person</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== HOT DEALS ===== */}
      <section className="bg-cream-gradient py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sunset)] mb-3">
              Limited Time
            </p>
            <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
              Hot Deals
            </h2>
          </div>
          <Link
            href="/promotions"
            className="hidden md:inline-flex items-center gap-2 font-body text-sm font-medium text-[var(--color-ink)] link-hover"
          >
            View All Promotions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Jamaican Getaway",
              destination: "Jamaica",
              price: "From $1,170/person",
              dates: "June - Sept 2026",
              image: "/images/promotions/jamaica.jpg",
              tag: "Beach Getaway",
              tripType: "All-Inclusive Resort",
            },
            {
              title: "Universal Epic Universe",
              destination: "Universal Epic Universe, Orlando",
              price: "From $650/person",
              dates: "June - July 2026",
              image: "/images/promotions/epic_universe.jpg",
              tag: "Theme Park",
              tripType: "Theme Park",
            },
            {
              title: "Cancun Christmas",
              destination: "Cancun, Mexico",
              price: "From $1,650/person",
              dates: "Dec 22-26, 2026",
              image: "/images/promotions/cancun.jpg",
              tag: "Holiday Special",
              tripType: "All-Inclusive Resort",
            },
          ].map((promo) => (
            <Link
              key={promo.title}
              href={`/contact?destination=${encodeURIComponent(promo.destination)}&type=${encodeURIComponent(promo.tripType)}`}
              className="card-lift group cursor-pointer block"
            >
              <div className="rounded-xl overflow-hidden mb-4 relative h-[220px] md:h-[260px]">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-body text-xs font-semibold tracking-widest uppercase text-white bg-[var(--color-sunset)] px-3 py-1 rounded-full">
                    {promo.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-body text-lg font-semibold text-[var(--color-ink)] mb-1">
                    {promo.title}
                  </h3>
                  <p className="font-body text-xs text-[var(--color-muted)]">
                    {promo.dates}
                  </p>
                </div>
                <p className="font-body text-lg font-bold text-[var(--color-ink)]">
                  {promo.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/promotions"
            className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block"
          >
            View All Promotions
          </Link>
        </div>
      </section>

      {/* ===== DREAM DESTINATIONS — Full width image ===== */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-3">
            Explore
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
            Dream Destinations
          </h2>
        </div>
        <div className="pano-img img-overlay relative w-full h-[280px] md:h-[440px] lg:h-[560px]">
          <Image
            src={getHeroImageForSlug("maldives")}
            alt="Maldives overwater bungalow"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-10">
            <h3 className="font-body text-2xl md:text-4xl font-bold text-white mb-2">
              Maldives
            </h3>
            <p className="font-body text-sm md:text-base text-white/70 mb-5 max-w-md">
              The most beautiful place on earth. Overwater bungalows, crystal-clear lagoons, and a level of seclusion that makes the real world disappear.
            </p>
            <Link
              href="/contact?destination=Maldives"
              className="btn-outline-white px-6 py-2.5 rounded-full text-sm font-semibold font-body"
            >
              Plan This Trip
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="bg-sky-wash py-16 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="divider mb-14 md:mb-20" />
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
              About Cameron
            </p>
            <h2 className="font-body text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
              Travel,<br />
              <span className="font-display italic font-medium text-[var(--color-sky)]">Remembered.</span>
            </h2>
            <p className="font-body text-base leading-[1.7] text-[var(--color-muted)] max-w-lg">
              Cameron believes travel should be effortless, not stressful. Every detail, from flights and stays to itineraries and dining, is handled personally so you can focus on making memories that last a lifetime.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 content-start">
            <div>
              <p className="font-body text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-2">
                500<span className="text-[var(--color-sky)]">+</span>
              </p>
              <p className="font-body text-sm text-[var(--color-muted)]">Trips Planned</p>
            </div>
            <div>
              <p className="font-body text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-2">
                98<span className="text-[var(--color-sky)]">%</span>
              </p>
              <p className="font-body text-sm text-[var(--color-muted)]">Client Satisfaction</p>
            </div>
            <div>
              <p className="font-body text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-2">
                50<span className="text-[var(--color-sky)]">+</span>
              </p>
              <p className="font-body text-sm text-[var(--color-muted)]">Destinations</p>
            </div>
            <div>
              <p className="font-body text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-2">
                4.9
              </p>
              <p className="font-body text-sm text-[var(--color-muted)]">Average Rating</p>
            </div>
          </div>
        </div>
        <div className="divider mt-14 md:mt-20" />
      </section>

      {/* ===== EXPLORE / PLAN / RELAX ===== */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <Link
            href="/destinations"
            className="group flex items-center justify-between py-8 md:py-12 border-b border-[var(--color-ink)]/10 transition-opacity duration-300 hover:opacity-60"
          >
            <span className="service-text text-[var(--color-ink)] font-body">Explore</span>
            <span className="arrow-move">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-[var(--color-ink)]/30 group-hover:text-[var(--color-ink)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="group flex items-center justify-between py-8 md:py-12 border-b border-[var(--color-ink)]/10 transition-opacity duration-300 hover:opacity-60"
          >
            <span className="service-text text-[var(--color-ink)] font-body">Plan</span>
            <span className="arrow-move">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-[var(--color-ink)]/30 group-hover:text-[var(--color-ink)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
              </svg>
            </span>
          </Link>
          <Link
            href="/trip-reel"
            className="group flex items-center justify-between py-8 md:py-12 transition-opacity duration-300 hover:opacity-60"
          >
            <span className="service-text text-[var(--color-ink)] font-body">Relax</span>
            <span className="arrow-move">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-[var(--color-ink)]/30 group-hover:text-[var(--color-ink)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-cream-gradient py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-3">
            What Travelers Say
          </p>
          <h2 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-12 md:mb-16">
            Real trips.{" "}
            <span className="font-display italic font-medium text-[var(--color-sky)]">
              Real people.
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Cameron made our honeymoon everything we dreamed of and more. Every detail was perfect and we didn't have to stress about a thing.",
                name: "Jessica & Ryan",
                trip: "Honeymoon in the Maldives",
              },
              {
                quote: "I'm a busy executive with zero time to plan. Cameron took a 10-minute call and turned it into a flawless family vacation. My kids are still talking about it.",
                name: "Marcus T.",
                trip: "Family trip to Costa Rica",
              },
              {
                quote: "Third year using Cameron. Portugal, Iceland, and now Thailand. He somehow tops himself every single time. I don't even look at other agencies anymore.",
                name: "Sarah P.",
                trip: "Repeat traveler · 3 trips",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-sky-200)]/30 shadow-sm hover:shadow-md transition-shadow duration-300 card-lift"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-[var(--color-sunset)]">★</span>
                  ))}
                </div>
                <p className="font-display text-base md:text-lg leading-[1.7] text-[var(--color-muted)] mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-[var(--color-ink)]">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-[var(--color-muted)]">
                    {t.trip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-cloud-gradient py-20 md:py-32 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto text-center">
        <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
          Get In Touch
        </p>
        <h2 className="font-body text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-ink)] mb-6 max-w-3xl mx-auto">
          Ready for a Trip<br />
          <span className="font-display italic font-medium text-[var(--color-sky)]">
            You&apos;ll Never Forget?
          </span>
        </h2>
        <p className="font-body text-base leading-[1.7] text-[var(--color-muted)] max-w-lg mx-auto mb-10">
          Tell Cameron where you want to go and he&apos;ll handle every last detail, so you can focus on making memories.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-sky px-8 py-3.5 rounded-full text-sm font-semibold font-body"
          >
            Start Planning
          </Link>
          <Link
            href="/destinations"
            className="btn-outline px-8 py-3.5 rounded-full text-sm font-semibold font-body"
          >
            Browse Destinations
          </Link>
        </div>
      </section>
    </>
  )
}
