import mongoose from "mongoose";
import Cutomer from "../models/customersModel.js";

//--------------->create customer
export const createCustomer = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const customer = Cutomer.create({
      name: name,
      email: email,
      address: address,
    });
    console.log(customer);
    res.status(201).json({ customer: customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "sth wrong while creating product" });
  }
};

//--------------------->ReacCustomer
export const getAllCustomer = async (req, res) => {
  try {
    const customer = await Cutomer.find();
    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
  }
};

//--------------------->ReadCustomerById
export const getCustomerById = async (req, res) => {
  let id = req.params.id;
  try {
    let customer = await Cutomer.findById({ _id: id });
    if (!customer) res.status(404).json({ message: "customer not found" });

    res.status(200).json({ customer });
  } catch (error) {
    console.error(error);
  }
};
//--------------------->updateCustomerById
export const updateCustomer = async (req, res) => {
  let id = req.params.id;
  const { name, email, address } = req.body;
  try {
    let customer = await Cutomer.findByIdAndUpdate(
      { _id: id },
      { $set: { name, email, address } },
      { new: true }
    );
    if (!customer) {
      res.status(404).json({ message: "customer not found" });
    } else {
      res.status(200).json({ customer });
    }
  } catch (error) {
    console.error(error);
  }
};
//---------------------->DeleteCustomer
export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    let customerToDelete = await Cutomer.deleteOne({ _id: id });
    if (!customerToDelete)
      res.status(200).json({ message: "customer not found" });
    res.status(200).json({ message: "customer deleted successfully!" });
  } catch (error) {
    console.error(error);
  }
};
