import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rulers - Achaemenid Empire",
  description: "Learn about the great kings and rulers of the Achaemenid Empire, from Cyrus the Great to Darius III, and their contributions to the Persian civilization.",
  keywords: "Achaemenid Rulers, Persian Kings, Cyrus the Great, Darius I, Xerxes I, Ancient Persian Monarchs",
  openGraph: {
    title: "Rulers of the Achaemenid Empire",
    description: "The kings who built and expanded the first Persian Empire",
    type: "website",
  },
}

export default function RulersLayout({
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