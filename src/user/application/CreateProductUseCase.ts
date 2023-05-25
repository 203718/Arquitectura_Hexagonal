import { ProductRepository } from "../domain/ProductRepository";

export class CreateProductUseCase {
  constructor(
    readonly productRepository: ProductRepository
  ) {}

  async run(product: any) {
    const newProduct = await this.productRepository.createProduct(product);
    return newProduct;
  }
}
