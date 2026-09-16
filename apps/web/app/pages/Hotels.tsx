import React from "react";
import { Star, MapPin, Building, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Hotels() {
  const stays = [
    {
      name: "El Nido Resort at Miniloc Island",
      location: "El Nido, Palawan",
      price: "₱18,500 / night",
      rating: 4.9,
      tag: "Luxury Eco-Resort",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Nay Palad Hideaway",
      location: "General Luna, Siargao",
      price: "₱24,000 / night",
      rating: 5.0,
      tag: "All-Inclusive Villa",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Henann Crystal Sands Resort",
      location: "Station 1, Boracay",
      price: "₱8,200 / night",
      rating: 4.8,
      tag: "Beachfront & Skypool",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Staycations & Eco-Resorts
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Featured Island Hotels</h1>
        <p className="text-sm sm:text-base text-emerald-100 max-w-2xl">
          Top-rated beachfront resorts, eco-villas, and backpacker hostels across popular Philippine destinations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stays.map((stay, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={stay.image}
                alt={stay.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                {stay.tag}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1 font-medium text-emerald-600">
                    <MapPin className="w-3 h-3" />
                    {stay.location}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {stay.rating}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {stay.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-sm font-black text-gray-900 dark:text-white">{stay.price}</span>
                <Button size="sm" className="rounded-xl text-xs font-bold">
                  Book Stay
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
