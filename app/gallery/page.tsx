import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Crown, Mail, Github } from "lucide-react"
import Image from "next/image"
import NavigationWrapper from "@/components/navigation-wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function GalleryPage() {
  const galleries = [
    {
      title: "Persepolis - The Ceremonial Capital",
      description: "Magnificent ruins of the Persian ceremonial capital built by Darius I",
      images: [
        {
          src: "/persepolis.jpg",
          title: "Apadana Palace",
          description: "The great audience hall where the king received tribute from across the empire",
        },
        {
          src: "/gallery/relief-sculptures.jpg",
          title: "Tribute Bearer Reliefs",
          description: "Stone carvings showing delegates from various provinces bringing gifts",
        },
        {
          src: "/gallery/gate.jpg",
          title: "Gate of All Nations",
          description: "Monumental gateway built by Xerxes I with massive winged bulls",
        },
      ],
    },
    {
      title: "Persian Art & Artifacts",
      description: "Exquisite examples of Achaemenid craftsmanship and artistic achievement",
      images: [
        {
          src: "/gallery/cyrus-cylinder.jpg",
          title: "Cyrus Cylinder",
          description: "The world's first charter of human rights, created by Cyrus the Great",
        },
        {
          src: "/gallery/gold-rhyton.jpg",
          title: "Persian Gold Rhyton",
          description: "Ceremonial drinking vessel showing Persian metalworking mastery",
        },
        {
          src: "/gallery/ancient-persian-carpet.jpg",
          title: "Ancient Persian Carpet",
          description: "One of the oldest known Persian carpets, showcasing textile artistry",
        },
      ],
    },
    {
      title: "Royal Tombs & Monuments",
      description: "Final resting places of the great Persian kings",
      images: [
        {
          src: "/gallery/pasargadae.jpg",
          title: "Tomb of Cyrus the Great",
          description: "Simple yet majestic tomb at Pasargadae, still standing after 2,500 years",
        },
        {
          src: "/gallery/naqsh-e-rustam.jpg",
          title: "Naqsh-e Rustam",
          description: "Rock-cut tombs of Darius I, Xerxes I, and other Achaemenid kings",
        },
        {
          src: "/gallery/behistun-inscription.jpg",
          title: "Behistun Inscription",
          description: "Darius I's trilingual inscription proclaiming his legitimacy",
        },
      ],
    },
    {
      title: "Persian Architecture",
      description: "Architectural innovations that influenced civilizations for millennia",
      images: [
        {
          src: "/gallery/hypostyle-halls.jpg",
          title: "Tachara Palace",
          description: "Private palace of Darius I showcasing Persian architectural elegance",
        },
        {
          src: "/gallery/susa-palace.jpg",
          title: "Persian Column Capital",
          description: "Distinctive double-bull capitals that crowned Persian columns",
        },
        {
          src: "/gallery/fire-temple.jpg",
          title: "Zoroastrian Fire Temple",
          description: "Sacred fire temple reflecting Persian religious architecture",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <NavigationWrapper showBackButton={true} />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Persian{" "}
            <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the magnificent architecture, art, and artifacts of the Achaemenid Empire
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {galleries.map((gallery, galleryIndex) => (
            <div key={galleryIndex}>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{gallery.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{gallery.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.images.map((image, imageIndex) => (
                  <Card
                    key={imageIndex}
                    className="group overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{image.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{image.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
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
