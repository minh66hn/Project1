const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
};
