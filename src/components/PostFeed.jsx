import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Bookmark, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";

export default function PostFeed({ posts, itemsPerPage = 6 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedPosts, setSavedPosts] = useState({});

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  if (posts.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 text-center border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        <p className="text-4xl">🏝️</p>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">No Destination Stories Found</h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          We couldn't find any travel stories matching your search or category filter. Try clearing filters or searching for another spot!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedPosts.map((post) => {
          const isSaved = savedPosts[post.id];
          return (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col group"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={post.img}
                  alt={post.destination}
                  onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>

                <button
                  onClick={(e) => toggleSave(post.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                    isSaved ? "bg-emerald-600 text-white" : "bg-black/40 text-white hover:bg-black/60"
                  }`}
                  aria-label="Save story"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-2">
                    <span className="flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
                      <MapPin className="w-3 h-3" />
                      {post.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Author & Action */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=33"; }}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-emerald-500"
                    />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {post.author?.name}
                    </span>
                  </div>

                  <Link
                    to={`/post/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:translate-x-0.5 transition-all"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500">
            Showing Page <span className="font-bold text-gray-900 dark:text-white">{currentPage}</span> of{" "}
            <span className="font-bold text-gray-900 dark:text-white">{totalPages}</span>
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="gap-1 text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  page === currentPage
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="gap-1 text-xs"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
