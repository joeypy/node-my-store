const { models } = require('../libs/sequelize');

class User {
  static findAll = async () => {
    return await models.User.findAll();
  };

  static create = async (data) => {
    return await models.User.create(data);
  };

  static findOne = async (id) => {
    return await models.User.findByPk(id);
  }

  static update = async (id) => {}
  
  static delete = async (id) => {}
}

module.exports = User;
