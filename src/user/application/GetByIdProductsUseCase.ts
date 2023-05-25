import { ProductRepository } from "../domain/ProductRepository";
import  Product  from "../domain/Product";

export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(productId: string): Promise<Product | null> {
    const product = await this.productRepository.getProductById(productId);
    return product;
  }
}
