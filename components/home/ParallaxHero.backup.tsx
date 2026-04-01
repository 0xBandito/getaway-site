"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Mark mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize GSAP parallax after mount
  useEffect(() => {
    if (!mounted) return

    let ctx: any = null

    const timer = setTimeout(async () => {
      const gsapModule = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const gsap = gsapModule.gsap || gsapModule.default || gsapModule
      gsap.registerPlugin(ScrollTrigger)

      const triggerElement = parallaxRef.current?.querySelector(
        "[data-parallax-layers]"
      )
      if (!triggerElement) return

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 0%",
            end: "100% 0%",
            scrub: true,
          },
        })

        tl.to(
          triggerElement.querySelectorAll('[data-parallax-layer="1"]'),
          { yPercent: 40, ease: "none" }
        )
        tl.to(
          triggerElement.querySelectorAll('[data-parallax-layer="2"]'),
          { yPercent: 20, ease: "none" },
          "<"
        )
      })

      ScrollTrigger.refresh()
    }, 150)

    return () => {
      clearTimeout(timer)
      ctx?.revert()
    }
  }, [mounted])

  return (
    <div ref={parallaxRef}>
      <section className="relative" style={{ height: "220vh" }}>
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/* Loading animation — only rendered client-side to avoid hydration mismatch */}
          {mounted && !imageLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[var(--color-cloud)]">
              <div className="relative w-12 h-12 mb-6">
                <div
                  className="absolute inset-0 rounded-full border-2 border-[var(--color-sky-200)]"
                />
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

          <div
            data-parallax-layers
            className="relative w-full h-full"
            style={{ background: "var(--color-cloud)" }}
          >
            {/* Layer 1 — Hero image */}
            <div
              data-parallax-layer="1"
              className="absolute inset-0"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/planewindow2.jpg"
                alt="View from airplane window above the clouds at sunset"
                fill
                priority
                className={`object-cover transition-opacity duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectPosition: "center center" }}
                sizes="100vw"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Layer 2 — Title text */}
            <div
              data-parallax-layer="2"
              className={`absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none transition-opacity duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ willChange: "transform" }}
            >
              <h1
                className="font-body font-bold text-center text-white"
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 8rem)",
                  lineHeight: "105%",
                  letterSpacing: "-0.03em",
                  textShadow:
                    "0 2px 60px rgba(0,0,0,0.25), 0 1px 6px rgba(0,0,0,0.15)",
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
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none z-20"
            style={{
              height: "35%",
              background:
                "linear-gradient(to top, var(--color-cloud) 0%, rgba(248,251,254,0.6) 40%, transparent 100%)",
            }}
          />

          {/* Scroll hint */}
          {imageLoaded && (
            <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 z-[25] flex flex-col items-center gap-2 pointer-events-none">
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
