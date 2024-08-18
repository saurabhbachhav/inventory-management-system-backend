import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Verify this path

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverimage",
      maxCount: 1,
    },
  ]),
  registerUser
); // Use the correct handler

export default router;
