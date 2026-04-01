"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const totalImages = 4
  const allLoaded = imagesLoaded >= totalImages

  function handleImageLoad() {
    setImagesLoaded((prev) => prev + 1)
  }

  useEffect(() => {
    setMounted(true)
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
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.querySelector("[data-scene]"),
            start: "0% 0%",
            end: "100% 0%",
            scrub: true,
          },
        })

        // Phase 1: Window photo scales up and fades (passing through the window)
        tl.to("[data-layer='window']", {
          scale: 2.5,
          opacity: 0,
          ease: "none",
          duration: 0.4,
        })

        // Phase 1b: Title fades out as we pass through
        tl.to("[data-layer='title']", {
          opacity: 0,
          yPercent: -30,
          ease: "none",
          duration: 0.3,
        }, 0)

        // Phase 2: Clouds drift apart (split top and bottom)
        tl.to("[data-layer='clouds-top']", {
          yPercent: -80,
          opacity: 0,
          ease: "none",
          duration: 0.5,
        }, 0.25)

        tl.to("[data-layer='clouds-bottom']", {
          yPercent: 80,
          opacity: 0,
          ease: "none",
          duration: 0.5,
        }, 0.25)

        // Phase 3: Destination zooms in slightly (arrival feel)
        tl.fromTo("[data-layer='destination']", {
          scale: 1.15,
          opacity: 0,
        }, {
          scale: 1,
          opacity: 1,
          ease: "none",
          duration: 0.5,
        }, 0.3)

        // Phase 3b: Arrival text fades in
        tl.fromTo("[data-layer='arrival-text']", {
          opacity: 0,
          yPercent: 20,
        }, {
          opacity: 1,
          yPercent: 0,
          ease: "none",
          duration: 0.3,
        }, 0.6)

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
      <section className="relative" style={{ height: "280vh" }}>
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* Loading state */}
          {mounted && !allLoaded && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-cloud)]">
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
          )}

          <div data-scene className="relative w-full h-full" style={{ background: "var(--color-cloud)" }}>

            {/* Layer 0: Sky base (always visible, farthest back) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-layers/sky-base.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                onLoad={handleImageLoad}
              />
            </div>

            {/* Layer 1: Destination reveal (hidden initially, revealed by scroll) */}
            <div
              data-layer="destination"
              className="absolute inset-0 z-[1]"
              style={{ opacity: 0, willChange: "transform, opacity" }}
            >
              <Image
                src="/images/hero-layers/destination.jpg"
                alt="Maldives overwater bungalows"
                fill
                className="object-cover"
                sizes="100vw"
                onLoad={handleImageLoad}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>

            {/* Layer 2: Cloud layers (part as you scroll) */}
            <div
              data-layer="clouds-top"
              className="absolute inset-0 z-[5]"
              style={{ willChange: "transform, opacity" }}
            >
              <Image
                src="/images/hero-layers/clouds.jpg"
                alt=""
                fill
                className="object-cover"
                style={{ objectPosition: "center bottom" }}
                sizes="100vw"
                onLoad={handleImageLoad}
              />
              {/* Fade bottom edge so it blends */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "40%",
                  background: "linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 100%)",
                }}
              />
            </div>

            <div
              data-layer="clouds-bottom"
              className="absolute inset-0 z-[6]"
              style={{ willChange: "transform, opacity", top: "50%" }}
            >
              <Image
                src="/images/hero-layers/clouds.jpg"
                alt=""
                fill
                className="object-cover"
                style={{ objectPosition: "center top", transform: "scaleY(-1)" }}
                sizes="100vw"
              />
              {/* Fade top edge */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: "40%",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Layer 3: Plane window photo (foreground, scales up and fades) */}
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

            {/* Layer 4: Title text (fades out as we pass through window) */}
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

            {/* Layer 5: Arrival text (fades in over destination) */}
            <div
              data-layer="arrival-text"
              className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[15vh] pointer-events-none"
              style={{ opacity: 0, willChange: "transform, opacity" }}
            >
              <p
                className="font-body text-xs font-semibold tracking-widest uppercase text-white/60 mb-3"
              >
                Your destination awaits
              </p>
              <h2
                className="font-body font-bold text-center text-white"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 4rem)",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                }}
              >
                Where will you <span className="font-display italic font-medium">go?</span>
              </h2>
            </div>

          </div>

          {/* Bottom fade to page background */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none z-30"
            style={{
              height: "25%",
              background: "linear-gradient(to top, var(--color-cloud) 0%, rgba(248,251,254,0.5) 40%, transparent 100%)",
            }}
          />

          {/* Scroll hint (only on initial view) */}
          {allLoaded && (
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
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
