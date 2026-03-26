import { Suspense } from "react"
import ContactForm from "@/components/contact/ContactForm"

export const metadata = {
  title: "Plan Your Trip | Getaway",
  description:
    "Tell Cameron where you want to go. Get a personalized travel plan built around you within 24–48 hours.",
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  )
}