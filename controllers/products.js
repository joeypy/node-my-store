const ErrorResponse = require('./../utils/errorResponse');
const { faker } = require('@faker-js/faker');
// const products = require('../_data/products.json');
const fs = require('fs');
const HandleFile = require('../utils/handleFile');

// @desc        Get all products
// @route       GET /api/v1/products
// @access      Public
exports.getAllProducts = async (req, res, next) => {
  const products = HandleFile.readFile(next);

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
};

// @desc        Get simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.getProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not fount with id of ${id} not found`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

// @desc        Create new products
// @route       GET /api/v1/products/:id
// @access      Public
exports.postProduct = async (req, res, next) => {
  const newProduct = {
    id: faker.datatype.uuid(),
    ...req.body,
  };

  let products = HandleFile.readFile(next);
  products.push(newProduct);

  HandleFile.writeFile(products, next);

  res.status(201).json({
    success: true,
    message: 'New data added',
    data: newProduct,
  });
};

// @desc        Update simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.patchProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  let products = HandleFile.readFile(next);

  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return next(
      new ErrorResponse(`Product not fount with id of ${id} not found`, 404)
    );
  }

  products[index] = {
    ...products[index],
    ...data,
  };

  HandleFile.writeFile(products, next);

  res.status(200).json({
    success: true,
    data: products[index],
  });
};

// @desc        Delete simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  let products = HandleFile.readFile(next);

  const index = products.findIndex((item) => item.id === id);
  if (index === -1) {
    return next(
      new ErrorResponse(`Product not fount with id of ${id} not found`, 404)
    );
  }

  products.splice(index, 1);
  HandleFile.writeFile(products, next);

  res.status(200).json({
    success: true,
    message: `Product id ${id} was deleted.`,
  });
};
