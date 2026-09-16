import MyAccount from "../pages/MyAccount";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "My Account | Philippine Destination" },
    { name: "description", content: "Manage your saved destinations and account settings." },
  ];
};

export default function MyAccountRoute() {
  return <MyAccount />;
}
