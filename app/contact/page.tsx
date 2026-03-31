import { Suspense } from "react"
import ContactForm from "@/components/contact/ContactForm"

export const metadata = {
  title: "Plan Your Trip | Travel With Cameron",
  description:
    "Tell Cameron where you want to go. Get a personalized travel plan built around you within 24–48 hours.",
}

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-cream-gradient">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  )
}
