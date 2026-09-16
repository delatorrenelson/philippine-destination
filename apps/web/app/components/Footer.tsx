import React, { useState } from "react";
import { Link } from "react-router";
import { MapPin, Mail, Send, Compass, Heart } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Button } from "./ui/button";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="w-48 bg-white/90 p-2 rounded-xl">
              <img
                src={logo}
                alt="Philippine Destination"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Curated user travel blog showcase highlighting island errands, authentic travel reviews, and local guides across the Philippines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home & Stories</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-emerald-400 transition-colors">Destinations Explorer</Link>
              </li>
              <li>
                <Link to="/travel-info" className="hover:text-emerald-400 transition-colors">Travel Info & Guides</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-emerald-400 transition-colors">Stays & Resorts</Link>
              </li>
              <li>
                <Link to="/my-account" className="hover:text-emerald-400 transition-colors">My Traveler Profile</Link>
              </li>
            </ul>
          </div>

          {/* Top Spots */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Top Spots</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">El Nido & Coron, Palawan</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Siargao Island Break</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Batanes Rolling Hills</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Banaue Rice Terraces</span></li>
              <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Vigan Colonial Streets</span></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Island Newsletter</h4>
            <p className="text-xs text-gray-400">
              Get secret beach updates & travel tips delivered weekly.
            </p>

            {subscribed ? (
              <p className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 p-3 rounded-xl border border-emerald-800">
                ✓ Thanks for subscribing! Mabuhay!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-2 text-xs bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                />
                <Button type="submit" size="sm" className="w-full rounded-xl text-xs font-bold gap-1">
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe Now</span>
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Philippine Destination. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Local & Global Travelers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
