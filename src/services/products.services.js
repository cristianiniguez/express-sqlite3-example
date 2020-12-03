const SequelizeLib = require('../lib/sequelize');

class ProductsService {
  constructor() {
    this.table = 'product';
    this.sequelizeDB = new SequelizeLib();
  }

  async getProducts() {
    const products = await this.sequelizeDB.getAll(this.table);
    return products;
  }

  async getProduct({ id }) {
    const product = await this.sequelizeDB.get(this.table, id);
    return product;
  }

  async createProduct({ data }) {
    const createdProduct = await this.sequelizeDB.create(this.table, data);
    return createdProduct;
  }

  async updateProduct({ id, data }) {
    await this.sequelizeDB.update(this.table, id, data);
  }

  async deleteProduct({ id }) {
    await this.sequelizeDB.delete(this.table, id);
  }
}

module.exports = ProductsService;
