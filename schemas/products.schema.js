const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(5).max(100);
const price = Joi.number().integer().min(0);
const description = Joi.string().min(10);
const image = Joi.string().uri();

const getProductSchema = Joi.object({
  id: id.required(),
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
