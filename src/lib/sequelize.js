const { Sequelize } = require('sequelize');

const ProductModel = require('../models/products.models');

class SequelizeLib {
  constructor() {
    this.client = new Sequelize({
      dialect: 'sqlite',
      storage: 'data/db.sqlite',
    });
    ProductModel(this.client);
    console.log(this.client.models);
    this.connect();
  }

  async connect() {
    try {
      await this.client.authenticate();
      await this.client.sync();
      console.log('[DB] Connected Successfully');
    } catch (error) {
      console.error(`[DB] Error while connecting: ${error}`);
    }
  }

  async getAll(table) {
    const products = await this.client.models[table].findAll();
    return products;
  }

  async get(table, id) {
    const [response] = await this.client.models[table].findAll({ where: { id } });
    return response;
  }

  async create(table, data) {
    const response = await this.client.models[table].create(data);
    return response;
  }

  async update(table, id, data) {
    await this.client.models[table].update(data, { where: { id } });
  }

  async delete(table, id) {
    await this.client.models[table].destroy({ where: { id } });
  }
}

module.exports = SequelizeLib;
