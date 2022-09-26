const { models } = require('../libs/sequelize');

class Product {
  static findAll = async () => {
    return await models.Product.findAll();
  };

  static create = async (data) => {
    return await models.Product.create(data);
  };

  static findOne = async (id, next) => {
    try {
      return await models.Product.findByPk(id);
    } catch (err) {
      return next(err);
    }
  };

  static update = async (id, data, next) => {
    try {
      return await models.Product.update(data, { where: { id } });
    } catch (err) {
      return next(err);
    }
  };

  static delete = async (id, next) => {
    try {
      await models.Product.destroy({ where: { id } });
      return id;
    } catch (err) {
      return next(err);
    }
  };
}

module.exports = Product;
