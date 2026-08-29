import React, { useState } from "react";
import { places, categories } from "../json/destinations";
import HeroSection from "../components/HeroSection";
import PostFeed from "../components/PostFeed";
import Sidebar from "../components/Sidebar";

interface HomeProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Home({ searchQuery, onSearchChange }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");

  const featuredPost = places.find((p) => p.featured) || places[0];

  const filteredPosts = places.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Stories" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Featured Hero Section */}
      {!searchQuery && selectedCategory === "All Stories" && (
        <HeroSection post={featuredPost} />
      )}

      {/* Category Pills & Section Title */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === "All Stories"
                ? "Latest Destination Stories"
                : `${selectedCategory} Guides`}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Showing {filteredPosts.length} curated stories from local & foreign backpackers
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid & Sidebar Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="flex-1">
          <PostFeed posts={filteredPosts} itemsPerPage={6} />
        </main>

        <Sidebar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          allPosts={places}
        />
      </div>
    </div>
  );
}
