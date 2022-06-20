import { Request, Response } from "express";
import productService from "../services/productService";

const getAllProducts = (req: Request, res: Response) => {
  //get all products will make it slow so we have to use req.query
  //to filter our products and get back specific number of products
  //best practice (filtering-sort -pagination)
  try {
    const allProducts = productService.getAllProducts();
    res
    .status(201).send({ status: "OK", data: allProducts })
    
  } catch (error) {
    res
    .status(500).send({status:"FAILED",data:error})
    
  }
};

const getOneProduct = (req: Request, res: Response) => {
  const {
    params: { productId },
  } = req;
  if (!productId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':productId' can not be empty" },
      });
      
  }
  try {
    const product = productService.getOneProduct(productId);
    res.send({ status: "OK", data: product });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const createNewProduct = (req: Request, res: Response) => {
  const { body } = req;
  // extract data from request body to create new product
  if (
    !body.name ||
    !body.category ||
    !body.description ||
    !body.price ||
    !body.brand
    
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          `One of the following keys is missing or is empty in request body: 
          'name','category', 'description', 'price','brand'`,
      },
    });
    return;
  }
  //assign new product to request body
  const newProduct: object = {
    name: body.name,
    category: body.category,
    description:body.description,
    price: body.price,
    brand:body.brand,
  };
  try {
    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({ status: "OK", data: createdProduct });
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: { error: error } });
  }
};

const updateOneProduct = (req: Request, res: Response) => {
  const {
    body,
    params: { productId },
  } = req;
  if (!productId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':productId' can not be empty" },
      });
  }
  try {
    const updatedProduct = productService.updateOneProduct(productId, body);
    res.send({ status: "OK", data: updatedProduct });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const deleteOneProduct = (req: Request, res: Response) => {
  const {
    params: { productId },
  } = req;
  if (!productId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':productId' can not be empty" },
      });
  }
  try {
    productService.deleteOneProduct(productId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const productController = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};

export default productController;
