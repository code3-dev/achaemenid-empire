import { NextResponse } from "next/server"

export async function GET() {
  try {
    const historicalData = {
      empire: {
        name: "Achaemenid Empire",
        alternativeNames: ["First Persian Empire", "Persian Empire"],
        duration: "550-330 BCE",
        founder: "Cyrus the Great",
        capital: ["Pasargadae", "Persepolis", "Susa", "Ecbatana"],
        peakArea: "5.5 million km²",
        peakPopulation: "50 million (44% of world population)",
        language: "Old Persian",
        religion: "Zoroastrianism (official), Religious tolerance practiced",
      },
      rulers: [
        {
          name: "Cyrus II (the Great)",
          reign: "559-530 BCE",
          achievements: ["Founded the empire", "Conquered Lydia and Babylon", "Created Cyrus Cylinder"],
          deathCause: "Killed in battle against Massagetae",
        },
        {
          name: "Cambyses II",
          reign: "530-522 BCE",
          achievements: ["Conquered Egypt", "Extended empire to Nubia"],
          deathCause: "Died under mysterious circumstances",
        },
        {
          name: "Darius I (the Great)",
          reign: "522-486 BCE",
          achievements: ["Administrative reforms", "Built Persepolis", "Created Royal Road"],
          deathCause: "Natural death",
        },
        {
          name: "Xerxes I",
          reign: "486-465 BCE",
          achievements: ["Invaded Greece", "Completed Persepolis"],
          deathCause: "Assassinated by courtiers",
        },
      ],
      provinces: [
        { name: "Persis", capital: "Persepolis", description: "Heartland province" },
        { name: "Media", capital: "Ecbatana", description: "Former Median kingdom" },
        { name: "Lydia", capital: "Sardis", description: "Wealthy western province" },
        { name: "Babylonia", capital: "Babylon", description: "Mesopotamian center" },
        { name: "Egypt", capital: "Memphis", description: "Nile valley province" },
        { name: "Bactria", capital: "Bactra", description: "Eastern frontier" },
      ],
      timeline: [
        { year: "550 BCE", event: "Cyrus establishes Achaemenid Empire" },
        { year: "539 BCE", event: "Conquest of Babylon" },
        { year: "522 BCE", event: "Darius I becomes king" },
        { year: "518 BCE", event: "Construction of Persepolis begins" },
        { year: "490 BCE", event: "Battle of Marathon" },
        { year: "480 BCE", event: "Battles of Thermopylae and Salamis" },
        { year: "334 BCE", event: "Alexander begins conquest" },
        { year: "330 BCE", event: "Fall of the empire" },
      ],
    }

    return NextResponse.json(historicalData)
  } catch (error) {
    console.error("Error fetching historical data:", error)
    return NextResponse.json({ error: "Failed to fetch historical data" }, { status: 500 })
  }
}
