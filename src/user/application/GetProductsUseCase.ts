import { ProductRepository } from "../domain/ProductRepository";

export class GetProductsUseCase {
  constructor(
    readonly productRepository: ProductRepository
  ) {}

  async run() {
    const products = await this.productRepository.getProducts();
    return products;
  }
}
