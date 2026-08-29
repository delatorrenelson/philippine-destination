import Destinations from "../pages/Destinations";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Destinations | Philippine Destination" },
    { name: "description", content: "Browse top destinations across the Philippines." },
  ];
};

export default function DestinationsRoute() {
  return <Destinations />;
}
