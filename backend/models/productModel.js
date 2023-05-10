import mongoose from "mongoose";

// mongoose.Schema accepts object as first parameter and second parameter as options
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true, // by having this setting, when we create a record or document in collection, automatically two new fields will be added to these fields, createdAt and updatedAt for each record
  }
);

// now create a model based on above schema
const ProductModel = mongoose.model("ProductModel", productSchema);
export default ProductModel;
