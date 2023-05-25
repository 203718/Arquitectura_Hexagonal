import express from "express";
import { productController } from "./dependencies";

export const productRouter = express.Router();

productRouter.get("/", productController.getProducts.bind(productController));
productRouter.post("/", productController.createProduct.bind(productController));
productRouter.get("/:id", productController.getProductById.bind(productController));

