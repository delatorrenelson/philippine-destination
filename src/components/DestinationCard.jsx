import React from "react";
import { NavLink} from "react-router-dom";

export default function DestinationCard({ destinationProps }) {
  const { destination, description, img } = destinationProps;
  // return (<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //     <div class="md:flex">
  //       <div class="md:shrink-0">
  //         <img
  //           class="h-48 w-full object-cover md:h-full md:w-48"
  //           src="/img/building.jpg"
  //           alt="Modern building architecture"
  //         />
  //       </div>
  //       <div class="p-8">
  //         <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
  //           Company retreats
  //         </div>
  //         <a
  //           href="#"
  //           class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
  //         >
  //           Incredible accomodation for your team
  //         </a>
  //         <p class="mt-2 text-slate-500">
  //           Looking to take your team away on a retreat to enjoy awesome food
  //           and take in some sunshine? We have a list of places to do just that.
  //         </p>
  //       </div>
  //     </div>
  //   </div>);
  return (
    <div
      className="destination_item flex flex-col items-center gap-4
    ring-1 ring-gray-200 rounded-lg overflow-hidden shadow-lg
    md:flex-col sm:flex-col hover:ring-2 hover:ring-green-700"
    >
      <div className={"w-full h-full grid"}>
        <img alt="item_1" className="object-cover w-full h-full" src={img} />
      </div>

      <div className="px-6 py-8 flex flex-col items-center gap-2 md:gap-4">
        <h3 className="item_title text-center font-medium text-2xl">
          {destination}
        </h3>
        <p className="item_description text-justify sm:text-left line-clamp-3">
          {description}
        </p>
        <NavLink to={"/booking"}>
        <button className="bg-green-700 hover:ring-1 active:bg-green-600 text-white font-medium px-4 py-2 rounded-lg w-fit">
          Book now
        </button>          
        </NavLink>
      </div>
    </div>
  );
}
