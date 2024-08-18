import express from "express"; // Corrected typo here
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";


const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Ensure this is set in your environment
    credentials: true, // Fixed typo here
  })
);

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public")); // Ensure the 'public' directory exists
app.use(cookieParser());



app.use("/api/v1/users", userRouter);

// Example: http://localhost:8000/api/v1/users/register

export { app };
