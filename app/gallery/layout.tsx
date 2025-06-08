import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - Achaemenid Empire",
  description: "Explore a visual collection of Achaemenid Empire artifacts, architecture, and historical sites including Persepolis, royal treasures, and ancient Persian art.",
  keywords: "Achaemenid Gallery, Persian Art, Persepolis Images, Ancient Persian Artifacts, Archaeological Finds",
  openGraph: {
    title: "Gallery of the Achaemenid Empire",
    description: "Visual exploration of Persian imperial art and architecture",
    type: "website",
  },
}

export default function GalleryLayout({
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