import React, { useState } from "react";
import { Link } from "react-router";
import { MapPin, Clock, ArrowRight, Bookmark, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Place } from "../../types";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";

interface PostFeedProps {
  posts: Place[];
  itemsPerPage?: number;
}

export default function PostFeed({ posts, itemsPerPage = 6 }: PostFeedProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
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
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>

                <button
                  onClick={(e) => toggleSave(post.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow ${
                    isSaved
                      ? "bg-emerald-600 text-white"
                      : "bg-black/30 text-white hover:bg-black/50"
                  }`}
                  aria-label="Save story"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-white" : ""}`} />
                </button>

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{post.destination}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {post.rating}.0
                    </span>
                  </div>

                  <Link to={`/post/${post.id}`} className="block">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer Author & Action */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author?.avatar}
                      alt={post.author?.name}
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        (e.target as HTMLImageElement).src = "https://i.pravatar.cc/150?img=33";
                      }}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-emerald-500"
                    />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {post.author?.name}
                    </span>
                  </div>

                  <Link
                    to={`/post/${post.id}`}
                    className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Read More</span>
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
        <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm text-xs font-semibold">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            className="rounded-xl gap-1 text-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <span className="text-gray-600 dark:text-gray-400 font-medium">
            Page <strong className="text-gray-900 dark:text-white font-bold">{currentPage}</strong> of{" "}
            <strong className="text-gray-900 dark:text-white font-bold">{totalPages}</strong>
          </span>

          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            className="rounded-xl gap-1 text-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
