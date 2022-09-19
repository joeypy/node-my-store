const { products } = require('../_data/products');
const ProductServices = require('../services/products.service');

const service = new ProductServices();

// @desc        Get all products
// @route       GET /api/v1/products
// @access      Public
exports.getAllProducts = async (req, res) => {
  const products = await service.find()
  res.status(200).json({
    success: true,
    count: await service.count,
    data: products,
  });
};

// @desc        Get simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);

  res.status(200).json({
    success: true,
    data: product,
  });
};

// @desc        Create new products
// @route       GET /api/v1/products/:id
// @access      Public
exports.postProduct = async (req, res) => {
  const data = req.body;
  const product = await service.create(data);

  res.status(201).json({
    success: true,
    data: product,
  });
};

// @desc        Update simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.patchProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  let product = await service.update(id, data);

  res.status(200).json({
    success: true,
    data: product,
  });
};

// @desc        Delete simple product
// @route       GET /api/v1/products/:id
// @access      Public
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  let product = await service.delete(id);

  res.status(200).json({
    success: true,
    data: product,
  });
};
