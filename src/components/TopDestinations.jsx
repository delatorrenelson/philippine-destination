import React, {useState, useEffect} from 'react'
import DestinationCard from "./DestinationCard";
import { places } from '../json/destinations';

export default function TopDestinations() {  
  const [topDestination, setTopDestination] = useState(places)

  
  
  return (
    <div className="row destination_list text-center my-20 px-4 md:p-0">
      {/* <h2 id="more_destination" className="text-4xl text-gray-700 font-bold mb-4">More Destination</h2> */}

      <div className="grid grid-flow-row md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {topDestination.slice(0,3).map((dstn) => {
          return <DestinationCard key={dstn.destination} destinationProps={dstn} />;
        })}
      </div>

      <a href="/destinations" id="view_more" className="hover:text-blue-700 hover:underline">
        {"View more destination >>"}
      </a>
    </div>
  );
}
