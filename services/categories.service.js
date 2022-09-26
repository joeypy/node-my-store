const { models } = require('../libs/sequelize');

class Category {
  static findAll = async () => {
    return await models.Category.findAll();
  };

  static create = async (data) => {
    return await models.Category.create(data);
  };

  static findOne = async (id, next) => {
    try {
      return await models.Category.findByPk(id);
    } catch (err) {
      return next(err);
    }
  };

  static update = async (id, data, next) => {
    try {
      return await models.Category.update(data, { where: { id } });
    } catch (err) {
      return next(err);
    }
  };

  static delete = async (id, next) => {
    try {
      await models.Category.destroy({ where: { id } });
      return id;
    } catch (err) {
      return next(err);
    }
  };
}

module.exports = Category;
