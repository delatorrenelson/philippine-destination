import React, { useState } from "react";
import { Search, User, Compass } from "lucide-react";
import logo from "../assets/images/logo.png";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-48 sm:w-56 transition-transform hover:scale-105">
              <img
                src={logo}
                alt="Philippine Destination"
                className="w-full h-auto object-contain"
              />
            </div>
            <span className="hidden lg:inline-block h-6 w-px bg-gray-200 dark:bg-gray-700" />
            <p className="hidden lg:flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Curated Island Travel & Errand Log
            </p>
          </div>

          {/* Search Bar & Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex-1 md:w-64">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (onSearch) onSearch(e.target.value);
                }}
                placeholder="Search islands, beaches, spots..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-gray-900 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </form>

            <ThemeToggle />

            <Button
              onClick={() => setIsAuthOpen(true)}
              variant="default"
              size="sm"
              className="rounded-full shadow-sm gap-1.5 text-xs font-semibold px-4"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </Button>
          </div>
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
