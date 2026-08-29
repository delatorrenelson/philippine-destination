import React, { useState, useMemo } from "react";
import { places, categories } from "../json/destinations";
import HeroSection from "../components/HeroSection";
import PostFeed from "../components/PostFeed";
import Sidebar from "../components/Sidebar";
import { Compass, Filter } from "lucide-react";

export default function Home({ searchQuery = "", onSearchChange = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [localSearch, setLocalSearch] = useState("");

  const activeSearch = searchQuery || localSearch;

  // Filter posts based on category & search
  const filteredPosts = useMemo(() => {
    return places.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Stories" || post.category === selectedCategory;

      const query = activeSearch.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.destination.toLowerCase().includes(query) ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, activeSearch]);

  const featuredPost = places.find((p) => p.featured) || places[0];

  return (
    <div className="py-6 space-y-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Featured Hero Section */}
      <HeroSection post={featuredPost} />

      {/* Category Filter Pills */}
      <div className="flex items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0">Filter:</span>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 hover:text-emerald-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout: Post Feed (Left) & Sidebar (Right) */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Post Feed */}
        <main className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600" />
              <span>{selectedCategory === "All Stories" ? "Latest Travel Stories" : selectedCategory}</span>
            </h2>
            <span className="text-xs text-gray-400 font-medium">
              Showing {filteredPosts.length} destinations
            </span>
          </div>

          <PostFeed posts={filteredPosts} itemsPerPage={6} />
        </main>

        {/* Sidebar Widget */}
        <Sidebar
          searchQuery={activeSearch}
          onSearchChange={(q) => {
            setLocalSearch(q);
            onSearchChange(q);
          }}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          allPosts={places}
        />
      </div>
    </div>
  );
}
