"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import TripTypeChips from "./TripTypeChips"

type FormState = {
  name: string
  contact: string
  destinations: string
  when: string
  travelers: string
  budget: string
  passport: string
  notes: string
  tripType: string
}

const initialState: FormState = {
  name: "",
  contact: "",
  destinations: "",
  when: "",
  travelers: "",
  budget: "",
  passport: "",
  notes: "",
  tripType: "",
}

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    const destination = searchParams.get("destination")
    const type = searchParams.get("type")
    setForm((prev) => ({
      ...prev,
      destinations: destination ? decodeURIComponent(destination) : "",
      tripType: type ? decodeURIComponent(type) : "",
    }))
  }, [searchParams])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `New Trip Inquiry — ${form.destinations || "General"}`,
          from_name: form.name,
          contact: form.contact,
          destinations: form.destinations,
          when: form.when,
          travelers: form.travelers,
          budget: form.budget,
          passport: form.passport,
          notes: form.notes,
          trip_type: form.tripType,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setForm(initialState)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <p
          className="text-5xl font-light text-[#1C3F6E] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          You're on Cameron's radar.
        </p>
        <p
          className="text-[#5B7FA6] text-lg"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Expect to hear back within 24–48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Cameron header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#D8E8F8] flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#4A90D9]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-[#4A90D9]">
            Cameron
          </p>
          <p
            className="text-xl font-light text-[#1C3F6E]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Hey — where have you been dreaming of going?
          </p>
        </div>
      </div>

      {/* Destinations — top of form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Destination(s)
          </label>
          <input
            type="text"
            name="destinations"
            value={form.destinations}
            onChange={handleChange}
            placeholder="Caribbean, Europe, open to ideas..."
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-transparent text-[#1C3F6E] placeholder-[#8BACC8] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            When Are You Thinking?
          </label>
          <input
            type="text"
            name="when"
            value={form.when}
            onChange={handleChange}
            placeholder="Summer 2025, flexible..."
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-transparent text-[#1C3F6E] placeholder-[#8BACC8] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          />
        </div>
      </div>

      {/* Trip type chips */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-3">
          Type of Trip
        </label>
        <TripTypeChips
          selected={form.tripType}
          onChange={(val) => setForm((prev) => ({ ...prev, tripType: val }))}
        />
      </div>

      <div className="border-t border-[#D8E8F8]" />

      {/* Name and contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="First name is fine"
            required
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-transparent text-[#1C3F6E] placeholder-[#8BACC8] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Best Way To Reach You
          </label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Email or phone"
            required
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-transparent text-[#1C3F6E] placeholder-[#8BACC8] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          />
        </div>
      </div>

      {/* Travelers, budget, passport */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Travelers
          </label>
          <select
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-[#F0F6FF] text-[#1C3F6E] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <option value="">Select...</option>
            <option>Just me</option>
            <option>2 people</option>
            <option>3–4 people</option>
            <option>5–8 people</option>
            <option>9+ people</option>
          </select>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Budget Per Person
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-[#F0F6FF] text-[#1C3F6E] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <option value="">Select...</option>
            <option>Under $1,000</option>
            <option>$1,000 – $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
            Valid Passport?
          </label>
          <select
            name="passport"
            value={form.passport}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D8E8F8] bg-[#F0F6FF] text-[#1C3F6E] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
            <option>In progress</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-[#4A90D9] mb-2">
          Anything Else Cameron Should Know?
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Anniversary trip, bucket list, dietary needs, budget details..."
          rows={5}
          className="w-full px-4 py-3 border border-[#D8E8F8] bg-transparent text-[#1C3F6E] placeholder-[#8BACC8] focus:outline-none focus:border-[#4A90D9] transition-colors duration-200 resize-none"
          style={{ fontFamily: "var(--font-jost)" }}
        />
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between">
        <p
          className="text-sm text-[#4A90D9] italic"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Cameron responds within 24–48 hours.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-10 py-4 bg-[#4A90D9] text-white text-sm tracking-widest uppercase hover:bg-[#3a7bc8] transition-colors duration-200 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send To Cameron →"}
        </button>
      </div>

      {status === "error" && (
        <p
          className="text-red-500 text-sm text-center"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Something went wrong. Please try again or reach out directly.
        </p>
      )}
    </form>
  )
}