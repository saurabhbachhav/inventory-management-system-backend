import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// Load environment variables
dotenv.config({ path: "./env" });

// Initialize Express application


// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed!", err);
  });

 // Adjust path as needed

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
