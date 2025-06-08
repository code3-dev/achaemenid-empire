"use client"

import { Suspense } from "react"
import Navigation from "./navigation"

interface NavigationWrapperProps {
  showBackButton?: boolean
}

export default function NavigationWrapper({ showBackButton = false }: NavigationWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200 shadow-sm h-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="h-8 w-8 bg-amber-100 rounded-full animate-pulse"></div>
            <div className="ml-2 h-6 w-32 bg-gray-100 rounded animate-pulse"></div>
            <div className="ml-auto hidden md:flex space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 w-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <Navigation showBackButton={showBackButton} />
    </Suspense>
  )
}
