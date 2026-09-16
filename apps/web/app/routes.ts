import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("post/:id", "routes/article-detail.tsx"),
  route("destinations", "routes/destinations.tsx"),
  route("travel-info", "routes/travel-info.tsx"),
  route("booking", "routes/booking-redirect.tsx"),
  route("booking/:destination", "routes/booking.tsx"),
  route("hotels", "routes/hotels.tsx"),
  route("my-account", "routes/my-account.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
