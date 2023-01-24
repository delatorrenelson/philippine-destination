import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();

  if (location.state == null) {
    console.log(location);
  }

  const [bookDestination, setBookDestination] = useState(location.state);
  const { destination, img, description } = bookDestination;

  return (
    <div className="booking px-4 md:p-0">
      <h1>{destination}</h1>
    </div>
  );
}
