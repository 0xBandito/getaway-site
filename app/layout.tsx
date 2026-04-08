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

const BASE_URL = "https://getawaywithcam.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Travel With Cameron — Personalized Travel Planning",
    template: "%s | Travel With Cameron",
  },
  description:
    "Personalized travel experiences crafted around you. Let Cameron plan your dream trip to the Caribbean, Europe, Maldives, and beyond. 500+ trips planned, 98% client satisfaction.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Travel With Cameron",
    title: "Travel With Cameron — Personalized Travel Planning",
    description:
      "Personalized travel experiences crafted around you. Let Cameron plan your dream trip to the Caribbean, Europe, Maldives, and beyond.",
    images: [
      {
        url: "/images/planewindow2.jpg",
        width: 1200,
        height: 630,
        alt: "Travel With Cameron — Personalized Travel Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel With Cameron — Personalized Travel Planning",
    description:
      "Personalized travel experiences crafted around you. Let Cameron plan your dream trip to the Caribbean, Europe, Maldives, and beyond.",
    images: ["/images/planewindow2.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: BASE_URL,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Travel With Cameron",
              url: BASE_URL,
              description:
                "Personalized travel planning built around you. Cruises, all-inclusive resorts, international trips, and more.",
              areaServed: "Worldwide",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "500",
                bestRating: "5",
              },
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}