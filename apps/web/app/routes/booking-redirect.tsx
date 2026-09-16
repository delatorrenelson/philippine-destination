import { redirect } from "react-router";

export function loader() {
  return redirect("/destinations");
}

export default function BookingRedirectRoute() {
  return null;
}
