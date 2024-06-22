import mongoose, { model } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "The minimum length should be at least 3"],
    index: true,
  },
  discription: {
    type: String,
    required: [true, "Description of product required"],
  },
  price: {
    type: Number,
    required: [true, "Price should be provided"],
    min: [0, "The price can not be negative"],
    index: true,
  },
  category: {
    type: String,
    required: [true, "Category required, please fill it first ..."],
    index: true,
  },
  stock: {
    type: Number,
    require: [true, "Stock should be provided"],
    min: [0, "Stock number can not be negative"],
  },
});
productSchema.index({ name: 1, category: -1 });
const Product = mongoose.model("Product", productSchema);
export default Product;
