import React, { useState } from "react";
import { User as UserIcon, MapPin, Mail, LogOut, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { useSession, signOut } from "../lib/auth-client";
import { AuthModal } from "../features/auth";

export default function MyAccount() {
  const session = useSession();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const user = session.data?.user;

  if (session.isPending) {
    return (
      <div className="py-20 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
        <p className="text-xs font-semibold text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <div className="py-16 max-w-lg mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
            <UserIcon className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">Sign In to Your Account</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Manage your saved island destinations, bookmarks, travel stories, and account settings.
            </p>
          </div>
          <Button
            onClick={() => setIsAuthOpen(true)}
            size="lg"
            className="rounded-2xl px-8 font-bold text-sm shadow-lg shadow-emerald-500/20"
          >
            Sign In / Register
          </Button>
        </div>
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </>
    );
  }

  const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "Recently Joined";

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User Profile"}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-500/20 shadow-md"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center ring-4 ring-emerald-500/20 shadow-md">
              <span className="text-3xl font-black text-emerald-700 dark:text-emerald-300">
                {(user.name || user.email || "U").charAt(0).toUpperCase()}
              </span>
            </div>
          )}

          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h1 className="text-2xl font-black text-gray-900 dark:text-white">
                {user.name || "Traveler"}
              </h1>
              {user.emailVerified && (
                <span title="Verified Account">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </span>
              )}
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center sm:justify-start gap-1">
              <Mail className="w-3.5 h-3.5" />
              {user.email}
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center sm:justify-start gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Philippines • Member since {joinDate}</span>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">0</span>
            <span className="text-[11px] text-gray-500 font-medium">Stories Read</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">0</span>
            <span className="text-[11px] text-gray-500 font-medium">Saved Spots</span>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl">
            <span className="block text-xl font-black text-gray-900 dark:text-white">0</span>
            <span className="text-[11px] text-gray-500 font-medium">Reviews Posted</span>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end gap-3 pt-4">
          <Button
            onClick={() => signOut()}
            variant="outline"
            size="sm"
            className="rounded-xl text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
