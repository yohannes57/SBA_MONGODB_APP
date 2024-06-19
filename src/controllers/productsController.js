import mongoose from "mongoose";
import Product from "../models/productsModel.js";

//--------------->create product
export const createProduct = async (req, res) => {
  try {
    const { name, discription, price, category, stock } = req.body;
    const product = Product.create({
      name: name,
      discription: discription,
      price: price,
      category: category,
      stock: stock,
    });
    console.log(product);
    res.status(201).json({ product: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "sth wrong while creating product" });
  }
};
//--------------->getAll product
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

//--------------->getById product
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById({ _id: id });
    res.status(200).json({ product: product });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "sth is wrong" });
  }
};

//--------------->update product
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  const { name, discription, price, category, stock } = req.body;
  try {
    let product = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          discription,
          price,
          category,
          stock,
        },
      },
      { new: true }
    );
    if (!product) {
      res.status(404).json({ error: "product not found" });
    } else {
      res.status(200).json({ product: product });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Update couldnt work" });
  }
};

//--------------->delete product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const productToDelete = await Product.deleteOne({ _id: id });
    if (!productToDelete) {
      res.status(404).json({ message: "product not found." });
    } else {
      res.status(200).json({ message: "deleted successfully" });
    }
  } catch (error) {
    console.error({ error: "delete wasnt successfull" });
  }
};
