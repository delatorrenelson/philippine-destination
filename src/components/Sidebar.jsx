import React from "react";
import { Search, Tag, Folder, Compass, Heart, Share2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Sidebar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
  allPosts
}) {
  // Compute category counts
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All Stories") {
      acc[cat] = allPosts.length;
    } else {
      acc[cat] = allPosts.filter((p) => p.category === cat).length;
    }
    return acc;
  }, {});

  // Extract all unique tags
  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags || [])));

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Search Stories</span>
        </h4>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Type island name, spot..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Author Profile Bio Widget */}
      <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            alt="Maria Santos"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-400"
          />
          <div>
            <h5 className="font-bold text-sm text-white">Maria Santos</h5>
            <p className="text-[11px] text-emerald-300">Chief Travel Curator</p>
          </div>
        </div>
        <p className="text-xs text-emerald-100/90 leading-relaxed mb-4">
          "Explorer documenting authentic errands, island hops, and secret lagoons across 7,641 Philippine islands."
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>72 Provinces Visited</span>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Folder className="w-4 h-4 text-emerald-600" />
          <span>Categories</span>
        </h4>
        <ul className="space-y-1.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <li key={cat}>
                <button
                  onClick={() => onCategorySelect(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors font-medium ${
                    isSelected
                      ? "bg-emerald-600 text-white font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 hover:text-emerald-700"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      isSelected ? "bg-emerald-700 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular Tags Cloud */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4 text-emerald-600" />
          <span>Popular Tags</span>
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-emerald-900/50 dark:hover:text-emerald-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
          Follow Our Journeys
        </h4>
        <div className="flex items-center justify-center gap-3 text-gray-500">
          <a href="#" className="p-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white rounded-full transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="p-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white rounded-full transition-all">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="p-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white rounded-full transition-all">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="p-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white rounded-full transition-all">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
