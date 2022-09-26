const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    type: DataTypes.UUID,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  price: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, User };
