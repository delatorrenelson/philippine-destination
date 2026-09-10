import express from "express";
import cors from "cors";
import { connectDB } from "../app/lib/db";

import authRouter from "./routes/auth";
import commentsRouter from "./routes/comments";
import contactRouter from "./routes/contact";
import bookingRouter from "./routes/booking";
import destinationsRouter from "./routes/destinations";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas via Mongoose
app.use(async (_req, _res, next) => {
  try {
    await connectDB();
  } catch (err) {
    console.error("MongoDB connection warning in Express middleware:", err);
  }
  next();
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/destinations", destinationsRouter);

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Philippine Destination Express API Server Running",
    dbStatus: process.env.MONGODB_URI || process.env.ATLAS_MONGODB_URI ? "configured" : "missing_uri",
  });
});

// React Router v7 SSR Request Handler in Production / Vercel Serverless environment
if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
  const { createRequestHandler } = require("@react-router/express");
  app.use("*", async (req, res, next) => {
    try {
      // @ts-ignore
      const build = await import("../build/server/index.js");
      const handler = createRequestHandler({ build });
      return handler(req, res, next);
    } catch (err) {
      console.error("Error loading or executing React Router SSR build:", err);
      if (!res.headersSent) {
        res.status(500).json({
          error: "Vercel Serverless Handler Error",
          message: err instanceof Error ? err.message : String(err),
        });
      }
    }
  });
}

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Express API server listening on http://localhost:${PORT}`);
  });
}

export default app;
