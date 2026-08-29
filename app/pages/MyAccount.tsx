import React from "react";
import { User, Bookmark, MapPin, Sparkles, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

export default function MyAccount() {
  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-500/20 shadow-md"
          />
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">Maria Santos</h1>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Island Explorer & Backpacker</p>
            <p className="text-xs text-gray-500 flex items-center justify-center sm:justify-start gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Quezon City, Philippines • Member since 2025</span>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">14</span>
            <span className="text-[11px] text-gray-500 font-medium">Stories Read</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">6</span>
            <span className="text-[11px] text-gray-500 font-medium">Saved Spots</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">2</span>
            <span className="text-[11px] text-gray-500 font-medium">Reviews Posted</span>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end pt-4">
          <Button variant="outline" size="sm" className="rounded-xl text-xs font-bold">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
