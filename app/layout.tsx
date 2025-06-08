import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Achaemenid Empire - The First Persian Empire",
  description:
    "Explore the history, culture, and legacy of the Achaemenid Empire (550-330 BCE), the largest empire in ancient history spanning three continents.",
  keywords: "Achaemenid Empire, Persian Empire, Cyrus the Great, Darius I, Xerxes, Ancient History, Persepolis",
  authors: [{ name: "Hossein Pira" }],
  openGraph: {
    title: "Achaemenid Empire - The First Persian Empire",
    description: "Discover the greatest empire of the ancient world",
    type: "website",
  },
  generator: 'Hossein Pira',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", rel: "android-chrome" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", rel: "android-chrome" }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
