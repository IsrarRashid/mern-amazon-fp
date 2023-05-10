import express from "express";
import ProductModel from "../models/productModel.js";
const productRouter = express.Router();

// "/api/products" prefix will be added in server.js, so i am just using "/" it means that /api/products
// i am going to implement first api
productRouter.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await ProductModel.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// return product based on id
productRouter.get("/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

export default productRouter;
