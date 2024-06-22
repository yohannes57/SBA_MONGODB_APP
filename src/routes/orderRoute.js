import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
} from "../controllers/ordersController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
// router.put("/:id", updateProductById);
// router.delete("/:id", deleteProduct);
export default router;
