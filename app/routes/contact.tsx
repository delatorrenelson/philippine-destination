import Contact from "../pages/Contact";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us | Philippine Destination" },
    { name: "description", content: "Get in touch with the Philippine Destination team." },
  ];
};

export default function ContactRoute() {
  return <Contact />;
}
