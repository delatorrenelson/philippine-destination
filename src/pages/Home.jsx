import React from "react";
import TopDestinations from "../components/TopDestinations";
import Jumbotron from "../components/Jumbotron";
import Reviews from "../components/Reviews";
import FeaturedDestination from "../components/FeaturedDestination";

export default function Home() {
  return (
    <div className="gap-8">
      <Jumbotron />
      <TopDestinations />
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-4 sm:gap-8 px-4 md:p-0">
        <FeaturedDestination/>
        <Reviews />
      </div>
    </div>
  );
}
