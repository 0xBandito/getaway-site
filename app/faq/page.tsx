"use client"

import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "For cruises and international trips, 3–6 months out is ideal. Groups and peak travel seasons — book 6–12 months ahead. The earlier you lock it in, the better the pricing and selection.",
  },
  {
    question: "Do you charge a booking fee?",
    answer:
      "Fees vary depending on the trip type. Many bookings carry no out-of-pocket fee to you at all — reach out and Cameron will be upfront about what to expect before anything is agreed to.",
  },
  {
    question: "Can I make payments over time?",
    answer:
      "Yes. Payment plans are available. Cameron will set up a schedule that works for your budget so you can lock in your trip early without paying everything upfront.",
  },
  {
    question: "Do I need a passport?",
    answer:
      "It depends on the destination. US citizens don't need a passport for domestic travel or most Caribbean islands. But for international destinations — Europe, Africa, Asia, the Maldives — a valid passport is required. Cameron will let you know exactly what you need during the planning process.",
  },
  {
    question: "Do you handle group travel?",
    answer:
      "Absolutely. Family reunions, birthday trips, church groups, friend groups — Cameron negotiates group rates, coordinates rooms and cabins, and handles the logistics so you can just enjoy the trip.",
  },
  {
    question: "What if something goes wrong on my trip",
    answer:
      "That's exactly why you book with a travel advisor. Cameron is your advocate — not a call center. If something goes sideways, he works directly with suppliers to resolve it and get your trip back on track.",
  },
  {
    question: "Why book with Cameron instead of doing it myself?",
    answer:
      "Hours of research, price-matching across dozens of sites, knowing which cabins to avoid and which resorts actually deliver — Cameron handles all of it. You get a better trip, less stress, and someone in your corner if anything goes wrong.",
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs tracking-widest uppercase text-[#4A90D9] mb-4">
          FAQ
        </p>
        <h1
          className="text-5xl md:text-6xl font-light text-[#1C3F6E] mb-16"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Questions? Cameron has answers.
        </h1>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-[#D8E8F8] last:border-b"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <p
                  className="text-lg text-[#1C3F6E] pr-8"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {faq.question}
                </p>
                <span className="text-[#4A90D9] text-xl shrink-0">
                  {open === index ? "−" : "+"}
                </span>
              </button>
              {open === index && (
                <div className="pb-6">
                  <p
                    className="text-[#5B7FA6] leading-relaxed"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Passport section */}
        <div className="mt-12 p-8 bg-[#1C3F6E] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase text-[#8BACC8] mb-2"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Planning to travel internationally?
            </p>
            <h3
              className="text-2xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Need a passport before you travel?
            </h3>
            <p
              className="text-sm text-[#8BACC8] mt-2 leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Most international trips require a valid U.S. passport. Apply or
              renew directly through the U.S. Department of State.
            </p>
          </div>
          
            <a href="https://travel.state.gov/content/travel/en/passports.html"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-[#4A90D9] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#3a7bc8] transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Apply for a U.S. Passport →
          </a>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-white border border-[#D8E8F8] text-center">
          <p
            className="text-2xl font-light text-[#1C3F6E] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Still have questions?
          </p>
          <p
            className="text-sm text-[#5B7FA6] mb-6"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Cameron responds to every inquiry within 24–48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}