const { Sequelize } = require('sequelize');

const ProductModel = require('../models/products.models');

class SequelizeLib {
  constructor() {
    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'data/db.sqlite',
      logging: process.env.NODE_ENV === 'development',
    });
    ProductModel(this.sequelize);
    this.connect();
  }

  async connect() {
    try {
      await this.sequelize.sync();
      console.log('[DB] Connected Successfully');
    } catch (error) {
      console.error(`[DB] Error while connecting: ${error}`);
    }
  }

  async getAll(table) {
    const products = await this.sequelize.models[table].findAll();
    return products;
  }

  async get(table, id) {
    const [response] = await this.sequelize.models[table].findAll({ where: { id } });
    return response;
  }

  async create(table, data) {
    const response = await this.sequelize.models[table].create(data);
    return response;
  }

  async update(table, id, data) {
    await this.sequelize.models[table].update(data, { where: { id } });
  }

  async delete(table, id) {
    await this.sequelize.models[table].destroy({ where: { id } });
  }
}

module.exports = SequelizeLib;
