import React from "react";
import logo from "../assets/images/logo.png"
export default function Header() {
  return (
    <div className="flex md:flex-row flex-col items-center w-full m-auto py-4 bg-green-700 md:bg-transparent">
      <div id="logo" className="w-80">
        <img
          src={logo}
          alt="Philippine Destination"
          className="w-full"
        />
      </div>
      <span className="flex-1"></span>
      <form id="search" className="flex h-10 gap-2">
        <input
          type="text"
          className="text-gray-600 px-4 py-2 border rounded-lg"
          placeholder="search for destination"
        />
        <input
          type="button"
          className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer hover:ring-2 transition active:bg-blue-500"
          value="Search"
        />
      </form>
    </div>
  );
}
