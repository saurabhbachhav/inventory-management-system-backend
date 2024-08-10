//require("dotenv").config({path:'./env'});
import dotenv from "dotenv";

import mongoose from "mongoose";
// import { DB_NAME } from "/constants.js";
import connectDB from "../db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(app.listen(process.env.PORT || 8000), () => {
    console.log(` Server is running at Port :${process.env.PORT}`);
  })
  .caltch((err) => {
    consolr.log("MONGO db connection failed !!!", err);
  });
