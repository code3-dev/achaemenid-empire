import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Crown, MapPin, Mail, Github } from "lucide-react"
import Image from "next/image"
import NavigationWrapper from "@/components/navigation-wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function ArchitecturePage() {
  const monuments = [
    {
      name: "Persepolis",
      location: "Fars Province, Iran",
      built: "518-465 BCE",
      builder: "Darius I & Xerxes I",
      description: "The ceremonial capital of the Achaemenid Empire, showcasing the pinnacle of Persian architecture",
      features: [
        "Apadana Palace with 72 columns",
        "Gate of All Nations with winged bulls",
        "Throne Hall (Hundred Column Hall)",
        "Treasury and royal residences",
        "Elaborate stone reliefs and carvings",
      ],
      significance: "UNESCO World Heritage Site, symbol of Persian imperial power",
      image:
        "/persepolis.jpg",
      status: "Ruins (destroyed by Alexander 330 BCE)",
    },
    {
      name: "Pasargadae",
      location: "Fars Province, Iran",
      built: "546 BCE",
      builder: "Cyrus the Great",
      description: "First dynastic capital of the Achaemenid Empire and burial place of Cyrus the Great",
      features: [
        "Tomb of Cyrus the Great",
        "Palace P (Audience Hall)",
        "Palace S (Residential Palace)",
        "Sacred Precinct",
        "Persian Gardens (Paradise)",
      ],
      significance: "UNESCO World Heritage Site, birthplace of Persian imperial architecture",
      image:
        "/gallery/pasargadae.jpg",
      status: "Partially preserved ruins",
    },
    {
      name: "Susa Palace",
      location: "Khuzestan Province, Iran",
      built: "521-486 BCE",
      builder: "Darius I",
      description: "Administrative capital and winter residence of Persian kings",
      features: [
        "Apadana Palace complex",
        "Glazed brick decorations",
        "Hypostyle halls",
        "Royal apartments",
        "Fortified citadel",
      ],
      significance: "Major administrative center, showcase of Persian decorative arts",
      image:
        "/gallery/susa-palace.jpg",
      status: "Archaeological site with reconstructed elements",
    },
    {
      name: "Ecbatana",
      location: "Hamadan, Iran",
      built: "8th century BCE (expanded by Persians)",
      builder: "Medes (expanded by Cyrus & Darius)",
      description: "Summer capital of the Persian Empire, former Median capital",
      features: [
        "Seven concentric walls",
        "Royal palace complex",
        "Treasury buildings",
        "Administrative quarters",
        "Defensive fortifications",
      ],
      significance: "Strategic mountain capital, administrative center",
      image:
        "/gallery/ecbatana.jpg",
      status: "Modern city built over ancient ruins",
    },
  ]

  const architecturalFeatures = [
    {
      title: "Column Capitals",
      description: "Distinctive double-animal capitals featuring bulls, lions, and eagles",
      image:
        "/gallery/susa-palace.jpg",
    },
    {
      title: "Relief Sculptures",
      description: "Elaborate stone carvings depicting tribute bearers and royal ceremonies",
      image:
        "/gallery/relief-sculptures.jpg",
    },
    {
      title: "Hypostyle Halls",
      description: "Grand halls supported by forests of tall, slender columns",
      image:
        "/gallery/hypostyle-halls.jpg",
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
            <Building className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Persian{" "}
            <span className="text-red-600">
              Architecture
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magnificent architectural achievements that defined the Achaemenid Empire
          </p>
        </div>
      </section>

      {/* Major Monuments */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Major Monuments</h2>
          <div className="space-y-12">
            {monuments.map((monument, index) => (
              <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-[400px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={monument.image || "/placeholder.svg"}
                      alt={monument.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 z-10">
                      <Badge className="bg-amber-600 text-white mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {monument.location}
                      </Badge>
                      <br />
                      <Badge className="bg-blue-600 text-white">
                        <Calendar className="h-3 w-3 mr-1" />
                        {monument.built}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl md:text-3xl text-gray-900 mb-2">{monument.name}</CardTitle>
                      <CardDescription className="text-lg text-amber-600 font-medium mb-2">
                        Built by {monument.builder}
                      </CardDescription>
                      <p className="text-gray-600">{monument.description}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {monument.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                          <h4 className="font-semibold text-gray-900 mb-1">Significance:</h4>
                          <p className="text-gray-700 text-sm">{monument.significance}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                          <h4 className="font-semibold text-gray-900 mb-1">Current Status:</h4>
                          <p className="text-gray-700 text-sm">{monument.status}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Distinctive Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architecturalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
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
