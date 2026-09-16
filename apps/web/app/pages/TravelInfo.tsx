import React from "react";
import { Compass, ShieldCheck, Sun, Plane, DollarSign } from "lucide-react";

export default function TravelInfo() {
  const guides = [
    {
      icon: Sun,
      title: "Best Time to Visit",
      desc: "The dry season runs from November to April. December to February offers cooler temperatures, while March to May is peak beach weather."
    },
    {
      icon: ShieldCheck,
      title: "Eco-Tourism & Rules",
      desc: "Reef-safe sunscreen is strictly required in Palawan & Siargao. Respect local wildlife, marine sanctuaries, and practice Leave No Trace."
    },
    {
      icon: DollarSign,
      title: "Currency & Payments",
      desc: "Philippine Peso (PHP). Always carry cash in remote islands as small boats and sari-sari stores do not accept credit cards or GCash."
    },
    {
      icon: Plane,
      title: "Island Transfers",
      desc: "Domestic flights (Cebu Pacific, AirAsia, PAL) link Manila & Cebu to regional airports. Ferries connect nearby island clusters."
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Essential Backpacker Tips
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Philippine Travel Info</h1>
        <p className="text-sm sm:text-base text-emerald-100 max-w-2xl">
          Everything you need to know before visiting the Philippines: weather, island logistics, eco-tourism guidelines, and currency tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
