import { Request, Response } from "express";
import { GetProductsUseCase } from "../application/GetProductsUseCase";
import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetProductByIdUseCase } from "../application/GetByIdProductsUseCase";

export class ProductController {
  constructor(
    private getProductsUseCase: GetProductsUseCase,
    private createProductUseCase: CreateProductUseCase,
    private getProductByIdUseCase: GetProductByIdUseCase
  ) {}

  async getProducts(req: Request, res: Response) {
    const products = await this.getProductsUseCase.run();
    res.status(200).send(products);
  }

  async getProductById(req: Request, res: Response) {
    const productId = req.params.id;
    const product = await this.getProductByIdUseCase.run(productId);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).send(product);
    }
  }

  async createProduct(req: Request, res: Response) {
    const product = req.body;
    const newProduct = await this.createProductUseCase.run(product);
    res.status(200).send(newProduct);
  }
}

