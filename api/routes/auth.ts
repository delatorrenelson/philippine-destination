import { Router } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "../db/index.js";

const router = Router();

// Handle all BetterAuth authentication endpoints
router.use(toNodeHandler(auth));

export default router;
