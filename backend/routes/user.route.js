import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

// 🟢 Create POST endpoint - Normal /api/products
router.post("/", createUser);

export default router;
