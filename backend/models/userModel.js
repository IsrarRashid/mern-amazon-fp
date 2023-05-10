import mongoose from "mongoose";

// mongoose.Schema accepts object as first parameter and second parameter as options
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true, // by having this setting, when we create a record or document in collection, automatically two new fields will be added to these fields, createdAt and updatedAt for each record
  }
);

// now create a model based on above schema
const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
