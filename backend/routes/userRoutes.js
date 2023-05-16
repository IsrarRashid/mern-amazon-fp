import express from "express";
import expressAsyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
const userRouter = express.Router();

// by using this function we can catch error in async function, inside it
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      /**this condition is for checking password, password checking is not like
       * equal sign because password in database is encrypted, we use decrypt package
       * for this purpose
       */
      //   first parameter: plain text password, second parameter: encrypted password in database
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return; // i return here because i don't want to continue running code after setting data
      }
    }
    // unauthorized 401 error
    res.status(401).send({ message: "invalid email or password" });
  })
);

export default userRouter;
