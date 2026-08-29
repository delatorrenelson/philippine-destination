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
    <nav className="bg-emerald-700 px-2 sm:px-4 py-2.5 dark:bg-gray-900 relative w-full z-20 top-0 left-0 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-white bg-transparent rounded-lg md:hidden hover:bg-emerald-800 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } place-content-center w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row items-center place-content-center mx-auto gap-1 md:gap-2 py-2 md:py-0 md:text-base md:font-medium">
            {navList.map((nav) => {
              return (
                <NavLink
                  to={nav.href}
                  key={nav.txt}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md align-middle md:px-5 px-4 py-2 transition-all duration-150 text-white w-full md:w-auto text-center ${
                      isActive
                        ? "bg-emerald-800 font-semibold shadow-inner"
                        : "hover:bg-emerald-600/80 hover:shadow"
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