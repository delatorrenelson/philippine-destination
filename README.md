# 🏝️ Philippine Destination

> **Discover 7,641 Islands of Wonder, Authentic Stories, and Unforgettable Adventures! 🇵🇭✨**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38BDF8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Open_Source-black?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌺 Welcome to Philippine Destination!

**Philippine Destination** is a curated, community-powered travel experience web app designed to showcase the vibrant beauty, diverse culture, and mesmerizing tourist spots across the Philippine archipelago!

Whether you are a **local adventurer (*Kababayans*)** exploring secret weekend staycations or a **foreign wanderer** embarking on your dream tropical island-hopping journey, this platform is your ultimate travel companion. Read authentic travelogues, discover hidden gems, get practical itineraries, and share your own unforgettable errands and stories!

---

## ✨ Why Visit & Contribute?

- **🌴 Explore Beyond the Guidebooks:** Uncover pristine white-sand beaches in Palawan, lush mountain terraces in Banaue, historic colonial towns in Vigan, and cozy coffee spots hidden in Tagaytay.
- **📖 Real Stories by Real Travelers:** Dive into blog-style travelogues written by both local residents and global tourists detailing their authentic experiences, budget tips, food trips, and travel errands.
- **🤝 Share Your Own Journey:** Got a secret itinerary or a memorable travel story? Join our growing community, write your experience, inspire fellow travelers, and make your mark on the Philippine travel map!
- **⚡ Seamless Experience:** Powered by modern web technology, enjoy lightning-fast browsing with rich visuals and responsive layouts optimized for all devices.

---

## 🚀 Key Features

- **📍 Curated Destination Showcase:** Highlighting top-rated destinations, local attractions, and off-the-beaten-path locations.
- **📝 Traveler Experience & Blog Hub:** A space where travelers post detailed accounts of their errands, food crawls, road trips, and island excursions.
- **🏨 Hotels & Accommodations Finder:** Guides to finding the best staycations, eco-resorts, beach huts, and boutique hotels.
- **💡 Practical Travel Information:** Essential travel tips including local transportation options, weather advice, cultural etiquette, and currency guides.
- **👤 Interactive User Account Hub:** Manage your profile, saved destinations, favorite stories, and travel contributions.

---

## 🛠️ Tech Stack

- **Frontend Core:** [React 19](https://reactjs.org/) + [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (Open Source), [Lucide React](https://lucide.dev/)
- **Post-Processing:** PostCSS, Autoprefixer

---

## 📁 Project Structure

```text
philippine-destination/
├── public/                 # Static public assets & favicons
├── src/
│   ├── assets/             # Images, logos, & graphics
│   ├── components/         # Global layout components & UI primitives
│   │   ├── ui/             # Shadcn UI base components (Button.tsx)
│   │   ├── Footer.tsx      # Global brand footer
│   │   ├── Header.tsx      # Global header bar & logo
│   │   └── Navbar.tsx      # Responsive navigation bar
│   ├── features/           # Feature-based domain components
│   │   ├── auth/           # Authentication modal & sign in forms
│   │   ├── comments/       # Comment section & reader discussion threads
│   │   ├── feed/           # Hero card, post grid feed, markdown reader
│   │   ├── sidebar/        # Search widget, category list, tag cloud
│   │   └── theme/          # Light/Dark mode toggle button
│   ├── json/               # Mock datasets (destinations, users, articles, comments)
│   ├── lib/                # Utility functions & helpers (utils.ts)
│   ├── pages/              # Main application page views (.tsx)
│   │   ├── ArticleDetail.tsx # Single article reader view
│   │   ├── Booking.tsx     # Tour reservation concierge
│   │   ├── Contact.tsx     # Contact & community support
│   │   ├── Destinations.tsx# Destination explorer & search
│   │   ├── Home.tsx        # Homepage landing & featured stories
│   │   ├── Hotels.tsx      # Staycations & resort guides
│   │   ├── MyAccount.tsx   # User profile hub
│   │   └── TravelInfo.tsx  # Backpacker travel guides
│   ├── styles/             # Modular CSS stylesheets
│   ├── types/              # TypeScript interface definitions (index.ts)
│   ├── App.css             # Main application styles
│   ├── App.tsx             # Main router & application container
│   ├── index.css           # Tailwind & CSS variables design tokens
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite client & asset type declarations
├── .gitignore              # Git ignore configuration
├── index.html              # HTML entry template
├── package.json            # Dependencies & scripts
├── postcss.config.cjs      # PostCSS configuration
├── README.md               # Project documentation
├── Spec.md                 # Technical specification document
├── tailwind.config.cjs     # Tailwind CSS theme configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Vite node TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite build configuration
```

---

## 💻 Getting Started Locally

Ready to run **Philippine Destination** on your local machine? Follow these easy steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/delatorrenelson/philippine-destination.git
   cd philippine-destination
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to explore the app!

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Contributing

We love contributions from both **developers** and **travel enthusiasts**!

1. Fork the Project Repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingTravelStory`).
3. Commit your Changes (`git commit -m 'Add an amazing new destination story'`).
4. Push to the Branch (`git push origin feature/AmazingTravelStory`).
5. Open a Pull Request.

---

## 🇵🇭 Mabuhay & Happy Traveling!

Thank you for visiting **Philippine Destination**. Pack your bags, share your adventures, and let's celebrate the beauty of the Philippines together! 🎉🌊✈️
