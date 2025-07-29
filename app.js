// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");


dotenv.config();
const app = express();

//For Documentation(Swagger)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
     res.send(
       "Welcome to IMS Backend! Frontend is deployed on Vercel; check it out."
     );
});
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/productRoutes"));

// MongoDB
connectDB();

module.exports = app;
