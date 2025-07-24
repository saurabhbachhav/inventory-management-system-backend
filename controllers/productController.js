// backend/controllers/productController.js
const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ product_id: newProduct._id });
  } catch (err) {
    res.status(500).json({ message: "Failed to add product" });
  }
};

exports.updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const updated = await Product.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch products" });
  }
};
