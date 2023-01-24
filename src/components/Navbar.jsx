import React, { useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import "flowbite";

export const navList = [
  { txt: "Home", href: "/" },
  { txt: "Destinations", href: "/destinations" },
  { txt: "Travel Info", href: "/travel-info" },
  // { txt: "Booking", href: "/booking" },
  { txt: "Hotels", href: "/hotels" },
  { txt: "My Account", href: "/my-account" },
  { txt: "Services", href: "/services" },
  { txt: "Contact", href: "/contact" },
];

export default function Navbar() {  
  return (
    <nav className="bg-green-700 px-2 sm:px-4 py-2.5 dark:bg-gray-900 relative w-full z-20 top-0 left-0 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white bg-transparent rounded-lg md:hidden hover:font-medium"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 fill-white"
              aria-hidden="true"
              fillRule="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="place-content-center hidden w-full md:flex md:order-1 transition-all"
          id="navbar-sticky"
        >
          <div className="flex items-center place-content-center flex-col mx-auto flex-wrap md:flex-row  md:mt-0 md:text-base md:font-medium  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navList.map((nav) => {
              return (
                <NavLink                  
                  to={nav.href}
                  key={nav.txt}
                  href={nav.href}                  
                  className=
                    "rounded-md align-middle over:bg-blue-700 active:ring-4 active:text-gray-400 md:px-6 px-4 py-2 transition-all transform duration-150 no-wrap  text-white hover:bg-gradient-to-b from-blue-700 to-blue-500">
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