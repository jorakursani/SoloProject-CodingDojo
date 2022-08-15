const Product = require("../models/product.model");

module.exports = {
  getProducts: (req, res) => {
    Product.find({})
      .collation({ locale: "en" })
      .sort({ name: 1 })
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        console.log("ERROR IN Get all", err);
        res.status(400).json({
          message: "something went wrong in finding all products",
          error: err,
        });
      });
  },
  getProductById: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        console.log("ERROR IN Get Product", err);
        res.status(400).json({
          message: "something went wrong in finding the product",
          error: err,
        });
      });
  },
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        res.status(201).json(newProduct);
      })
      .catch((err) => {
        console.log("ERROR IN create product", err);
        res.status(400).json({
          message: "something went wrong in creating the product",
          err,
        });
      });
  },
  updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        console.log("ERROR IN update product", err);
        res.status(400).json({
          message: "something went wrong in updating the product",
          errors: err.errors,
        });
      });
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        console.log("ERROR IN delete product", err);
        res.status(400).json({
          message: "something went wrong in deleting the product",
          error: err,
        });
      });
  },
};
