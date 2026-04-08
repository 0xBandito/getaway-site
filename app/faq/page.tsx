import Link from "next/link"
import FAQAccordion from "@/components/faq/FAQAccordion"

export const metadata = {
  title: "FAQ",
  description:
    "Common questions about booking with Travel With Cameron. Learn about deposits, payment plans, passports, group travel, and why booking with a travel advisor makes all the difference.",
}

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "For cruises and international trips, 3–6 months out is ideal. For groups and peak travel seasons, book 6–12 months ahead. The earlier you lock it in, the better the pricing and selection.",
  },
  {
    question: "Do you charge a booking fee?",
    answer:
      "Fees vary depending on the trip type. Many bookings carry no out-of-pocket fee to you at all. Reach out and Cameron will be upfront about what to expect before anything is agreed to.",
  },
  {
    question: "Can I make payments over time?",
    answer:
      "Yes. Payment plans are available. Cameron will set up a schedule that works for your budget so you can lock in your trip early without paying everything upfront.",
  },
  {
    question: "Do I need a passport?",
    answer:
      "It depends on the destination. US citizens don't need a passport for domestic travel or most Caribbean islands. But for international destinations like Europe, Africa, Asia, and the Maldives, a valid passport is required. Cameron will let you know exactly what you need during the planning process.",
  },
  {
    question: "Do you handle group travel?",
    answer:
      "Absolutely. Family reunions, birthday trips, church groups, friend groups. Cameron negotiates group rates, coordinates rooms and cabins, and handles the logistics so you can just enjoy the trip.",
  },
  {
    question: "What if something goes wrong on my trip",
    answer:
      "That's exactly why you book with a travel advisor. Cameron is your advocate, not a call center. If something goes sideways, he works directly with suppliers to resolve it and get your trip back on track.",
  },
  {
    question: "Why book with Cameron instead of doing it myself?",
    answer:
      "Hours of research, price-matching across dozens of sites, knowing which cabins to avoid and which resorts actually deliver. Cameron handles all of it. You get a better trip, less stress, and someone in your corner if anything goes wrong.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <section className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <div className="bg-cream-gradient">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-4">
            FAQ
          </p>
          <h1 className="font-body text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-6">
            Questions? Cameron has <span className="font-display italic font-medium text-[var(--color-sky)]">answers</span>.
          </h1>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-sky-wash">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>

      {/* Passport section */}
      <div className="bg-cream-gradient">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="p-8 bg-[var(--color-sky-50)] border border-[var(--color-sky-200)]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-2">
                Planning to travel internationally?
              </p>
              <h3 className="font-body text-2xl font-bold tracking-tight text-[var(--color-ink)]">
                Need a passport before you <span className="font-display italic font-medium text-[var(--color-sky)]">travel</span>?
              </h3>
              <p className="font-body text-sm text-[var(--color-muted)] mt-2 leading-relaxed">
                Most international trips require a valid U.S. passport.{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/passports.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-sky)] underline underline-offset-2 hover:opacity-80 transition-opacity duration-200"
                >
                  Apply or renew directly
                </a>{" "}
                through the U.S. Department of State.
              </p>
            </div>
            <a
              href="https://travel.state.gov/content/travel/en/passports.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body shrink-0 whitespace-nowrap"
            >
              Apply for a U.S. Passport →
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cloud-gradient">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="rounded-2xl border border-[var(--color-sky-200)]/30 shadow-sm bg-white/80 backdrop-blur-sm p-8 text-center">
            <h3 className="font-body text-2xl font-bold tracking-tight text-[var(--color-ink)] mb-4">
              Still have <span className="font-display italic font-medium text-[var(--color-sky)]">questions</span>?
            </h3>
            <p className="font-body text-sm text-[var(--color-muted)] mb-6">
              Cameron responds to every inquiry within 24–48 hours.
            </p>
            <Link
              href="/contact"
              className="btn-sky rounded-full px-8 py-3.5 text-sm font-semibold font-body inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
