const { models } = require('../libs/sequelize');

class Customer {
  static findAll = async () => {
    return await models.Customer.findAll();
  };

  static create = async (data) => {
    return await models.Customer.create(data);
  };

  static findOne = async (id, next) => {
    try {
      return await models.Customer.findByPk(id);
    } catch (err) {
      return next(err);
    }
  };

  static update = async (id, data, next) => {
    try {
      return await models.Customer.update(data, { where: { id } });
    } catch (err) {
      return next(err);
    }
  };

  static delete = async (id, next) => {
    try {
      await models.Customer.destroy({ where: { id } });
      return id;
    } catch (err) {
      return next(err);
    }
  };
}

module.exports = Customer;
