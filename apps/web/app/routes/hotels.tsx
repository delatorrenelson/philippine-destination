import Hotels from "../pages/Hotels";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Hotels & Resorts | Philippine Destination" },
    { name: "description", content: "Discover luxury resorts and budget stays in the Philippines." },
  ];
};

export default function HotelsRoute() {
  return <Hotels />;
}
