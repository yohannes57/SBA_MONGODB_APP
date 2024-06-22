import mongoose from "mongoose";
import express from "express";
import {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customersController.js";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomer);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
export default router;
