import el_nido_palawan from "../assets/images/1280px-El_Nido_Palawan_2.jpg";
import pagudpud from "../assets/images/1280px-Patapat_Viaduct_in_Pagudpud.jpg";
import banuer_rice_terraces from "../assets/images/banuer_rice_terraces.jpg";
import Boracay_White_Beach from "../assets/images/Boracay_White_Beach.png";
import coron_beach_resort from "../assets/images/coron_beach_resort.jpg";
import danao_adventure_park from "../assets/images/danao_adventure_park.webp";
import donsol from "../assets/images/donsol.webp";
import pangasinan from "../assets/images/pangasinan.jpg";
import puerto_princesa from "../assets/images/puerto_princesa.webp";
import samal_island from "../assets/images/samal_island.webp";
import siargao from "../assets/images/siargao.webp";
import taal_from_tagaytay from "../assets/images/taal_from_tagaytay.jpg";
import snake_island from "../assets/images/snake_island.webp";

const places = [
  {
    id: "el-nido-palawan",
    destination: "El Nido, Palawan",
    title: "Island Hopping in El Nido: Discovering Secret Lagoons & Hidden Beaches",
    category: "Beaches & Islands",
    excerpt: "Palawan is famous worldwide for its limestone karst cliffs, crystal-clear lagoons, and white sand beaches nestled in Bacuit Bay.",
    description: "Palawan is long and narrow and trends northeast-southwest between the South China and Sulu seas. It has a maximum width of 24 miles (39 km) and a mountainous backbone that runs its entire 270-mile length, with Mount Mantalingajan in the south as its highest peak.",
    fullContent: `El Nido is undoubtedly one of the crowning jewels of the Philippines. Located in northern Palawan, Bacuit Archipelago is filled with towering marble cliffs, secret lagoons, and turquoise waters so clear you can see coral gardens right from your kayak.

### Highlights of Tour A & Tour C:
1. **Big Lagoon & Secret Lagoon:** Rent a transparent kayak and glide through narrow limestone openings into quiet, emerald waters.
2. **Shimizu Island:** Fantastic spot for snorkeling with green sea turtles and vibrant clownfish reef communities.
3. **Seven Commandos Beach:** Unwind under swaying coconut trees with fresh buko juice and beach volleyball.

### Travel Tips for Foreign & Local Explorers:
- **Best Time to Visit:** November to April during the dry season.
- **Environmental Fee:** Eco-tourism fee of ₱200 is valid for 10 days. Bring cash as ATMs can run out of bills.
- **Eco-Choice:** Bring re-usable water bottles to avoid single-use plastics on island tours.`,
    img: el_nido_palawan,
    location: "El Nido, MIMAROPA, Philippines",
    rating: 5,
    featured: true,
    publishedAt: "2026-08-20",
    readTime: "6 min read",
    author: {
      name: "Maria Santos",
      role: "Island Explorer & Travel Writer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      bio: "Manila-born backpacker exploring every corner of the 7,641 Philippine islands."
    },
    tags: ["Palawan", "Island Hopping", "Beaches", "Kayaking", "EcoTravel"],
    comments: [
      {
        id: 101,
        author: "Alex Rivers",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-22",
        text: "The Big Lagoon kayak experience was unforgettable! Make sure to book Tour A early in the morning.",
        likes: 12
      },
      {
        id: 102,
        author: "Janine De Cruz",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-25",
        text: "Palawan never fails to amaze. Great travel guide and helpful environmental tips!",
        likes: 8
      }
    ]
  },
  {
    id: "boracay-island",
    destination: "Boracay",
    title: "White Beach Bliss: Sunset Cruises, Food Crawls, & Nightlife in Boracay",
    category: "Beaches & Islands",
    excerpt: "Renowned for soft powdery white sand, Boracay offers world-class dining, water sports, and sunset sailing on traditional Paraw boats.",
    description: "Boracay is a tropical island about an hour's flight from Metro Manila in the Philippines. It has superb long white sand beaches and is one of the country's most developed tourist destinations.",
    fullContent: `Boracay remains legendary for a reason. After its environmental rehabilitation, the island shines brighter than ever with clean shores, strict eco-friendly policies, and crystalline tidepools.

### Must-Do Experiences:
- **Station 1 & Willy's Rock:** Walk on powdery sand that stays cool even under the midday sun.
- **Sunset Paraw Sailing:** Charter a traditional wooden sailboat at 5:30 PM for unmatched golden hour photos.
- **Puka Shell Beach:** Head to the northern tip for a quieter, rustic beach day surrounded by lush hills.`,
    img: Boracay_White_Beach,
    location: "Boracay, Aklan, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-18",
    readTime: "5 min read",
    author: {
      name: "Carlos Reyes",
      role: "Lifestyle & Food Blogger",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      bio: "Foodie and sun-seeker chronicling local street food and coastal resorts."
    },
    tags: ["Boracay", "WhiteBeach", "Sunsets", "FoodCrawl", "WaterSports"],
    comments: [
      {
        id: 201,
        author: "Samantha Bell",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-19",
        text: "The sunsets in Boracay are truly unmatched! Loved the food recommendations.",
        likes: 15
      }
    ]
  },
  {
    id: "siargao-island",
    destination: "Siargao",
    title: "Chasing Waves & Palm Tree Forests: A Week in Siargao's Surf Paradise",
    category: "Surfing & Adventure",
    excerpt: "From Cloud 9's world-famous barrels to coconut palm drives, Siargao captivates surfers and digital nomads alike.",
    description: "Siargao is known to be one of the famous places in the Philippines for surfing. Almost like a teardrop, it's one of the most visited islands, bordered with turquoise blue waters and inland lagoons.",
    fullContent: `Siargao isn't just for pro surfers—it's an island state of mind. Rent a scooter, strap your board on the side, and feel the warm ocean breeze through endless groves of coconut trees.

### Top Spots to Explore:
- **Cloud 9 Boardwalk:** Watch local and international surfers tackle famous right-hand reef breaks.
- **Magpupungko Rock Pools:** Natural tidal infinity pools best visited during low tide for cliff jumping.
- **Maasin River Palm Tree Rope Swing:** Swing into calm river waters from an arching bent coconut tree.`,
    img: siargao,
    location: "Surigao del Norte, Philippines",
    rating: 5,
    featured: true,
    publishedAt: "2026-08-24",
    readTime: "7 min read",
    author: {
      name: "Maria Santos",
      role: "Island Explorer & Travel Writer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      bio: "Manila-born backpacker exploring every corner of the 7,641 Philippine islands."
    },
    tags: ["Siargao", "Surfing", "Cloud9", "Backpacking", "IslandLife"],
    comments: [
      {
        id: 301,
        author: "Markus Lindner",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-26",
        text: "Spent 2 months here as a digital nomad. Siargao has the warmest community!",
        likes: 24
      }
    ]
  },
  {
    id: "banaue-rice-terraces",
    destination: "Banaue Rice Terraces",
    title: "Walking Among Clouds: Hiking the 2,000-Year-Old Banaue Rice Terraces",
    category: "Culture & Heritage",
    excerpt: "Carved into the mountains of Ifugao by indigenous ancestors, these ancient green terraces are a monumental engineering marvel.",
    description: "The famous Banaue Rice Terraces were carved into the mountainsides of Ifugao over 2,000 years ago using primitive tools, creating breathtaking cascading agricultural landscapes.",
    fullContent: `Rising high above the clouds in northern Luzon, the Ifugao Rice Terraces demonstrate harmony between humanity and nature. 

### What to Expect:
- **Batad Rice Terraces Amphitheater:** A UNESCO World Heritage site shaped like a giant natural green bowl.
- **Tappiya Falls:** A challenging downhill trek ending at a powerful 70-meter waterfall basin.
- **Ifugao Cultural Heritage:** Learn about ancient irrigation practices passed down through generations.`,
    img: banuer_rice_terraces,
    location: "Banaue, Ifugao, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-15",
    readTime: "8 min read",
    author: {
      name: "Elena Torralba",
      role: "Culture & Heritage Historian",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      bio: "Documenting indigenous arts, ancestral crafts, and mountain cultures across Luzon."
    },
    tags: ["Banaue", "UNESCO", "Hiking", "Culture", "Ifugao"],
    comments: []
  },
  {
    id: "pagudpud-ilocos",
    destination: "Pagudpud, Ilocos Norte",
    title: "The Boracay of the North: Coastal Drives, Windmills, & White Sand Dunes",
    category: "Road Trips & Coastal",
    excerpt: "Located at the northernmost tip of Luzon, Pagudpud boasts dramatic viaducts, coastal wind farms, and serene turquoise bays.",
    description: "Pagudpud is a coastal town located at the northernmost tip of Ilocos Norte. Known for Bangui Windmills, Patapat Viaduct, and Saud Beach.",
    fullContent: `Road tripping through Ilocos Norte rewards travelers with wide-open highways, giant windmill turbines facing the West Philippine Sea, and the iconic Patapat Viaduct winding around coastal mountainsides.`,
    img: pagudpud,
    location: "Ilocos Norte, Philippines",
    rating: 4,
    featured: false,
    publishedAt: "2026-08-10",
    readTime: "5 min read",
    author: {
      name: "Carlos Reyes",
      role: "Lifestyle & Food Blogger",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      bio: "Foodie and sun-seeker chronicling local street food and coastal resorts."
    },
    tags: ["Pagudpud", "RoadTrip", "Windmills", "Ilocos", "SaudBeach"],
    comments: []
  },
  {
    id: "puerto-princesa-river",
    destination: "Puerto-Princesa",
    title: "Into the Underground River: Exploring Palawan's Subterranean Wonder",
    category: "Nature & Wildlife",
    excerpt: "Navigate through 8.2 kilometers of subterranean cave channels adorned with massive stalactites and natural cathedral chambers.",
    description: "This park features a spectacular limestone karst landscape with an underground river emerging directly into the sea, holding rich biodiversity.",
    fullContent: `The Puerto Princesa Subterranean River National Park is one of the New 7 Wonders of Nature. Boat tours take visitors deep inside dark limestone caverns populated by bats and swallows.`,
    img: puerto_princesa,
    location: "Puerto Princesa, MIMAROPA, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-12",
    readTime: "6 min read",
    author: {
      name: "Maria Santos",
      role: "Island Explorer & Travel Writer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      bio: "Manila-born backpacker exploring every corner of the 7,641 Philippine islands."
    },
    tags: ["PuertoPrincesa", "Caves", "Nature", "Palawan", "UndergroundRiver"],
    comments: []
  },
  {
    id: "coron-palawan",
    destination: "Coron, Palawan",
    title: "Diving WWII Wrecks & Crystal Lakes: The Ultimate Coron Itinerary",
    category: "Diving & Marine Life",
    excerpt: "Famous for WWII Japanese shipwrecks, Kayangan Lake's mirror waters, and thermocline diving in Barracuda Lake.",
    description: "Spread around Coron Island, explore Smith Beach, Banol Beach, WWII shipwrecks, and sacred lakes protected by the Tagbanwa indigenous tribe.",
    fullContent: `Coron offers world-renowned diving. Beneath the calm blue surface lie historic 1944 Japanese supply ships transformed into thriving artificial coral reefs.`,
    img: coron_beach_resort,
    location: "Coron, Palawan, Philippines",
    rating: 5,
    featured: true,
    publishedAt: "2026-08-22",
    readTime: "7 min read",
    author: {
      name: "Elena Torralba",
      role: "Culture & Heritage Historian",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      bio: "Documenting indigenous arts, ancestral crafts, and mountain cultures across Luzon."
    },
    tags: ["Coron", "Diving", "WWIIWrecks", "KayanganLake", "Palawan"],
    comments: []
  },
  {
    id: "tagaytay-taal",
    destination: "Tagaytay",
    title: "Cool Breezes & Taal Views: A Quick Weekend Getaway to Tagaytay",
    category: "Mountain Getaways",
    excerpt: "Perched along a ridge in Cavite, Tagaytay serves up chilly weather, hot Bulalo beef soup, and panoramic views of Taal Volcano.",
    description: "Tagaytay is a popular mountain getaway near Manila known for cool climate, Taal Lake viewpoints, and cozy roadside dining.",
    fullContent: `Just 2 hours south of Manila, Tagaytay is the perfect weekend escape. Indulge in hot bowls of Bulalo while enjoying sweeping views of the iconic volcano island in Taal Lake.`,
    img: taal_from_tagaytay,
    location: "Calabarzon, Cavite, Philippines",
    rating: 4,
    featured: false,
    publishedAt: "2026-08-05",
    readTime: "4 min read",
    author: {
      name: "Carlos Reyes",
      role: "Lifestyle & Food Blogger",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      bio: "Foodie and sun-seeker chronicling local street food and coastal resorts."
    },
    tags: ["Tagaytay", "TaalVolcano", "Foodie", "WeekendGetaway", "Bulalo"],
    comments: []
  }
];

const categories = [
  "All Stories",
  "Beaches & Islands",
  "Surfing & Adventure",
  "Culture & Heritage",
  "Diving & Marine Life",
  "Nature & Wildlife",
  "Road Trips & Coastal",
  "Mountain Getaways"
];

export { places, categories };