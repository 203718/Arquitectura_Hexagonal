import Product from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ProductRepositoryImp implements ProductRepository {
  async getProducts(): Promise<Product[] | null> {
    const products = await Product.findAll();

    if (!products) return null;
    return products as any; 
  }

  async getProductById(productId: string): Promise<Product | null> {
    const product = await Product.findByPk(productId);

    if (!product) return null;
    return product as any;
  }

  async createProduct(product: any): Promise<Product | null> {
    const newProduct = await Product.create(product);
    return newProduct as any; 
  }
}
