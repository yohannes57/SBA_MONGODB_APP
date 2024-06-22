import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
    index: true,
  },
  productList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        index: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
    index: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});
orderSchema.index({ customerId: 1, orderDate: -1 });
//model
const Order = mongoose.model("Order", orderSchema);
export default Order;
