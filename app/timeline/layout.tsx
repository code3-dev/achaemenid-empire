import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeline - Achaemenid Empire",
  description: "Explore the key events and historical timeline of the Achaemenid Empire (550-330 BCE), from its founding by Cyrus the Great to its fall to Alexander.",
  keywords: "Achaemenid Timeline, Persian Empire History, Ancient Persia Events, Cyrus the Great, Darius I, Xerxes",
  openGraph: {
    title: "Timeline of the Achaemenid Empire",
    description: "Key historical events of the first Persian Empire",
    type: "website",
  },
}

export default function TimelineLayout({
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