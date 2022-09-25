const express = require('express');
const { getAllUsers, postUser } = require('../controllers/users');

const router = express.Router();

// Routes
router
  .route('/')
  .get(getAllUsers)
  .post(postUser);

// router
//   .route('/:id')
//   .get(getProduct)
//   .patch(patchProduct)
//   .delete(deleteProduct);

module.exports = router;
