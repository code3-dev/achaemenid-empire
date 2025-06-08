import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Architecture - Achaemenid Empire",
  description: "Discover the magnificent architectural achievements of the Achaemenid Empire, including Persepolis, Pasargadae, and other monumental structures that defined Persian imperial style.",
  keywords: "Achaemenid Architecture, Persepolis, Persian Columns, Ancient Persian Buildings, Pasargadae, Apadana Palace",
  openGraph: {
    title: "Architecture of the Achaemenid Empire",
    description: "The monumental buildings and engineering marvels of ancient Persia",
    type: "website",
  },
}

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {children}
    </section>
  )
}