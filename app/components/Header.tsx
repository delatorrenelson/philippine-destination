import React, { useState } from "react";
import { Search, User, Compass, LogOut, UserCheck } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { AuthModal } from "../features/auth";
import { ThemeToggle } from "../features/theme";
import { Button } from "./ui/button";
import { useSession, signOut } from "../lib/auth-client";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const session = useSession();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const user = session.data?.user;

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Link to="/" className="w-48 sm:w-56 transition-transform hover:scale-105 block">
              <img
                src={logo}
                alt="Philippine Destination"
                className="w-full h-auto object-contain"
              />
            </Link>
            <span className="hidden lg:inline-block h-6 w-px bg-gray-200 dark:bg-gray-700" />
            <p className="hidden lg:flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Curated Island Travel & Errand Log
            </p>
          </div>

          {/* Search Bar & Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
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

            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/my-account"
                  className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  ) : (
                    <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 max-w-[100px] truncate">
                    {user.name || user.email}
                  </span>
                </Link>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  size="sm"
                  title="Sign Out"
                  className="rounded-full p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setIsAuthOpen(true)}
                variant="default"
                size="sm"
                className="rounded-full shadow-sm gap-1.5 text-xs font-semibold px-4"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
