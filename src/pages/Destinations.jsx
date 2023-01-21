import React, { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";

export default function Destinations() {
  const [topDestination, setTopDestination] = useState([]);

  const fetchDestination = () => {
    fetch("./src/json/destinations.json")
      .then((response) => response.json())
      .then((data) => {
        setTopDestination(data);
      });
  };

  useEffect(() => {
    fetchDestination();
  }, []);

  return (
    <div className="py-8 px-4 md:px-0">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 grid-cols-1 sm:gap-8 mb-8">
        {topDestination.slice(0,15).map((dstn) => {
          return (
            <DestinationCard key={(window.crypto || window.msCrypto || self).randomUUID()} destinationProps={dstn} />
          );
        })}
      </div>
    </div>
  );
}
