import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../db/conn.js";
import routerProduct from "./routes/productRoute.js";
import routerCustomer from "./routes/customerRoute.js";

//
dotenv.config();
const app = express();
//db connection
connectDB();
//midleware
app.use(express.json());

//router
app.use("/", routerProduct);
app.use("/", routerCustomer);

//home url
app.get("/", (req, res) => {
  res.send("hello many");
});

export default app;
