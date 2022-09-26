const { User, UserSchema } = require('./../db/models/user.model');
const { Customer, CustomerSchema } = require('./../db/models/customer.model');
const { Category, CategorySchema } = require('./../db/models/category.model');
const { Product, ProductSchema } = require('./../db/models/product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
