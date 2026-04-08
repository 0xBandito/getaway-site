"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import TripTypeChips from "./TripTypeChips"

type FormState = {
  name: string
  email: string
  phone: string
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
  email: "",
  phone: "",
  destinations: "",
  when: "",
  travelers: "",
  budget: "",
  passport: "",
  notes: "",
  tripType: "",
}

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-[var(--color-sky-200)]/40 bg-white text-[var(--color-ink)] placeholder-[var(--color-muted)]/50 font-body text-sm focus:outline-none focus:border-[var(--color-sky)] transition-colors duration-200"

const selectClass =
  "w-full px-4 py-3 rounded-lg border border-[var(--color-sky-200)]/40 bg-[var(--color-sky-50)] text-[var(--color-ink)] font-body text-sm focus:outline-none focus:border-[var(--color-sky)] transition-colors duration-200"

const labelClass =
  "block font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sky)] mb-2"

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [contactError, setContactError] = useState("")

  // URL param pre-population — DO NOT MODIFY
  useEffect(() => {
    const destination = searchParams.get("destination")
    const type = searchParams.get("type")
    setForm((prev) => ({
      ...prev,
      destinations: destination ? decodeURIComponent(destination) : "",
      tripType: type ? decodeURIComponent(type) : "",
    }))
  }, [searchParams])

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setContactError("")

    if (!form.email && !form.phone) {
      setContactError("Please provide at least an email address or phone number.")
      return
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setContactError("Please enter a valid email address.")
      return
    }

    if (form.phone && form.phone.replace(/\D/g, "").length < 10) {
      setContactError("Please enter a valid 10-digit phone number.")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Trip Inquiry — ${form.destinations || "General"}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
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
        window.scrollTo({ top: 0, behavior: "smooth" })
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
        <p className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-ink)] mb-4">
          You&apos;re on Cameron&apos;s radar.
        </p>
        <p className="font-body text-lg text-[var(--color-muted)]">
          Expect to hear back within 24–48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Cameron header */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 rounded-full bg-[var(--color-sky-100)] flex items-center justify-center">
          <svg className="w-6 h-6 text-[var(--color-sky)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-[var(--color-sky)]">
            Cameron
          </p>
          <p className="font-display text-xl font-medium text-[var(--color-ink)]">
            Hey, where have you been dreaming of going?
          </p>
        </div>
      </div>

      {/* Destinations + When */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Destination(s)</label>
          <input
            type="text"
            name="destinations"
            value={form.destinations}
            onChange={handleChange}
            placeholder="Caribbean, Europe, open to ideas..."
            className={inputClass}
          />
          <p className="font-body text-xs text-[var(--color-muted)]/60 mt-1.5 italic">
            Not limited to our featured destinations — Cameron plans trips worldwide.
          </p>
        </div>
        <div>
          <label className={labelClass}>When Are You Thinking?</label>
          <input
            type="text"
            name="when"
            value={form.when}
            onChange={handleChange}
            placeholder="Summer 2026, flexible..."
            className={inputClass}
          />
        </div>
      </div>

      {/* Trip type chips */}
      <div>
        <label className={labelClass}>Type of Trip</label>
        <TripTypeChips
          selected={form.tripType}
          onChange={(val) => setForm((prev) => ({ ...prev, tripType: val }))}
        />
      </div>

      <div className="divider" />

      {/* Name + Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className={labelClass}>Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="First name is fine"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            maxLength={14}
            className={inputClass}
          />
        </div>
      </div>
      {contactError && (
        <p className="font-body text-red-500 text-sm -mt-4">{contactError}</p>
      )}

      {/* Travelers, Budget, Passport */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className={labelClass}>Travelers</label>
          <select name="travelers" value={form.travelers} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            <option>Just me</option>
            <option>2 people</option>
            <option>3–4 people</option>
            <option>5–8 people</option>
            <option>9+ people</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget Per Person</label>
          <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            <option>Under $1,000</option>
            <option>$1,000 – $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Valid Passport?</label>
          <select name="passport" value={form.passport} onChange={handleChange} className={selectClass}>
            <option value="">Select...</option>
            <option>Yes</option>
            <option>No</option>
            <option>In progress</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass}>Anything Else Cameron Should Know?</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Anniversary trip, bucket list, dietary needs, budget details..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-[var(--color-sky)] italic">
          Cameron responds within 24–48 hours.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-sky px-8 py-3.5 rounded-full text-sm font-semibold font-body disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send To Cameron →"}
        </button>
      </div>

      {status === "error" && (
        <p className="font-body text-red-500 text-sm text-center">
          Something went wrong. Please try again or reach out directly.
        </p>
      )}
    </form>
  )
}
