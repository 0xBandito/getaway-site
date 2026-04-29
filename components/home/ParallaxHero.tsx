"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const totalImages = 2
  const allLoaded = imagesLoaded >= totalImages

  function handleImageLoad() {
    setImagesLoaded((prev) => prev + 1)
  }

  useEffect(() => {
    setMounted(true)
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    const navType = navEntries.length > 0 ? navEntries[0].type : "navigate"
    if (navType === "reload") {
      // Only override scroll restore on reload, not back/forward
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual"
      }
      window.scrollTo(0, 0)
      requestAnimationFrame(() => window.scrollTo(0, 0))
      // Restore default behavior after scroll so back button works normally
      setTimeout(() => {
        if ("scrollRestoration" in history) {
          history.scrollRestoration = "auto"
        }
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (!mounted || !allLoaded) return

    let ctx: any = null

    const timer = setTimeout(async () => {
      const gsapModule = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule
      gsap.registerPlugin(ScrollTrigger)

      const container = parallaxRef.current
      if (!container) return

      ctx = gsap.context(() => {
        const scene = container.querySelector("[data-scene]")

        // REVEAL TIMELINE: Very heavy scrub at the start = glacially slow
        const revealTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "0% 0%",
            end: "50% 0%",
            scrub: 10, // Extremely heavy — glacial pace, really have to work for it
          },
        })

        // Window scales through
        revealTl.to("[data-layer='window']", {
          scale: 3,
          opacity: 0,
          ease: "power2.in",
          duration: 0.5,
        })

        // Title fades out
        revealTl.to("[data-layer='title']", {
          opacity: 0,
          yPercent: -20,
          scale: 0.95,
          ease: "power1.in",
          duration: 0.3,
        }, 0.05)

        // Vignette fades
        revealTl.to("[data-layer='vignette']", {
          opacity: 0,
          ease: "none",
          duration: 0.5,
        }, 0)

        // Light flash — sits ABOVE the window so it actually masks the swap
        revealTl.fromTo("[data-layer='flare']", {
          opacity: 0,
        }, {
          opacity: 0.55,
          ease: "sine.inOut",
          duration: 0.18,
        }, 0.35)

        // Destination fades in BEHIND the flare, finishing as the flare clears
        revealTl.fromTo("[data-layer='destination']", {
          scale: 1.08,
          opacity: 0,
        }, {
          scale: 1.06,
          opacity: 1,
          ease: "sine.inOut",
          duration: 0.35,
        }, 0.35)

        // Flash dissolves — slower tail so the destination is fully in before the veil lifts
        revealTl.to("[data-layer='flare']", {
          opacity: 0,
          ease: "sine.inOut",
          duration: 0.3,
        }, 0.53)

        // MID TRANSITION: Scrub loosens up as destination appears
        const midTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "50% 0%",
            end: "65% 0%",
            scrub: 1,
          },
        })

        // Ken-burns drift
        midTl.to("[data-layer='destination']", {
          scale: 1.02,
          ease: "none",
          duration: 0.5,
        })

        // Arrival text fades in
        midTl.fromTo("[data-layer='arrival-text']", {
          opacity: 0,
          yPercent: 30,
        }, {
          opacity: 1,
          yPercent: 0,
          ease: "power2.out",
          duration: 0.4,
        }, 0.1)

        // POST-REVEAL: Normal speed, scroll feels free
        const postTl = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "65% 0%",
            end: "85% 0%",
            scrub: 0.3,
          },
        })

        // CTA button slides in
        postTl.fromTo("[data-layer='cta']", {
          opacity: 0,
          yPercent: 20,
        }, {
          opacity: 1,
          yPercent: 0,
          ease: "power2.out",
          duration: 0.3,
        }, 0.4)

        ScrollTrigger.refresh()
      }, container)
    }, 200)

    return () => {
      clearTimeout(timer)
      ctx?.revert()
    }
  }, [mounted, allLoaded])

  return (
    <div ref={parallaxRef}>
      <section className="relative" style={{ height: "250vh" }}>
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* Loading state — always rendered to avoid hydration mismatch, hidden via CSS */}
          <div
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-cloud)] transition-opacity duration-500"
            style={{ opacity: allLoaded ? 0 : 1, pointerEvents: allLoaded ? "none" : "auto" }}
          >
            <div className="relative w-12 h-12 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-[var(--color-sky-200)]" />
              <div
                className="absolute inset-0 rounded-full border-2 border-t-[var(--color-sky)] animate-spin"
                style={{ animationDuration: "1s" }}
              />
            </div>
            <p
              className="font-body text-[var(--color-muted)] uppercase text-xs"
              style={{ letterSpacing: "0.14em" }}
            >
              Loading your view...
            </p>
          </div>

          <div data-scene className="relative w-full h-full" style={{ background: "var(--color-cloud)" }}>

            {/* Layer 1: Destination reveal (hidden initially, revealed after flare) */}
            <div
              data-layer="destination"
              className="absolute z-[1]"
              style={{ opacity: 0, willChange: "transform, opacity", inset: "-5%", width: "110%", height: "110%" }}
            >
              <Image
                src="/images/hero-layers/destination.jpg"
                alt="Maldives overwater bungalows"
                fill
                className="object-cover"
                sizes="100vw"
                onLoad={handleImageLoad}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            </div>

            {/* Light flare overlay — z-30 puts it above window (z-10) and vignette (z-11) so it masks the swap */}
            <div
              data-layer="flare"
              className="absolute inset-0 z-30 bg-white pointer-events-none"
              style={{ opacity: 0 }}
            />


            {/* Plane window photo (foreground) */}
            <div
              data-layer="window"
              className="absolute inset-0 z-10"
              style={{ willChange: "transform, opacity" }}
            >
              <Image
                src="/images/planewindow2.jpg"
                alt="View from airplane window above the clouds at sunset"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center center" }}
                sizes="100vw"
                onLoad={handleImageLoad}
              />
            </div>

            {/* Vignette overlay on window for depth */}
            <div
              data-layer="vignette"
              className="absolute inset-0 z-[11] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 100%)",
              }}
            />

            {/* Title text */}
            <div
              data-layer="title"
              className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
              style={{ willChange: "transform, opacity" }}
            >
              <h1
                className="font-body font-bold text-center text-white"
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 8rem)",
                  lineHeight: "105%",
                  letterSpacing: "-0.03em",
                  textShadow: "0 2px 60px rgba(0,0,0,0.3), 0 1px 6px rgba(0,0,0,0.2)",
                }}
              >
                Plan Your
                <br />
                <span className="font-display italic font-medium">
                  Dream Getaway.
                </span>
              </h1>
              <p
                className="font-body font-medium uppercase text-center"
                style={{
                  fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "1.2rem",
                  letterSpacing: "0.12em",
                }}
              >
                Curated Travel Experiences
              </p>
            </div>

            {/* Arrival text (fades in over destination) */}
            <div
              data-layer="arrival-text"
              className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[20vh] pointer-events-none"
              style={{ opacity: 0, willChange: "transform, opacity" }}
            >
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
                Your destination awaits
              </p>
              <h2
                className="font-body font-bold text-center text-white mb-8"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 4rem)",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                }}
              >
                Where will you <span className="font-display italic font-medium">go?</span>
              </h2>
            </div>

            {/* CTA button (fades in after text) */}
            <div
              data-layer="cta"
              className="absolute inset-0 z-20 flex items-end justify-center pb-[12vh]"
              style={{ opacity: 0, willChange: "transform, opacity" }}
            >
              <Link
                href="/contact?destination=Maldives"
                className="btn-sky px-8 py-3.5 rounded-full text-sm font-semibold font-body shadow-lg shadow-black/20"
              >
                Plan This Trip
              </Link>
            </div>

          </div>

          {/* Bottom fade to page background */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none z-30"
            style={{
              height: "20%",
              background: "linear-gradient(to top, var(--color-cloud) 0%, rgba(248,251,254,0.4) 50%, transparent 100%)",
            }}
          />

          {/* Scroll hint */}
          {allLoaded && (
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
              <p
                className="font-body text-white/40 uppercase"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  animation: "gentle-float 3s ease-in-out infinite",
                }}
              >
                Scroll to explore
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
