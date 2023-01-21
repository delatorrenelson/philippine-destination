import React from "react";
import { NavLink } from "react-router-dom";

export default function DestinationCard({ destinationProps }) {
  const { destination, description, img } = destinationProps;
  return (
    <div
      className="destination_item flex flex-col items-center
    ring-1 ring-gray-200 rounded-lg overflow-hidden shadow-lg
    md:flex-col sm:flex-col hover:ring-2 hover:ring-green-700 transition-all delay-150"
    >
      <div className={"w-full h-full grid"}>
        <img alt="item_1" className="object-cover w-full h-full" src={img} />
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-1 md:gap-2">
        <h3 className="item_title text-center font-medium text-2xl">
          {destination}
        </h3>
        <p className="indent-12 item_description text-justify sm:text-left line-clamp-3">
          {description}
        </p>
        <NavLink to={"/booking"} className={"self-center mt-2"}>
          <button className="bg-green-700 hover:ring-1 active:bg-green-600 text-white font-medium px-4 py-2 rounded-lg w-fit">
            Book now
          </button>
        </NavLink>
      </div>
    </div>
  );
}
