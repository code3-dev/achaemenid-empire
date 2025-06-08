import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import NavigationWrapper from "@/components/navigation-wrapper"
import { Crown, Mail, Github } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function RulersPage() {
  const rulers = [
    {
      name: "Cyrus II (Cyrus the Great)",
      reign: "559-530 BCE",
      title: "Founder of the Achaemenid Empire",
      birthPlace: "Anshan, Persis",
      achievements: [
        "Founded the Achaemenid Empire by uniting Persian tribes",
        "Conquered the Lydian Empire and Greek city-states of Ionia",
        "Captured Babylon and freed the Jewish exiles",
        "Created the Cyrus Cylinder, first charter of human rights",
        "Established policy of religious and cultural tolerance",
      ],
      legacy:
        "Known as 'the Great' for his military genius and humanitarian policies. Respected by Greeks, Jews, and Persians alike.",
      image:
        "/rulers/cyrus.jpg",
    },
    {
      name: "Cambyses II",
      reign: "530-522 BCE",
      title: "Conqueror of Egypt",
      birthPlace: "Pasargadae, Persis",
      achievements: [
        "Successfully conquered Egypt in 525 BCE",
        "Defeated Pharaoh Psamtik III at the Battle of Pelusium",
        "Extended Persian rule to the borders of Nubia",
        "Maintained control over vast territories inherited from Cyrus",
      ],
      legacy:
        "Expanded the empire to its greatest territorial extent in Africa, though his reign was marked by internal conflicts.",
      image:
        "/rulers/cambyses-ii.jpg",
    },
    {
      name: "Darius I (Darius the Great)",
      reign: "522-486 BCE",
      title: "The Great Administrator",
      birthPlace: "Persepolis, Persis",
      achievements: [
        "Reorganized the empire into 20 satrapies (provinces)",
        "Built the magnificent ceremonial capital at Persepolis",
        "Constructed the Royal Road spanning 2,500 kilometers",
        "Established standardized currency and weights/measures",
        "Created efficient postal and communication systems",
        "Commissioned the Behistun Inscription",
      ],
      legacy:
        "Transformed the empire from a collection of conquered territories into a well-organized administrative state.",
      image:
        "/rulers/darius-i.jpg",
    },
    {
      name: "Xerxes I",
      reign: "486-465 BCE",
      title: "King of Kings, Great King",
      birthPlace: "Persepolis, Persis",
      achievements: [
        "Led the largest military expedition in ancient history against Greece",
        "Completed the construction of Persepolis",
        "Built the Xerxes Canal through Mount Athos",
        "Constructed pontoon bridges across the Hellespont",
        "Suppressed revolts in Egypt and Babylon",
      ],
      legacy:
        "Famous for his invasion of Greece, including battles at Thermopylae and Salamis. Despite military setbacks, maintained empire's stability.",
      image:
        "/rulers/xerxes-i.jpg",
    },
    {
      name: "Artaxerxes I",
      reign: "465-424 BCE",
      title: "Longimanus (Long-handed)",
      birthPlace: "Persepolis, Persis",
      achievements: [
        "Restored stability after his father Xerxes' assassination",
        "Negotiated the Peace of Callias with Athens (449 BCE)",
        "Supported the rebuilding of Jerusalem and the Second Temple",
        "Maintained control over Egypt despite revolts",
        "Promoted arts and culture throughout the empire",
      ],
      legacy: "Brought peace and prosperity to the empire after the turbulent Greek wars.",
      image:
        "/rulers/artaxerxes-i.jpg",
    },
    {
      name: "Darius III",
      reign: "336-330 BCE",
      title: "Last Achaemenid King",
      birthPlace: "Persepolis, Persis",
      achievements: [
        "Attempted to resist Alexander the Great's invasion",
        "Led Persian forces at Gaugamela and Issus",
        "Maintained loyalty of many eastern provinces",
        "Offered substantial terms for peace with Alexander",
      ],
      legacy: "The last Achaemenid ruler, whose defeat by Alexander marked the end of the Persian Empire.",
      image:
        "/rulers/darius-III.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <NavigationWrapper showBackButton={true} />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Great{" "}
            <span className="text-red-600">Rulers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the legendary kings who built and ruled the greatest empire of the ancient world
          </p>
        </div>
      </section>

      {/* Rulers Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rulers.map((ruler, index) => (
              <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col">
                  <div className="relative">
                    <Image
                      src={ruler.image || "/placeholder.svg"}
                      alt={ruler.name}
                      width={800}
                      height={800}
                      className="w-full h-140"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-amber-600 text-white">{ruler.reign}</Badge>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-gray-900 mb-2">{ruler.name}</CardTitle>
                      <CardDescription className="text-sm text-amber-600 font-medium mb-1">
                        {ruler.title}
                      </CardDescription>
                      <p className="text-xs text-gray-500">Born in {ruler.birthPlace}</p>
                    </CardHeader>

                    <CardContent className="p-0 flex-1">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Major Achievements:</h4>
                        <ul className="space-y-1.5">
                          {ruler.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-amber-50 rounded-lg p-3 border-l-3 border-amber-400 mt-auto">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Legacy:</h4>
                        <p className="text-gray-700 text-xs italic">{ruler.legacy}</p>
                      </div>
                    </CardContent>
                  </div>
                </div>
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
