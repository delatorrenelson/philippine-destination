import React from "react";
import { useOutletContext } from "react-router";
import type { RootOutletContext } from "../root";
import Home from "../pages/Home";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Philippine Destination | Curated Island Travel & Errand Log" },
    { name: "description", content: "Explore the best islands, beaches, and travel guides in the Philippines." },
  ];
};

export default function HomeRoute() {
  const { globalSearch, setGlobalSearch } = useOutletContext<RootOutletContext>();
  return <Home searchQuery={globalSearch} onSearchChange={setGlobalSearch} />;
}
