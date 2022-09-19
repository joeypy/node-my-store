const express = require('express');
const {
  getAllProducts,
  getProduct,
  postProduct,
  patchProduct,
  deleteProduct,
} = require('../controllers/products');

const router = express.Router();

// Routes
router
  .route('/')
  .get(getAllProducts)
  .post(postProduct);

router
  .route('/:id')
  .get(getProduct)
  .patch(patchProduct)
  .delete(deleteProduct);

module.exports = router;
