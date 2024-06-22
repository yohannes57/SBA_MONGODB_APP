import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      index: true,
    },
  ],
});

customerSchema.index({ name: 1, email: 1 });

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
