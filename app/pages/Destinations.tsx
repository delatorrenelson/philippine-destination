import React, { useState } from "react";
import { Link } from "react-router";
import { MapPin, Star, Search, Filter } from "lucide-react";
import { destinations } from "../json/destinations";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";

export default function Destinations() {
  const [search, setSearch] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "MIMAROPA", "Visayas", "Central Visayas", "Western Visayas", "CAR", "Ilocos Region", "Mindanao", "Calabarzon"];

  const filtered = destinations.filter((dest) => {
    const matchesSearch =
      search === "" ||
      dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.province.toLowerCase().includes(search.toLowerCase()) ||
      dest.category.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      selectedRegion === "All" ||
      dest.region.toLowerCase().includes(selectedRegion.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Explore 7,641 Islands
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Philippine Destinations</h1>
        <p className="text-sm sm:text-base text-emerald-100 max-w-2xl">
          Browse curated tourist destinations, hidden beaches, mountain peaks, and diving sanctuaries across Luzon, Visayas, and Mindanao.
        </p>

        {/* Filter Bar */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3 max-w-xl">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destination, island, province..."
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl focus:outline-none focus:bg-white focus:text-gray-900 placeholder:text-emerald-200 transition-all"
            />
            <Search className="w-4 h-4 text-emerald-200 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={item.image}
                alt={item.name}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </span>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>{item.province}</span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{item.region}</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {item.rating}.0
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-gray-400">Spots: {item.popularSpots?.[0]}</span>
                <Link
                  to={`/post/${item.id}`}
                  className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  View Guide →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
