import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getDb } from "../config/connection.js";

if (!process.env.BETTER_AUTH_SECRET) {
  console.warn("⚠️ BETTER_AUTH_SECRET is missing from process.env!");
}

export const auth = betterAuth({
  database: mongodbAdapter(getDb()),
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000/api/v1/auth",
  trustedOrigins: [
    "http://localhost:5173",
    "http://localhost:5000",
    "https://philippine-destination.vercel.app",
  ],
  basePath: "/api/v1/auth",
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_key_change_me",
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    disableOriginCheck: process.env.NODE_ENV !== "production",
  },
});