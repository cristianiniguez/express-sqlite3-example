const { DataTypes, Model } = require('sequelize');

const ProductModel = (sequelize) => {
  class Product extends Model {}
  Product.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'product',
    },
  );
};

module.exports = ProductModel;
