import mongoose from "mongoose";
import { MongoClient, Db } from "mongodb";

// Dev: use local MongoDB
// Preview/Production: use Atlas via ATLAS_MONGODB_URI or MONGODB_URI (set in Vercel env vars)
const IS_DEV = process.env.NODE_ENV === "development" || (!process.env.NODE_ENV && !process.env.VERCEL);

const MONGODB_URI = IS_DEV
  ? (process.env.MONGODB_URI || "mongodb://localhost:27017/philippine_destination")
  : (process.env.ATLAS_MONGODB_URI || process.env.MONGODB_URI || "mongodb://localhost:27017/philippine_destination");

if (!MONGODB_URI.includes("philippine_destination") && !MONGODB_URI.includes("mongodb+srv")) {
  console.warn("⚠️  MONGODB_URI does not target 'philippine_destination' — check your env vars.");
}

declare global {
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
  var _mongoClientCache: MongoClient | undefined;
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
        serverSelectionTimeoutMS: 5000,
        dbName: "philippine_destination",
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

function getMongoClient(): MongoClient {
  if (!globalThis._mongoClientCache) {
    globalThis._mongoClientCache = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  }
  return globalThis._mongoClientCache;
}

export const client: MongoClient = getMongoClient();
export const db: Db = getMongoClient().db("philippine_destination");
