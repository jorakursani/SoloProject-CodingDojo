const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    boxArt: {
      type: String,
      required: [true, "Product boxArt is required"],
    },
    name: {
      type: String,
      required: [true, "The product name is required!!"],
      minlength: [
        3,
        "The length of the name should be at least three characters!!",
      ],
    },
    description: {
      type: String,
      required: [true, "The product description is required!!"],
    },
    status: {
      type: String,
      required: [true, "The product status is required!"],
      enum: ["In stock", "Out of stock"],
    },
    price: {
      type: Number,
      required: [true, "The product price is required!"],
    },
    quantity: {
      type: Number,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      required: [true, "The product quantity is required!"],
    },
    review: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
