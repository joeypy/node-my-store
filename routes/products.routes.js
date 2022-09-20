const express = require('express');
const {
  getAllProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require('../controllers/products');
const validatorHandler = require('../middleware/validator.middleware');
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
} = require('../models/products.schema');

const router = express.Router();

// Routes
router
  .route('/')
  .get(getAllProducts)
  .post(validatorHandler(createProductSchema, 'body'), postProduct);

router
  .route('/:id')
  .get(validatorHandler(getProductSchema, 'params'), getProduct)
  .patch(
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    patchProduct
  )
  .delete(validatorHandler(getProductSchema, 'params'), deleteProduct);

module.exports = router;
