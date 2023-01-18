import React from "react";
import { NavLink } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="relative h-full">
      <img src="../src/assets/images/bg.jpg" alt="" className="w-full z-10" />

      <div
        className="cta md:yt-10 py-8
        bg-gradient-to-b from-slate-500 to-opacity-10
        w-full 
        static      
        sm:absolute     
        gap-4 
        sm:gap-8
        place-items-center bottom-0 flex 
        flex-col px-4 md:px-40">
        <h1 className="tagline  text-center text-gra-600 text-yellow-200 text-2xl md:text-4xl font-semibold">
          Make your Hassle-Free travel plans now!
        </h1>

        <NavLink to="/booking">
          <button
            className="grn_btn large_btn px-6 py-4 rounded-lg md:text-3xl text-xl text-white
        bg-gradient-to-b from-green-700 to-green-500 
        hover:from-blue-700 hover:to-blue-500
        active:ring-4 transition-all"
          >
            {"Book now!"}
          </button>
        </NavLink>
      </div>
    </div>
  );
}
