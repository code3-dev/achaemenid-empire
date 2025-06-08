"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Crown, Menu, X, ArrowLeft } from "lucide-react"
import { useScrollToHash } from "@/hooks/use-scroll-to-hash"

interface NavigationProps {
  showBackButton?: boolean
}

export default function Navigation({ showBackButton = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Use our custom hook for hash scrolling
  useScrollToHash()

  const navLinks = [
    { href: "/rulers", label: "Rulers" },
    { href: "/timeline", label: "Timeline" },
    { href: "/architecture", label: "Architecture" },
    { href: "/gallery", label: "Gallery" },
  ]

  const isActive = (href: string) => pathname === href

  // Handle regular navigation with scroll to top
  const handleNavigation = (href: string) => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }

    // Navigate to the page (scroll to top will be handled by ScrollToTop component)
    router.push(href)
  }

  // Handle hash link navigation
  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If we're already on the home page, just scroll to the section
    if (pathname === "/") {
      const id = href.substring(2) // Remove the '/#'
      const element = document.getElementById(id)

      if (element) {
        const headerOffset = 80 // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Update URL without reloading the page
        window.history.pushState({}, "", href)
      }
    } else {
      // If we're on another page, navigate to home page with the hash
      router.push(href)
    }

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">Achaemenid Empire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`transition-colors ${
                  isActive(link.href) ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/#culture"
              onClick={(e) => handleHashLinkClick(e, "/#culture")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Culture
            </a>
            {showBackButton && (
              <Link href="/">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Home</span>
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {showBackButton && (
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-amber-600">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-amber-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-amber-100 shadow-lg">
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-amber-50 text-amber-600 font-medium border-l-4 border-amber-500"
                      : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/#culture"
                onClick={(e) => handleHashLinkClick(e, "/#culture")}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
              >
                Culture
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
