import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";
import { ProductRepository } from "../domain/ProductRepository";

class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: string;
  public quantity!: string;
  public provider_id!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    sequelize,
    timestamps: false
  }
);

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

export default Product;
