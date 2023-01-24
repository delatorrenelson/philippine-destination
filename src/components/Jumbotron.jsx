import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { places } from "../json/destinations";

export default function Jumbotron() {
  const [rndImg, setRndImg] = useState(
    places[Math.floor(Math.random() * places.length)]
  );

  useEffect(() => {
    setRndImg(places[Math.floor(Math.random() * places.length)]);
  }, []);

  return (
    <div className="relative">
      <img src={rndImg.img} alt="" className="w-full h-full z-10 object-fill" />

      <div
        className="cta md:yt-10 py-8
        bg-gradient-to-b from-green-700 to-opacity-10
        w-full 
        static      
        sm:absolute     
        gap-4 
        sm:gap-8
        place-items-center bottom-0 flex 
        flex-col px-4 md:px-40"
      >
        <h1 className="title text-center  text-green-90 text-white text-2xl md:text-6xl font-semibold">
          {rndImg.destination}
        </h1>
        <h2 className="title text-center text-green-90 text-white text-2xl md:text-4xl">
          Make your Hassle-Free travel plans now!
        </h2>

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
