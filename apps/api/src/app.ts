
import express, { Request, Response, NextFunction } from "express";
import { connectToDatabase } from "./config/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import destinationRouter from "./routes/destinations.js";
import commentsRouter from "./routes/comments.js";
import articlesRouter from "./routes/articles.js";

import { globalErrorHandler } from "./middleware/errorMiddleware.js";
import { AppError } from "./utils/appError.js";

// Explicitly locate .env inside apps/api/ regardless of root execution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

app.get("/.well-known/*", (_req, res) => {
  res.status(204).end();
});

// Middleware Setup
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:5173", // React Router dev port or Vercel frontend URL
//     credentials: true, // Required for Better Auth cookies/sessions
//   })
// );

app.use(express.json());

// MongoDB Atlas Connection Middleware (Optimized for Serverless & Local)
app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    console.error("Database middleware connection failure:", error);
    next(error);
  }
});

// Base API welcome route
app.get("/api/v1", (_req, res) => {
  res.status(200).json({
    message: "Welcome to the Philippine Destination API",
    version: "v1",
    status: "active",
  });
});

// Health Check Endpoint
app.get("/api/v1/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", app: "philippine-destination-api" });
});

// API Routes Integration (Hook up your routers here later)
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/comments", commentsRouter)
app.use("/api/v1/articles", articlesRouter)

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error", message: err.message });
});

// Catch-all unhandled routes (404)
app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler Middleware
app.use(globalErrorHandler);

// Local Server Listener (Ignored on Vercel Serverless)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Backend API server running locally on port ${PORT}`);
  });
}

export default app;