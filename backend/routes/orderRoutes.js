import express from "express";
import expressAsyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import { generateToken, isAuth } from "../utils.js";
import OrderModel from "../models/orderModel.js";

const orderRouter = express.Router();

// i am using expressAsyncHandler to catch all errors
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newOrder = new OrderModel({
      /**for order items i am using map function to convert _id to product because
       * in orderModel for each item i have product and i fill the id of each product in that field
       */
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),

      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id, // but we didn't fill the this value, so we define a middleware to fill the user object of "req" from a token
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order });
  })
);

orderRouter.get(
  "/:id", // it will respond to /api/orders/id of order
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order not Found" });
    }
  })
);

export default orderRouter;
