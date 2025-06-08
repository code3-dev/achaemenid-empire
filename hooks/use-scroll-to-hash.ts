"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToHash() {
  const pathname = usePathname()

  // This effect runs on route changes
  useEffect(() => {
    if (!pathname) return

    // Check if there's a hash in the URL
    const hash = window.location.hash

    if (hash) {
      // Remove the '#' character
      const id = hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for any layout shifts to settle
        setTimeout(() => {
          const headerOffset = 80 // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    } else {
      // If there's no hash, scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [pathname])
}
