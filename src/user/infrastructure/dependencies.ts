import { ProductController } from "./ProductController";
import { ProviderController } from "./ProviderController";
import { GetProductsUseCase } from "../application/GetProductsUseCase";
import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { GetProvidersUseCase } from "../application/GetProvidersUseCase";
import { GetProductByIdUseCase } from "../application/GetByIdProductsUseCase";
import { ProductRepositoryImp } from "./ProductRepositoryImp";
import { ProviderRepositoryImp } from "./ProviderRepositoryImp";

const productRepositoryImp = new ProductRepositoryImp();
const providerRepositoryImp = new ProviderRepositoryImp();
export const getProductsUseCase = new GetProductsUseCase(productRepositoryImp);
export const createProductUseCase = new CreateProductUseCase(productRepositoryImp);
export const getProviderUseCase = new GetProvidersUseCase(providerRepositoryImp);
export const getProductByIdUseCase = new GetProductByIdUseCase(productRepositoryImp);

export const productController = new ProductController(
  getProductsUseCase,
  createProductUseCase,
  getProductByIdUseCase
);
export const providerController = new ProviderController(getProviderUseCase);
