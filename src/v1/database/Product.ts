//const DB = require("./db.json");
import DB from "./database";
//const { saveToDatabase } = require("./utils");
import saveToDatabase from "./utils";

const getAllProducts = () => {
  try {
    return DB.products;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneProduct = (productId:string) => {
  try {
    const product = DB.products.find((product:any) => product.id === productId);
    if (!product) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    return product;
  } catch (error) {
    throw { status:  500, message: error};
  }
};

const createNewProduct = (newProduct:any) => {
  try {
    const isAlreadyAdded =
      DB.products.findIndex((product:any) => product.name === newProduct.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Product with the name '${newProduct.name}' already exists`,
      };
    }
    DB.products.push(newProduct);
    saveToDatabase(DB);
    return newProduct;
  } catch (error) {
    throw { status:  500, message: error };
  }
};

const updateOneProduct = (productId:string, changes:any) => {
  try {
    const isAlreadyAdded =
      DB.products.findIndex((product:any) => product.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Product with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.products.findIndex(
      (product:any) => product.id === productId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    const updatedProduct = {
      ...DB.products[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.products[indexForUpdate] = updatedProduct;
    saveToDatabase(DB);
    return updatedProduct;
  } catch (error) {
    throw { status:  500, message: error };
  }
};

const deleteOneProduct = (productId:string) => {
  try {
    const indexForDeletion = DB.products.findIndex(
      (product:any) => product.id === productId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    DB.products.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status:  500, message: error };
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};