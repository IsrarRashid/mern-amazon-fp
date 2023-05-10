import express from "express";
import ProductModel from "../models/productModel.js";
import data from "../data.js";
import UserModel from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await ProductModel.deleteMany({});
  const createdProducts = await ProductModel.insertMany(data.products);
  await UserModel.deleteMany({});
  const createdUsers = await UserModel.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
