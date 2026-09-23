import Product from "../model/productModel.js";

const createProduct = async (req, res, next) => {
  try {
    const { name, price, description, image } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ message: "Name and Price are required fields" });
    }
    const newProduct = await Product.create({
      name,
      price: Number(price),
      description,
      image,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
};
const getAllProduct = async (req, res, next) => {};
const getProductById = async (req, res, next) => {};
const updateProduct = async (req, res, next) => {};
const deleteProduct = async (req, res, next) => {};

export {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
