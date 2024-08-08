import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectDB = async () => {
     try {
          const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
          console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
     }
     catch (error)
     {
          console.log("MONGODB connection error", error);
          process.exit(1);
     }
}
export default connectDB;

//ALTERNATE METHOD :
// import express from "express";
// const app = express()(async () => {
//   try {
//     await monggose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERRR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR :", error);
//     throw err;
//   }
// })();