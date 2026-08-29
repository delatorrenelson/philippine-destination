import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const navList = [
  { txt: "Home", href: "/" },
  { txt: "Destinations", href: "/destinations" },
  { txt: "Travel Info", href: "/travel-info" },
  { txt: "Hotels", href: "/hotels" },
  { txt: "My Account", href: "/my-account" },
  { txt: "Services", href: "/services" },
  { txt: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 dark:bg-gray-900 relative w-full z-20 shadow-md border-t border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between py-1">
        <div className="flex md:order-2 md:hidden py-1.5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-white bg-transparent rounded-lg hover:bg-emerald-900 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row items-center gap-1 py-1.5 md:py-1 text-sm font-medium">
            {navList.map((nav) => {
              return (
                <NavLink
                  to={nav.href}
                  key={nav.txt}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg md:px-4 px-3 py-2 transition-all duration-150 text-white text-sm w-full md:w-auto text-left ${
                      isActive
                        ? "bg-emerald-950/90 font-bold text-emerald-200 shadow-inner"
                        : "hover:bg-emerald-700/80 hover:text-emerald-100"
                    }`
                  }
                >
                  {nav.txt}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}