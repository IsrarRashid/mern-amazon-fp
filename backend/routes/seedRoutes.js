import express from "express";
import ProductModel from "../models/productModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  //   await ProductModel.remove({}); //remove method is deprecated
  await ProductModel.deleteMany({}); //deleting all record
  const createProducts = await ProductModel.insertMany(data.products);
  res.send({ createProducts });
});

export default seedRouter;
