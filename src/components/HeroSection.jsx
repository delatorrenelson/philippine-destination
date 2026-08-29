import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";

export default function HeroSection({ post }) {
  if (!post) return null;

  return (
    <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl mb-12 group border border-gray-100 dark:border-gray-800">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 bg-gray-900">
        <img
          src={post.img}
          alt={post.destination}
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Multi-layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/40 to-transparent" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-3xl min-h-[460px] flex flex-col justify-end text-white">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            🔥 Featured Story
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{post.rating}.0 / 5.0</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3 group-hover:text-emerald-300 transition-colors drop-shadow-md">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-sm sm:text-base text-gray-200 line-clamp-2 mb-6 max-w-2xl font-normal leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta & CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=33"; }}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400 shadow"
            />
            <div>
              <p className="text-xs font-bold text-white">{post.author.name}</p>
              <div className="flex items-center gap-2 text-[11px] text-gray-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {post.destination}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          <Link to={`/post/${post.id}`}>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full px-6 py-2.5 shadow-lg group-hover:translate-x-1 transition-all">
              <span>Read Story</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
