const { models } = require('../libs/sequelize');

class User {
  static findAll = async () => {
    return await models.User.findAll();
  };

  static create = async (data) => {
    return await models.User.create(data);
  };

  static findOne = async (id, next) => {
    try {
      return await models.User.findByPk(id);
    } catch (err) {
      return next(err);
    }
  };

  static update = async (id, data, next) => {
    try {
      return await models.User.update(data, { where: { id } });
    } catch (err) {
      return next(err);
    }
  };

  static delete = async (id, next) => {
    try {
      await models.User.destroy({ where: { id } });
      return id;
    } catch (err) {
      return next(err);
    }
  };
}

module.exports = User;
