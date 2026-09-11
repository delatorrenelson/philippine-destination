import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db, client } from "./connection.js";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5173",
  trustedOrigins: [
    "http://localhost:5173",
    "http://localhost:5000",
    "http://localhost:3000",
    "https://philippine-destination.vercel.app",
  ],
  advanced: {
    disableOriginCheck: true,
  },
  database: mongodbAdapter(db, {
    client,
    transaction: false,
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 1,
  },
});
