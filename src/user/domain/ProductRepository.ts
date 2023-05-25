import Product from "./Product";

export interface ProductRepository {
  getProducts(): Promise<Product[] | null>;
  getProductById(productId: string): Promise<Product | null>;
  createProduct(product: any): Promise<Product | null>;
}
