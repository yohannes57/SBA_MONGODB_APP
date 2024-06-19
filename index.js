import express from "express";
import app from "./src/app.js";
//listen
let port = 3000;
app.listen(port, () => {
  console.log(`Server running at : localhost:${port}`);
});
