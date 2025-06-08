import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Calendar, Sword, Building, Users, Mail, Github } from "lucide-react"
import NavigationWrapper from "@/components/navigation-wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "550 BCE",
      title: "Foundation of the Empire",
      description: "Cyrus the Great overthrows the Median Empire and establishes the Achaemenid dynasty",
      type: "founding",
      icon: Crown,
      details:
        "Cyrus II of Persia defeats his grandfather Astyages, king of Media, and unites the Persian tribes under his rule.",
    },
    {
      year: "547 BCE",
      title: "Conquest of Lydia",
      description: "Cyrus defeats King Croesus and captures the wealthy kingdom of Lydia",
      type: "military",
      icon: Sword,
      details:
        "The fall of Sardis brings immense wealth to the Persian treasury and control over Greek city-states in Ionia.",
    },
    {
      year: "539 BCE",
      title: "Conquest of Babylon",
      description: "Cyrus captures Babylon without a battle and liberates the Jewish exiles",
      type: "military",
      icon: Sword,
      details:
        "The peaceful conquest of Babylon establishes Cyrus as liberator. He allows exiled peoples to return home and rebuild their temples.",
    },
    {
      year: "530 BCE",
      title: "Death of Cyrus the Great",
      description: "Cyrus dies in battle against the Massagetae, succeeded by his son Cambyses II",
      type: "political",
      icon: Users,
      details: "Cyrus falls fighting Queen Tomyris of the Massagetae. His body is entombed at Pasargadae.",
    },
    {
      year: "525 BCE",
      title: "Conquest of Egypt",
      description: "Cambyses II defeats Pharaoh Psamtik III and adds Egypt to the Persian Empire",
      type: "military",
      icon: Sword,
      details: "The Battle of Pelusium gives Persia control over the Nile Valley and extends the empire into Africa.",
    },
    {
      year: "522 BCE",
      title: "Darius I Becomes King",
      description: "After a period of civil war, Darius I establishes his rule and begins major reforms",
      type: "political",
      icon: Users,
      details: "Darius defeats several pretenders to the throne and records his victory in the Behistun Inscription.",
    },
    {
      year: "518 BCE",
      title: "Construction of Persepolis Begins",
      description: "Darius I starts building the magnificent ceremonial capital at Persepolis",
      type: "cultural",
      icon: Building,
      details:
        "Persepolis becomes the ceremonial heart of the empire, showcasing Persian architectural and artistic achievements.",
    },
    {
      year: "513 BCE",
      title: "Scythian Campaign",
      description: "Darius leads an expedition across the Danube against the Scythians",
      type: "military",
      icon: Sword,
      details: "Though not entirely successful, the campaign extends Persian influence into southeastern Europe.",
    },
    {
      year: "499 BCE",
      title: "Ionian Revolt Begins",
      description: "Greek city-states in Asia Minor rebel against Persian rule with Athenian support",
      type: "military",
      icon: Sword,
      details: "The revolt lasts six years and leads to Persian determination to punish Athens for its interference.",
    },
    {
      year: "490 BCE",
      title: "Battle of Marathon",
      description: "First Persian invasion of Greece ends in defeat at Marathon",
      type: "military",
      icon: Sword,
      details: "Darius I's expedition is defeated by the Athenians, marking the first major Persian military setback.",
    },
    {
      year: "486 BCE",
      title: "Death of Darius I",
      description: "Darius dies while preparing for another invasion of Greece, succeeded by Xerxes I",
      type: "political",
      icon: Users,
      details: "Xerxes inherits his father's determination to conquer Greece and avenge the defeat at Marathon.",
    },
    {
      year: "480 BCE",
      title: "Second Persian Invasion",
      description: "Xerxes leads massive army and navy against Greece, battles of Thermopylae and Salamis",
      type: "military",
      icon: Sword,
      details:
        "Despite initial success at Thermopylae, the Persian fleet is defeated at Salamis, forcing Xerxes to retreat.",
    },
    {
      year: "479 BCE",
      title: "Battle of Plataea",
      description: "Final defeat of Persian land forces in Greece ends the Persian Wars",
      type: "military",
      icon: Sword,
      details: "The Greek victory at Plataea effectively ends Persian expansion into Europe.",
    },
    {
      year: "465 BCE",
      title: "Assassination of Xerxes",
      description: "Xerxes I is murdered by his courtiers, succeeded by Artaxerxes I",
      type: "political",
      icon: Users,
      details: "Palace intrigue leads to Xerxes' death and a brief succession crisis resolved by Artaxerxes I.",
    },
    {
      year: "449 BCE",
      title: "Peace of Callias",
      description: "Treaty between Persia and Athens ends the Greco-Persian Wars",
      type: "political",
      icon: Users,
      details: "The peace treaty establishes spheres of influence and ends decades of conflict.",
    },
    {
      year: "334 BCE",
      title: "Alexander's Invasion Begins",
      description: "Alexander the Great crosses into Asia Minor, beginning the conquest of Persia",
      type: "military",
      icon: Sword,
      details: "Alexander's victory at Granicus River marks the beginning of the end for the Achaemenid Empire.",
    },
    {
      year: "333 BCE",
      title: "Battle of Issus",
      description: "Alexander defeats Darius III, capturing the Persian royal family",
      type: "military",
      icon: Sword,
      details: "Despite being outnumbered, Alexander's tactical genius leads to a decisive victory over Darius III.",
    },
    {
      year: "331 BCE",
      title: "Battle of Gaugamela",
      description: "Alexander's decisive victory over Darius III opens the path to Babylon and Persepolis",
      type: "military",
      icon: Sword,
      details: "The last great battle between Alexander and Darius results in complete Macedonian victory.",
    },
    {
      year: "330 BCE",
      title: "Fall of the Empire",
      description: "Death of Darius III marks the end of the Achaemenid Empire",
      type: "political",
      icon: Users,
      details: "Darius III is murdered by his own satrap Bessus, ending the last Achaemenid resistance to Alexander.",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "founding":
        return "bg-green-500"
      case "military":
        return "bg-red-500"
      case "political":
        return "bg-blue-500"
      case "cultural":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "founding":
        return "Foundation"
      case "military":
        return "Military"
      case "political":
        return "Political"
      case "cultural":
        return "Cultural"
      default:
        return "Event"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <NavigationWrapper showBackButton={true} />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Historical{" "}
            <span className="text-red-600">Timeline</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Journey through 220 years of Persian imperial history, from foundation to fall
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-red-400"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg z-10`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-amber-700 border-amber-300">
                            {event.year}
                          </Badge>
                          <Badge className={`${getTypeColor(event.type)} text-white`}>{getTypeLabel(event.type)}</Badge>
                        </div>
                        <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-base">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm leading-relaxed">{event.details}</p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
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
