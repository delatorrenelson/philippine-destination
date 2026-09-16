// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/philippine_destination";

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env");
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   var mongooseCache: MongooseCache | undefined;
// }

// let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

// if (!global.mongooseCache) {
//   global.mongooseCache = cached;
// }

// export async function connectToDatabase(): Promise<typeof mongoose> {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       maxPoolSize: 10,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
//       return mongooseInstance;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }