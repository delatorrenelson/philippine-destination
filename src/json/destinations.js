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
    id: "batanes-islands",
    destination: "Batanes",
    title: "Rolling Hills & Stone Houses: A Journey to Batanes, the Edge of the Philippines",
    category: "Culture & Heritage",
    excerpt: "Feel the wild ocean winds at Sabtang Lighthouse, marvel at traditional Ivatan stone architecture, and walk through rolling green cliffs.",
    description: "Batanes is the northernmost province of the Philippines, renowned for its dramatic wind-swept lighthouses, stone houses built to withstand typhoons, and breathtaking coastal cliffs.",
    fullContent: `Batanes feels like another realm. Situated between northern Luzon and Taiwan, the archipelago offers cool winds, honest communities, and panoramic views of crashing waves against emerald sea cliffs.

### Unmissable Spots in Batanes:
- **Sabtang Island & Chavayan Village:** Historic Ivatan stone houses with thatched cogon roofs that have survived centuries of Pacific storms.
- **Marlboro Hills (Racuh a Payaman):** Free-roaming horses and cows grazing on emerald hills with views of Mt. Arayat and Mount Iraya.
- **Honesty Coffee Shop:** An un-manned coffee shop where travelers pick their snacks, brew their coffee, and drop exact change in a wooden box!`,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
    location: "Batanes Archipelago, Philippines",
    rating: 5,
    featured: true,
    publishedAt: "2026-08-28",
    readTime: "7 min read",
    author: {
      name: "Hannah Vance",
      role: "Landscape Photographer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      bio: "UK-born travel photographer documenting remote islands and traditional cultures."
    },
    tags: ["Batanes", "Sabtang", "MarlboroHills", "Ivatan", "Photography"],
    comments: [
      {
        id: 401,
        author: "Liam O'Connor",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-28",
        text: "Batanes has been on my bucket list for years! The Honesty Store concept is so heartwarming.",
        likes: 19
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
    id: "moalboal-cebu",
    destination: "Moalboal, Cebu",
    title: "Swimming with Millions of Sardines & Canyoneering at Kawasan Falls",
    category: "Diving & Marine Life",
    excerpt: "Witness the magical Moalboal Sardine Run right off Panagsama Beach, then jump off turquoise waterfalls in Badian.",
    description: "Moalboal in southern Cebu is famous for its natural sardine run spectacle where millions of fish swim in mesmerizing synchronized formations just meters from shore.",
    fullContent: `If you love marine life and adrenaline, Moalboal is your dream playground. Without even taking a boat, you can put on your snorkel mask and swim right into a swirling wall of millions of sardines!

### Best Activities:
1. **Panagsama Sardine Run:** Snorkel alongside massive silver bait balls and resident sea turtles feeding on sea grass.
2. **Kawasan Falls Canyoneering:** Jump from 10-meter cliff ledges into electric-blue natural freshwater pools!
3. **Pescador Island:** World-class scuba diving spot filled with soft corals and frogfish.`,
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
    location: "Moalboal, Cebu, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-27",
    readTime: "6 min read",
    author: {
      name: "Kenji Sato",
      role: "Marine Biologist & Scuba Instructor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      bio: "Ocean conservationist exploring coral reef ecosystems across Southeast Asia."
    },
    tags: ["Cebu", "Moalboal", "SardineRun", "Snorkeling", "Canyoneering"],
    comments: [
      {
        id: 501,
        author: "Chloe Dubois",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        date: "2026-08-28",
        text: "The Kawasan cliff jumps gave me such an adrenaline rush! Moalboal is 10/10.",
        likes: 14
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
    id: "bohol-chocolate-hills",
    destination: "Bohol",
    title: "1,200 Chocolate Hills, Tiny Tarsiers, & Loboc River Paddleboarding",
    category: "Nature & Wildlife",
    excerpt: "Discover Bohol's iconic geological hills that turn brown in dry season, meet endangered tarsiers, and cruise down green jungle rivers.",
    description: "Bohol is a lush island province famous for the Chocolate Hills—over 1,260 symmetrical conical hills—alongside sanctuary protected Philippine Tarsiers.",
    fullContent: `Bohol combines eco-adventure with relaxed island charm. Rent a stand-up paddleboard on the emerald Loboc River or take an ATV tour around the base of the Chocolate Hills.`,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
    location: "Bohol, Visayas, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-16",
    readTime: "6 min read",
    author: {
      name: "Mateo Santos",
      role: "Eco-Tourism Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      bio: "Cebuano adventurer advocating for sustainable wildlife protection."
    },
    tags: ["Bohol", "ChocolateHills", "Tarsiers", "Nature", "LobocRiver"],
    comments: []
  },
  {
    id: "mayon-volcano-albay",
    destination: "Legazpi, Albay",
    title: "ATV Lava Trail Adventures under the Perfect Cone of Mayon Volcano",
    category: "Surfing & Adventure",
    excerpt: "Ride quad bikes across black lava rocks toward the base of Mount Mayon, the world's most perfectly symmetrical stratovolcano.",
    description: "Mount Mayon in Albay is famous for its flawless conical shape. Adventurers ride ATVs through rivers, rice fields, and black volcanic trails up to the 2006 lava wall.",
    fullContent: `Seeing Mount Mayon's majestic silhouette rising above Bicol's green landscape is awe-inspiring. For thrill-seekers, the Black Lava Trail ATV tour delivers heart-pumping excitement through rugged terrain.`,
    img: "https://images.unsplash.com/photo-1618083842247-f5d60927dfa9?w=1200&auto=format&fit=crop&q=80",
    location: "Legazpi City, Bicol, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-21",
    readTime: "5 min read",
    author: {
      name: "Chloe Dubois",
      role: "Mountain Backpacker",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      bio: "French adventurer hiking volcanic peaks and alpine trails around the world."
    },
    tags: ["Mayon", "Volcano", "ATV", "Albay", "Bicol", "Adventure"],
    comments: []
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
    id: "siquijor-island",
    destination: "Siquijor",
    title: "Cliff Jumps & Old Healing Traditions: Uncovering Siquijor's Magic",
    category: "Beaches & Islands",
    excerpt: "Swing from rope swings into Cambugahay Falls' turquoise pools and snorkel in fish-rich marine sanctuaries.",
    description: "Siquijor is an island province in the Central Visayas famous for mystic folklore, pristine waterfalls, white sand beaches, and historic century-old balete trees.",
    fullContent: `Known locally as the "Island of Fire", Siquijor enchants every traveler who steps ashore. From Tarzan rope swings at Cambugahay Falls to snorkeling with giant clams at Tubod Marine Sanctuary.`,
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&auto=format&fit=crop&q=80",
    location: "Siquijor Island, Visayas, Philippines",
    rating: 5,
    featured: false,
    publishedAt: "2026-08-14",
    readTime: "6 min read",
    author: {
      name: "David Miller",
      role: "Solo Travel Vlogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      bio: "Backpacking through Southeast Asia sharing low-budget island tips."
    },
    tags: ["Siquijor", "Waterfalls", "Cambugahay", "IslandLife", "Backpacking"],
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