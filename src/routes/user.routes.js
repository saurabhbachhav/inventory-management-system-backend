import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Verify this path

const router = Router();

router.post("/register", registerUser); // Use the correct handler

export default router;
