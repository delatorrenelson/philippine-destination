import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { places } from "../json/destinations";

export default function FeaturedDestination() {
  const [rndImg, setRndImg] = useState(
    places[Math.floor(Math.random() * places.length)]
  );

  useEffect(() => {
    setRndImg(places[Math.floor(Math.random() * places.length)]);
  }, []);

  return (
    <div id="featured" className="flex flex-col gap-4">
      <h3 className="text-xl font-medium">{rndImg.destination}</h3>
      <img alt="More About Boracay" src={rndImg.img} />
      <p id="featured_article" className="text-justify indent-12">
        {rndImg.description}
      </p>
    </div>
  );
}
