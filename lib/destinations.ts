
// <!-- DESTINATION LIST -->
// /destinations/caribbean        → chip: "Caribbean cruise"
// /destinations/mexico           → chip: "All-inclusive resort"
// /destinations/europe           → chip: "Europe tour"
// /destinations/mediterranean    → chip: "Europe tour"
// /destinations/hawaii           → chip: "All-inclusive resort"
// /destinations/maldives         → chip: "Honeymoon"
// /destinations/southeast-asia   → chip: "Group trip"
// /destinations/africa           → chip: "Group trip"
// /destinations/central-america  → chip: "Not sure yet"
// /destinations/south-america    → chip: "Not sure yet"
// /destinations/cruises          → chip: "Caribbean cruise"
// /destinations/all-inclusive    → chip: "All-inclusive resort"

export type Deal = {
  title: string
  description: string
  price: string
  duration: string
}

export type Destination = {
  slug: string
  name: string
  continent: string
  tagline: string
  description: string
  highlights: string[]
  tripTypes: string[]
  searchQuery: string
  contactChip: string
  deals: Deal[]
}

export const destinations: Destination[] = [
  {
    slug: "caribbean",
    name: "Caribbean",
    continent: "North America",
    tagline: "White sand, blue water, zero agenda.",
    description:
      "The Caribbean is the ultimate escape — 7,000 islands scattered across warm turquoise waters, each with its own personality. From the lush rainforests of St. Lucia to the party energy of Nassau, there's a version of the Caribbean for every kind of traveler.",
    highlights: [
      "Best time to visit: December through April for dry season",
      "Top islands: St. Lucia, Turks & Caicos, Barbados, Aruba",
      "Perfect for: Couples, honeymoons, all-inclusive stays, cruises",
      "Average flight time from Atlanta: 3–4 hours",
    ],
    tripTypes: ["Caribbean cruise", "All-inclusive resort", "Honeymoon"],
    searchQuery: "caribbean beach tropical island",
    contactChip: "Caribbean cruise",
    deals: [
      {
        title: "7-Night Caribbean Cruise",
        description:
          "Sail through the best of the Caribbean with stops in Cozumel, Grand Cayman, and Nassau.",
        price: "From $899/person",
        duration: "7 nights",
      },
      {
        title: "All-Inclusive Aruba Escape",
        description:
          "Five-star resort, all meals included, unlimited beach time. Aruba sits outside the hurricane belt — sunshine guaranteed.",
        price: "From $1,499/person",
        duration: "5 nights",
      },
    ],
  },
  {
    slug: "mexico",
    name: "Mexico",
    continent: "North America",
    tagline: "Closer than you think. Better than you remember.",
    description:
      "Mexico is one of the most diverse destinations on the planet. Pristine beaches in Cancún, ancient ruins in the Yucatán, world-class food in Mexico City — and all of it just a short flight from the US.",
    highlights: [
      "Best time to visit: November through April",
      "Top spots: Cancún, Tulum, Los Cabos, Mexico City, Playa del Carmen",
      "Perfect for: All-inclusive resorts, couples, spring break, family trips",
      "Average flight time from Atlanta: 3–4 hours",
    ],
    tripTypes: ["All-inclusive resort", "Group trip", "Honeymoon"],
    searchQuery: "mexico beach resort cancun tulum",
    contactChip: "All-inclusive resort",
    deals: [
      {
        title: "Cancún All-Inclusive Package",
        description:
          "Beachfront resort, all meals and drinks, airport transfers. The most popular trip we book.",
        price: "From $799/person",
        duration: "4 nights",
      },
      {
        title: "Los Cabos Luxury Escape",
        description:
          "Where the desert meets the sea. Five-star resorts, world-class dining, and some of the best sunsets on the planet.",
        price: "From $1,299/person",
        duration: "5 nights",
      },
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    continent: "Europe",
    tagline: "History, food, culture. Every city a different world.",
    description:
      "Europe rewards the curious. Whether you're sipping espresso in Rome, walking the streets of Paris, or island-hopping in Greece, every corner of this continent has something that stops you in your tracks.",
    highlights: [
      "Best time to visit: April through June, September through October",
      "Top cities: Paris, Rome, Barcelona, Amsterdam, Prague",
      "Perfect for: Couples, solo travelers, group tours, honeymoons",
      "Average flight time from Atlanta: 9–11 hours",
    ],
    tripTypes: ["Europe tour", "Honeymoon", "Group trip"],
    searchQuery: "europe travel city architecture",
    contactChip: "Europe tour",
    deals: [
      {
        title: "10-Night Western Europe Tour",
        description:
          "Paris, Rome, and Barcelona in one seamless trip. Hotels, transfers, and guided tours included.",
        price: "From $2,499/person",
        duration: "10 nights",
      },
      {
        title: "Greek Island Hopper",
        description:
          "Santorini, Mykonos, and Athens. Ferry transfers, boutique hotels, and curated experiences.",
        price: "From $2,199/person",
        duration: "8 nights",
      },
    ],
  },
  {
    slug: "mediterranean",
    name: "Mediterranean",
    continent: "Europe",
    tagline: "Sun-soaked coastlines and food you'll dream about.",
    description:
      "The Mediterranean is a state of mind — slow mornings, long lunches, warm evenings by the water. From the Amalfi Coast to the Turkish Riviera, this region delivers beauty at every turn.",
    highlights: [
      "Best time to visit: May through October",
      "Top spots: Amalfi Coast, Santorini, Dubrovnik, Montenegro, Turkish Riviera",
      "Perfect for: Honeymoons, cruises, couples, luxury travel",
      "Average flight time from Atlanta: 10–12 hours",
    ],
    tripTypes: ["Honeymoon", "Caribbean cruise", "Europe tour"],
    searchQuery: "mediterranean coast sea cliffs sunset",
    contactChip: "Europe tour",
    deals: [
      {
        title: "Mediterranean Cruise",
        description:
          "12 nights sailing the Med with stops in Italy, Greece, Croatia, and Spain.",
        price: "From $1,899/person",
        duration: "12 nights",
      },
      {
        title: "Amalfi Coast & Rome",
        description:
          "Start in Rome, drive the Amalfi Coast, end in Positano. Boutique hotels, private transfers.",
        price: "From $2,799/person",
        duration: "9 nights",
      },
    ],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    continent: "North America",
    tagline: "The mainland's greatest escape.",
    description:
      "Hawaii is America's paradise — volcanic peaks, rainforests, and beaches that look like they belong in a dream. Each island has its own character, from the energy of Oahu to the seclusion of Kauai.",
    highlights: [
      "Best time to visit: April through June, September through November",
      "Top islands: Maui, Oahu, Kauai, Big Island",
      "Perfect for: Honeymoons, families, couples, adventure travelers",
      "Average flight time from Atlanta: 9–10 hours",
    ],
    tripTypes: ["Honeymoon", "All-inclusive resort", "Group trip"],
    searchQuery: "hawaii beach volcanic island tropical",
    contactChip: "All-inclusive resort",
    deals: [
      {
        title: "Maui Honeymoon Package",
        description:
          "Oceanfront resort, couples spa treatment, sunset dinner cruise. The most romantic week of your life.",
        price: "From $2,199/couple",
        duration: "6 nights",
      },
      {
        title: "Island Hopper — Oahu & Maui",
        description:
          "Best of both worlds. Experience the energy of Honolulu and the serenity of Maui in one trip.",
        price: "From $1,899/person",
        duration: "8 nights",
      },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    continent: "Asia",
    tagline: "The most beautiful place on earth. Full stop.",
    description:
      "The Maldives is the pinnacle of luxury travel — overwater bungalows, crystal-clear lagoons, and a level of seclusion that makes the real world disappear completely. This is the trip people save up for and never forget.",
    highlights: [
      "Best time to visit: November through April",
      "Top atolls: North Malé, South Malé, Baa, Ari",
      "Perfect for: Honeymoons, anniversaries, luxury travelers",
      "Average flight time from Atlanta: 18–20 hours",
    ],
    tripTypes: ["Honeymoon", "All-inclusive resort"],
    searchQuery: "maldives overwater bungalow lagoon luxury",
    contactChip: "Honeymoon",
    deals: [
      {
        title: "Overwater Bungalow Escape",
        description:
          "7 nights in your own overwater villa, all-inclusive dining, snorkeling, and sunset cruises.",
        price: "From $4,999/couple",
        duration: "7 nights",
      },
    ],
  },
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    continent: "Asia",
    tagline: "Ancient temples, street food, and beaches that cost next to nothing.",
    description:
      "Southeast Asia is the ultimate adventure destination — impossibly cheap, endlessly fascinating, and packed with experiences you can't find anywhere else. Thailand, Bali, Vietnam, Cambodia — each country is a world of its own.",
    highlights: [
      "Best time to visit: November through March",
      "Top destinations: Bali, Bangkok, Phuket, Hoi An, Siem Reap",
      "Perfect for: Group trips, solo travelers, adventure, budget luxury",
      "Average flight time from Atlanta: 20–22 hours",
    ],
    tripTypes: ["Group trip", "Europe tour"],
    searchQuery: "southeast asia temple bali thailand beach",
    contactChip: "Group trip",
    deals: [
      {
        title: "Bali Bliss",
        description:
          "Rice terraces, temple ceremonies, and infinity pools. 8 nights in the Island of the Gods.",
        price: "From $1,499/person",
        duration: "8 nights",
      },
      {
        title: "Thailand & Cambodia Explorer",
        description:
          "Bangkok street food, Chiang Mai temples, Angkor Wat at sunrise. A trip that changes your perspective.",
        price: "From $1,899/person",
        duration: "10 nights",
      },
    ],
  },
  {
    slug: "africa",
    name: "Africa",
    continent: "Africa",
    tagline: "Nothing prepares you for your first safari.",
    description:
      "Africa is the trip that resets you. Watching the Great Migration in the Serengeti, tracking gorillas in Rwanda, or watching the sun set over Victoria Falls — these are experiences that stay with you for the rest of your life.",
    highlights: [
      "Best time to visit: June through October for safari season",
      "Top destinations: Kenya, Tanzania, South Africa, Rwanda, Botswana",
      "Perfect for: Bucket list trips, group travel, honeymoons, adventure",
      "Average flight time from Atlanta: 15–17 hours",
    ],
    tripTypes: ["Group trip", "Honeymoon"],
    searchQuery: "africa safari savanna wildlife kenya",
    contactChip: "Group trip",
    deals: [
      {
        title: "Kenya & Tanzania Safari",
        description:
          "10 nights across the Masai Mara and Serengeti. Game drives, luxury tented camps, and the Great Migration.",
        price: "From $5,999/person",
        duration: "10 nights",
      },
      {
        title: "South Africa Explorer",
        description:
          "Cape Town, the Winelands, and Kruger National Park. The most accessible African adventure.",
        price: "From $3,499/person",
        duration: "10 nights",
      },
    ],
  },
  {
    slug: "central-america",
    name: "Central America",
    continent: "North America",
    tagline: "Rainforests, volcanoes, and beaches — all in one country.",
    description:
      "Central America is one of the most underrated travel regions in the world. Costa Rica alone packs more biodiversity per square mile than almost anywhere on earth. Add Belize's barrier reef and Guatemala's Mayan ruins and you have a region that punches well above its weight.",
    highlights: [
      "Best time to visit: December through April",
      "Top destinations: Costa Rica, Belize, Guatemala, Panama",
      "Perfect for: Adventure, eco-tourism, couples, family trips",
      "Average flight time from Atlanta: 3–5 hours",
    ],
    tripTypes: ["Group trip", "Not sure yet"],
    searchQuery: "costa rica rainforest waterfall tropical",
    contactChip: "Not sure yet",
    deals: [
      {
        title: "Costa Rica Adventure",
        description:
          "Zip-lining, white water rafting, wildlife tours, and a beach finish. The ultimate active vacation.",
        price: "From $1,799/person",
        duration: "8 nights",
      },
    ],
  },
  {
    slug: "south-america",
    name: "South America",
    continent: "South America",
    tagline: "Machu Picchu. Patagonia. The Amazon. Pick your jaw drop.",
    description:
      "South America is a continent of extremes — the driest desert, the largest rainforest, the longest mountain range, and some of the most vibrant cities on earth. This is a destination for people who want more than a beach.",
    highlights: [
      "Best time to visit: Varies by country — generally April through November",
      "Top destinations: Peru, Argentina, Brazil, Colombia, Chile",
      "Perfect for: Adventure, culture, bucket list, group travel",
      "Average flight time from Atlanta: 7–12 hours",
    ],
    tripTypes: ["Group trip", "Not sure yet"],
    searchQuery: "south america machu picchu patagonia andes",
    contactChip: "Not sure yet",
    deals: [
      {
        title: "Peru & Machu Picchu",
        description:
          "Lima, the Sacred Valley, and Machu Picchu. One of the greatest trips on earth.",
        price: "From $2,499/person",
        duration: "9 nights",
      },
      {
        title: "Patagonia Explorer",
        description:
          "Torres del Paine, glacier trekking, and the end of the world. Not for the faint of heart.",
        price: "From $3,999/person",
        duration: "10 nights",
      },
    ],
  },
  {
    slug: "cruises",
    name: "Cruises",
    continent: "Global",
    tagline: "One ship. Multiple countries. Zero repacking.",
    description:
      "Cruising is one of the best values in travel — one price covers your room, food, entertainment, and transportation between destinations. From Caribbean sailings to Mediterranean voyages, there's a cruise for every budget and travel style.",
    highlights: [
      "Best time to cruise: Caribbean year-round, Mediterranean May–October",
      "Top cruise lines: Royal Caribbean, Carnival, Norwegian, Celebrity, MSC",
      "Perfect for: Families, couples, first-time international travelers, groups",
      "Pro tip: Book early for the best cabin selection and pricing",
    ],
    tripTypes: ["Caribbean cruise", "Group trip"],
    searchQuery: "cruise ship ocean luxury travel",
    contactChip: "Caribbean cruise",
    deals: [
      {
        title: "7-Night Bahamas Cruise",
        description:
          "Nassau, Perfect Day at CocoCay, and Key West. A crowd favorite for first-time cruisers.",
        price: "From $599/person",
        duration: "7 nights",
      },
      {
        title: "14-Night Mediterranean Cruise",
        description:
          "Italy, Greece, Spain, and Croatia from one ship. The easiest way to see Europe.",
        price: "From $1,499/person",
        duration: "14 nights",
      },
    ],
  },
  {
    slug: "all-inclusive",
    name: "All-Inclusive Resorts",
    continent: "Global",
    tagline: "Pay once. Enjoy everything.",
    description:
      "All-inclusive resorts are the stress-free vacation — one price covers your room, meals, drinks, and entertainment. No surprise bills, no planning every meal. Just show up and relax. The best ones are in Mexico, the Caribbean, and the Dominican Republic.",
    highlights: [
      "Best destinations: Cancún, Punta Cana, Jamaica, Aruba, St. Lucia",
      "Top resort brands: Sandals, Secrets, Excellence, Hard Rock, Iberostar",
      "Perfect for: Couples, honeymoons, families, groups",
      "Pro tip: Adults-only resorts offer a completely different experience than family resorts",
    ],
    tripTypes: ["All-inclusive resort", "Honeymoon", "Group trip"],
    searchQuery: "all inclusive resort pool beach luxury",
    contactChip: "All-inclusive resort",
    deals: [
      {
        title: "Sandals Jamaica — Couples Only",
        description:
          "The gold standard of all-inclusive. Unlimited premium dining, butler service, water sports.",
        price: "From $1,899/couple/night",
        duration: "5 nights",
      },
      {
        title: "Punta Cana Family Resort",
        description:
          "Kids clubs, waterparks, family suites, and adults-only pools. Everyone wins.",
        price: "From $899/person",
        duration: "5 nights",
      },
    ],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getDestinationsByContinent(continent: string): Destination[] {
  return destinations.filter((d) => d.continent === continent)
}

export function getAllSlugs(): string[] {
  return destinations.map((d) => d.slug)
}