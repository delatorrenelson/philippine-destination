import mongoose from "mongoose";
import { MongoClient, Db } from "mongodb";

const MONGODB_URI =
  process.env.ATLAS_MONGODB_URI ||
  process.env.MONGODB_URI ||
  process.env.MONGODB_URL ||
  "mongodb://localhost:27017/philippine_destination";

declare global {
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

let cached = globalThis._mongooseCache;

if (!cached) {
  cached = globalThis._mongooseCache = { conn: null, promise: null };
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}

// Initialize connection asynchronously
connectDB().catch((err) => console.error("Mongoose initial connection error:", err));

// Fallback native client and db for BetterAuth adapter compatibility
const fallbackClient = new MongoClient(MONGODB_URI);
export const client: MongoClient = fallbackClient;
export const db: Db = fallbackClient.db();
