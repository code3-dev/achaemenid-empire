"use client"

import type React from "react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, MapPin, Calendar, Users, Building, Mail, Github } from "lucide-react"
import Image from "next/image"
import NavigationWrapper from "@/components/navigation-wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const rulers = [
    {
      name: "Cyrus the Great",
      reign: "559-530 BCE",
      title: "Founder of the Empire",
      achievements:
        "Created the largest empire in ancient history, established the Cyrus Cylinder (first charter of human rights)",
      image:
        "/rulers/cyrus.jpg",
    },
    {
      name: "Darius I",
      reign: "522-486 BCE",
      title: "The Great Administrator",
      achievements: "Built Persepolis, established the Royal Road, created efficient administrative system",
      image:
        "/rulers/darius-i.jpg",
    },
    {
      name: "Xerxes I",
      reign: "486-465 BCE",
      title: "King of Kings",
      achievements: "Led massive invasion of Greece, completed construction of Persepolis",
      image:
        "/rulers/xerxes-i.jpg",
    },
  ]

  const provinces = [
    { name: "Persis", capital: "Persepolis", description: "Heartland of the empire" },
    { name: "Media", capital: "Ecbatana", description: "Former Median kingdom" },
    { name: "Lydia", capital: "Sardis", description: "Wealthy western province" },
    { name: "Babylonia", capital: "Babylon", description: "Ancient Mesopotamian center" },
    { name: "Egypt", capital: "Memphis", description: "Nile valley civilization" },
    { name: "Bactria", capital: "Bactra", description: "Eastern frontier province" },
  ]

  // Handle smooth scrolling for the Explore button
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/rulers")
  }

  // Handle smooth scrolling for the Timeline button
  const handleTimelineClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/timeline")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <NavigationWrapper />

      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-red-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center ">
              <img
                src={"Faravahar-Gold.svg.png"}
                alt="Faravahar Symbol"
                className="w-32 h-32 object-contain"
              />
            </div>
            <Badge variant="outline" className="mb-4 text-amber-700 border-amber-300">
              550-330 BCE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The{" "}
              <span className="text-red-600">
                Achaemenid Empire
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The first Persian Empire, spanning three continents and ruling over 44% of the world's population at its
              peak. Discover the legacy of the greatest empire in ancient history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5.5 Million km²</h3>
              <p className="text-gray-600">Largest empire by land area in ancient times</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50 Million</h3>
              <p className="text-gray-600">Population at its peak (44% of world population)</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200">
              <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">220 Years</h3>
              <p className="text-gray-600">Duration of the empire (550-330 BCE)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Great Rulers Section */}
      <section id="rulers" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Great Rulers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionary leaders who built and expanded the greatest empire of the ancient world
            </p>
            <Button
              size="lg"
              className="mt-5 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white shadow-lg"
              onClick={handleExploreClick}
            >
              Explore the Empire
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rulers.map((ruler, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={ruler.image || "/placeholder.svg"}
                    alt={ruler.name}
                    width={400}
                    height={300}
                    className="w-full h-128 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{ruler.reign}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{ruler.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium">{ruler.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{ruler.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Persia Map Section */}
      <section id="map" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empire Map</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The vast territories of the Achaemenid Empire spanning three continents
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl mx-auto max-w-4xl hover:shadow-amber-200/50 transition-all duration-300">
            <a href="/map.jpg" target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src="/map.jpg"
                alt="Map of the Achaemenid Empire"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-6">
                <p className="text-white text-lg font-medium px-4 py-2 bg-black/30 rounded-full backdrop-blur-sm">
                  Click to view full map in new window
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Historical Timeline</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Key events that shaped the Achaemenid Empire</p>
            <Button
              size="lg"
              className="mt-5 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white shadow-lg"
              onClick={handleTimelineClick}
            >
              Explore the Timeline
            </Button>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-red-400"></div>

            <div className="space-y-12">
              {[
                { year: "550 BCE", event: "Cyrus the Great establishes the Achaemenid Empire", side: "left" },
                { year: "539 BCE", event: "Conquest of Babylon, liberation of Jewish exiles", side: "right" },
                { year: "522 BCE", event: "Darius I becomes king, begins administrative reforms", side: "left" },
                { year: "518 BCE", event: "Construction of Persepolis begins", side: "right" },
                { year: "499 BCE", event: "Ionian Revolt begins Greek-Persian conflicts", side: "left" },
                { year: "490 BCE", event: "Battle of Marathon, first Persian invasion of Greece", side: "right" },
                { year: "480 BCE", event: "Xerxes invades Greece, battles of Thermopylae and Salamis", side: "left" },
                { year: "334 BCE", event: "Alexander the Great begins conquest of Persia", side: "right" },
                { year: "330 BCE", event: "Fall of the Achaemenid Empire", side: "left" },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-1/2 ${item.side === "right" ? "pl-8" : "pr-8"}`}>
                    <Card className="bg-white shadow-lg border-l-4 border-l-amber-500">
                      <CardHeader>
                        <CardTitle className="text-lg text-amber-600">{item.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provinces Section */}
      <section id="provinces" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Imperial Provinces</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The vast territories that comprised the Achaemenid Empire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-amber-50 border border-amber-200"
              >
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-lg text-gray-900">{province.name}</CardTitle>
                  </div>
                  <CardDescription className="text-amber-600 font-medium">Capital: {province.capital}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{province.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Legacy Section */}
      <section
        id="culture"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-red-100 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Culture & Legacy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The enduring impact of Persian civilization on world history
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cultural Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Religious Tolerance:</strong> First empire to practice religious freedom and cultural
                    diversity
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Architecture:</strong> Magnificent palaces at Persepolis showcasing Persian artistic
                    excellence
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Administration:</strong> Efficient satrapy system that influenced later empires
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Infrastructure:</strong> Royal Road connecting the empire with postal system
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Human Rights:</strong> Cyrus Cylinder - world's first charter of human rights
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/persepolis.jpg"
                alt="Persepolis ruins"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Persepolis - Ceremonial Capital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src={"Faravahar-Gold.svg.png"}
              alt="Faravahar Symbol"
              className="w-24 h-24 object-contain"
            />
            <div className="flex items-center justify-center space-x-2">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Achaemenid Empire</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Exploring the legacy of the first Persian Empire (550-330 BCE)</p>

          <p className="text-sm text-gray-500">Developed by Hossein Pira</p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6 mt-6">
            <a href="https://t.me/h3dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Telegram</span>
            </a>
            <a href="https://instagram.com/h3dev.pira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="mailto:h3dev.pira@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Mail className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://github.com/code3-dev/achaemenid-empire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Github className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://wa.me/+989039484577" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors">
              <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
