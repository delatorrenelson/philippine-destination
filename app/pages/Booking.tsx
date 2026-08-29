import React from "react";
import { useParams, Link } from "react-router";
import { Calendar, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Booking() {
  const { destination } = useParams<{ destination?: string }>();

  return (
    <div className="py-12 max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Island Booking Concierge
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white capitalize">
            Reserve Tour: {destination?.replace("-", " ") || "Philippine Adventure"}
          </h1>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Book licensed local guides, island-hopping boats, and environmental permits seamlessly.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Target Travel Date</label>
            <input
              type="date"
              className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 dark:text-gray-300">Number of Guests</label>
            <select className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>1 Traveler (Solo Backpacker)</option>
              <option>2 Travelers (Couple)</option>
              <option>3 - 5 Travelers (Group)</option>
              <option>6+ Travelers (Private Charter)</option>
            </select>
          </div>

          <Button type="submit" className="w-full py-3 font-bold rounded-xl shadow-md mt-4">
            Check Availability & Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
}
