import TravelInfo from "../pages/TravelInfo";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Travel Info | Philippine Destination" },
    { name: "description", content: "Essential Philippines travel requirements, guidelines, and FAQs." },
  ];
};

export default function TravelInfoRoute() {
  return <TravelInfo />;
}
