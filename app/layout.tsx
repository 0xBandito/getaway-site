import type { Metadata } from "next"
import { Lora, Instrument_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: "Travel With Cameron — Personalized Travel Planning",
  description:
    "Personalized travel experiences crafted around you. Let Cameron plan your dream trip to the Caribbean, Europe, Maldives, and beyond.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${instrumentSans.variable} bg-[#F8FBFE] text-[#1C2B36] antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}