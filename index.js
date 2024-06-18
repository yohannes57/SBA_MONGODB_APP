import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/conn.js";

//
dotenv.config();
const app = express();
//db connection
connectDB();
//midleware
app.use(express.json());

//router
// app.use('/',router)

//home url
app.get("/", (req, res) => {
  res.send("hello many");
});

//listen
let port = 3000;
app.listen(port, () => {
  console.log(`Server running at : localhost:${port}`);
});
