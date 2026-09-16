import { Router, Request, Response, NextFunction } from "express";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "../lib/auth.js";
import { AppError } from "../utils/appError.js";

const router = Router();

// Custom default response for the root /api/v1/auth path
router.get("/", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Philippine Destination Auth API",
    version: "v1",
  });
});


// Explicit Sign Up Route
router.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    const user = await auth.api.signUpEmail({
      body: { email, password, name },
    });

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    return next(new AppError(error.message || "Failed to sign up", error.statusCode || 400));
  }
});

// Explicit Sign In Route
router.post("/signin", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    const session = await auth.api.signInEmail({
      body: { email, password },
    });

    return res.status(200).json({
      status: "success",
      message: "Signed in successfully",
      data: session,
    });
  } catch (error: any) {
    return next(new AppError(error.message || "Invalid credentials", error.statusCode || 401));
  }
});

// Explicit Logout Route
router.post("/logout", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await auth.api.signOut({
      headers: fromNodeHeaders(req.headers),
    });

    return res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (error: any) {
    return next(new AppError(error.message || "Failed to log out", 500));
  }
});


// Handles all Better Auth requests under /api/v1/auth/*
router.all("/*", toNodeHandler(auth));

export default router;