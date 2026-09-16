import Booking from "../pages/Booking";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Book Trip | Philippine Destination" },
    { name: "description", content: "Reserve tours and flights to top Philippine island destinations." },
  ];
};

export default function BookingRoute() {
  return <Booking />;
}
