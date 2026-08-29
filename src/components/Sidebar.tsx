import React from "react";
import { Link } from "react-router-dom";
import { Search, Tag, Compass, Sparkles, Instagram, Facebook, Youtube } from "lucide-react";
import { Place } from "../types";

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  allPosts: Place[];
}

export default function Sidebar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
  allPosts
}: SidebarProps) {
  const topTags = ["Palawan", "Surfing", "Culture", "Volcano", "SardineRun", "Batanes", "Bohol", "UndergroundRiver"];

  const popularPosts = allPosts.slice(0, 4);

  return (
    <aside className="w-full lg:w-80 space-y-8 flex-shrink-0">
      {/* Curator Profile Card */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm text-center space-y-4">
        <div className="relative w-20 h-20 mx-auto">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Travel Curator"
            className="w-full h-full rounded-full object-cover ring-4 ring-emerald-500/20 shadow-md"
          />
          <span className="absolute bottom-0 right-0 p-1.5 bg-emerald-600 text-white rounded-full text-xs">
            <Compass className="w-3.5 h-3.5" />
          </span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-base">Juan Dela Cruz</h4>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Island Travel Curator & Guide</p>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          Log of local errands, hidden island beaches, and travel insights across the 7,641 islands of the Philippines.
        </p>
        <div className="flex items-center justify-center gap-3 text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800">
          <Instagram className="w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" />
          <Facebook className="w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" />
          <Youtube className="w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Search Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Search Stories</span>
        </h4>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by keyword..."
          className="w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Categories Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
          <Compass className="w-4 h-4 text-emerald-600" />
          <span>Categories</span>
        </h4>
        <div className="space-y-1 text-xs">
          {categories.map((cat) => {
            const count =
              cat === "All Stories"
                ? allPosts.length
                : allPosts.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategorySelect(cat)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                  isSelected
                    ? "bg-emerald-600 text-white font-bold shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Popular Stories Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Trending Guides</span>
        </h4>
        <div className="space-y-3">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="flex items-center gap-3 group"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-14 h-14 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="space-y-1 overflow-hidden">
                <h5 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h5>
                <p className="text-[10px] text-gray-400 font-medium">{post.readTime} • ★ {post.rating}.0</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Cloud Widget */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2">
          <Tag className="w-4 h-4 text-emerald-600" />
          <span>Popular Tags</span>
        </h4>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {topTags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:text-emerald-700 dark:hover:text-emerald-300 text-gray-600 dark:text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
