import mongoose from "mongoose";
import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/productsController.js";

const router = express.Router();

router.post("/product", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProduct);
export default router;
