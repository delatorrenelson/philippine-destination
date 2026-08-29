import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, Compass, Heart, Shield, FileText } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Button } from "./ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="w-full bg-gray-900 text-white pt-16 pb-12 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Newsletter Callout Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-6 h-6 text-emerald-300" />
              <span>Get Secret Philippine Travel Guides in Your Inbox</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Join 15,000+ local & foreign adventurers receiving weekly itineraries, budget tips, and hidden island spots.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white text-xs font-bold animate-in fade-in">
              ✓ Mabuhay! You're subscribed to island updates.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="px-4 py-2.5 text-xs rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-300 w-full sm:w-64"
              />
              <Button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold rounded-full px-6 text-xs gap-1.5 shadow">
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          )}
        </div>

        {/* Footer Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-gray-400">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <img src={logo} alt="Philippine Destination" className="w-44 brightness-125" />
            <p className="leading-relaxed">
              Curated travel blog web app showcasing real-life errands, itineraries, and stories across the 7,641 Philippine islands.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home & Stories</Link></li>
              <li><Link to="/destinations" className="hover:text-emerald-400 transition-colors">All Destinations</Link></li>
              <li><Link to="/travel-info" className="hover:text-emerald-400 transition-colors">Travel Info & Tips</Link></li>
              <li><Link to="/hotels" className="hover:text-emerald-400 transition-colors">Hotels & Staycations</Link></li>
              <li><Link to="/my-account" className="hover:text-emerald-400 transition-colors">My Account & Stories</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Spots */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Top Destinations</h4>
            <ul className="space-y-2.5">
              <li><Link to="/post/el-nido-palawan" className="hover:text-emerald-400 transition-colors">El Nido, Palawan</Link></li>
              <li><Link to="/post/boracay-island" className="hover:text-emerald-400 transition-colors">Boracay White Beach</Link></li>
              <li><Link to="/post/siargao-island" className="hover:text-emerald-400 transition-colors">Siargao Island</Link></li>
              <li><Link to="/post/coron-palawan" className="hover:text-emerald-400 transition-colors">Coron, Palawan</Link></li>
              <li><Link to="/post/banaue-rice-terraces" className="hover:text-emerald-400 transition-colors">Banaue Rice Terraces</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Policies & Support</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-400" /><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-emerald-400" /><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-emerald-400">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Philippine Destination. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for local & foreign travelers. Mabuhay! 🇵🇭</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
