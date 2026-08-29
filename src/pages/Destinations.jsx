import React, { useState, useMemo } from "react";
import { places, categories } from "../json/destinations";
import PostFeed from "../components/PostFeed";
import Sidebar from "../components/Sidebar";
import { Compass, MapPin } from "lucide-react";

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return places.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Stories" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.destination.toLowerCase().includes(query) ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-8 space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg">
        <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-4 h-4" />
          <span>7,641 Islands Explorer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black">All Tourist Destinations & Stories</h1>
        <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 max-w-2xl">
          Browse real traveler itineraries, food crawls, island hops, and secret lagoons across the Philippine archipelago.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              <span>{selectedCategory}</span>
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              {filteredPosts.length} Stories Available
            </span>
          </div>

          <PostFeed posts={filteredPosts} itemsPerPage={8} />
        </main>

        <Sidebar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          allPosts={places}
        />
      </div>
    </div>
  );
}
