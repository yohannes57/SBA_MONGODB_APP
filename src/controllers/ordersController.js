import mongoose from "mongoose";
import Order from "../models/ordersModel.js";
import Product from "../models/productsModel.js";
import Customer from "../models/customersModel.js";

//------------------------->createOrder
export const createOrder = async (req, res) => {
  const { customerId, totalPrice, productList } = req.body;
  try {
    // Validate customerId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({ message: "Invalid customer ID" });
    }

    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Validate productList
    if (!Array.isArray(productList) || productList.length === 0) {
      return res
        .status(400)
        .json({ message: "Product list must be a non-empty array" });
    }

    for (const item of productList) {
      if (!mongoose.Types.ObjectId.isValid(item.productId)) {
        return res
          .status(400)
          .json({ message: `Invalid product ID: ${item.productId}` });
      }

      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product not found: ${item.productId}` });
      }
    }
    // const { productList, customerId, totalPrice } = req.body;
    const order = await Order.create({
      productList,
      customerId,
      totalPrice,
    });
    res.status(201).json({ order });
  } catch (error) {
    console.error(error);
  }
};

//------------------------->getOrders
export const getAllOrders = async (req, res) => {
  //   const id = req.params.id;
  try {
    const orders = await Order.find()
      .populate("customerId", "name email") //it adds name and email to order
      .populate("productList.productId", "name price"); //it adds name of product and price to the order
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "fetching order went wrong" });
  }
};
//------------------------->getOrderById
export const getOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    let order = await Order.find({ _id: id })
      .populate("customerId", "name email")
      .populate("productList.productId", "name price");
    if (!order) res.status(404).json({ message: "order not found" });
    res.status(200).json({ order });
  } catch (error) {
    console.error(error);
  }
};
//------------------------->updateOrder
export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const { totalPrice, productList } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      { _id: id },
      { $set: { totalPrice, productList } },
      { new: true }
    );
    res.status(200).json({ order });
  } catch (error) {
    console.error(error);
  }
};
//--------------------------deleteOrder
export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const delOrder = await Order.deleteOne({ _id: id });
    res.status(200).json({ message: "order is deleted successfully!" });
  } catch (error) {
    console.error(error);
  }
};
