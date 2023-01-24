import React, { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";
import { places } from "../json/destinations";

export default function Destinations() {
  const [topDestination, setTopDestination] = useState(places);



  return (
    <div className="py-8 px-4 md:px-0">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 grid-cols-1 sm:gap-8 mb-8">
        {topDestination.slice(0,12).map((dstn) => {
          return (
            <DestinationCard key={(window.crypto || window.msCrypto || self).randomUUID()} destinationProps={dstn} />
          );
        })}
      </div>
    </div>
  );
}
