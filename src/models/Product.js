const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    size: { type: [String], required: true }, // e.g. ["S", "M", "L", "XL"]
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);