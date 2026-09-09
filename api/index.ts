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
    origin: ["http://localhost:5173", "http://localhost:5000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas via Mongoose
connectDB()
  .then(() => console.log("🟢 Connected to MongoDB Atlas via Express API"))
  .catch((err) => console.error("❌ MongoDB connection error in Express API:", err));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/destinations", destinationsRouter);

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Philippine Destination Express API Server Running" });
});

// React Router v7 SSR Request Handler in Production
if (process.env.NODE_ENV === "production") {
  const { createRequestHandler } = require("@react-router/express");
  app.use(
    "*",
    createRequestHandler({
      // @ts-ignore
      build: () => import("../build/server/index.js"),
    })
  );
}

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Express API server listening on http://localhost:${PORT}`);
  });
}

export default app;
