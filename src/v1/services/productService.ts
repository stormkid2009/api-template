const { v4: uuid } = require("uuid");
//const Product = require("../database/Product");
import Product from "../database/Product";

const getAllProducts = () => {
  try {
    const allProducts = Product.getAllProducts();
    return allProducts;
  } catch (error) {
    throw error;
  }
};

const getOneProduct = (productId:string) => {
  try {
    const product = Product.getOneProduct(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

const createNewProduct = (newProduct: object) => {
  const productToInsert = {
    ...newProduct,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdProduct = Product.createNewProduct(productToInsert);
    return createdProduct;
  } catch (error) {
    throw error;
  }
};

const updateOneProduct = (productId:string, changes:any) => {
  try {
    const updatedProduct = Product.updateOneProduct(productId, changes);
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

const deleteOneProduct = (productId:string) => {
  try {
    Product.deleteOneProduct(productId);
  } catch (error) {
    throw error;
  }
};

const productService = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};

export default productService;
