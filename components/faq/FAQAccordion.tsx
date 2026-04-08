"use client"

import { useState } from "react"

type FAQ = {
  question: string
  answer: string
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-t border-[var(--color-sky-200)]/30 last:border-b"
        >
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex items-center justify-between py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sky)] focus-visible:ring-offset-2 rounded-lg"
          >
            <p className="font-body text-lg font-semibold text-[var(--color-ink)] pr-8 group-hover:text-[var(--color-sky)] transition-colors duration-200">
              {faq.question}
            </p>
            <span className="text-[var(--color-sky)] text-xl shrink-0 transition-transform duration-200" style={{ transform: open === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
              +
            </span>
          </button>
          {open === index && (
            <div className="pb-6">
              <p className="font-body text-[var(--color-muted)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
