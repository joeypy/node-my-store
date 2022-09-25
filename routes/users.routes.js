const express = require('express');
const validatorHandler = require('../middleware/validator.middleware');
const { getAllUsers, postUser, getUser } = require('../controllers/users');
const {
  updateUserSchema,
  getUserSchema,
  createUserSchema,
} = require('../schemas/users.schema');

const router = express.Router();

// Routes
router
  .route('/')
  .get(getAllUsers)
  .post(validatorHandler(createUserSchema, 'body'), postUser);

router
  .route('/:id')
  .get(getUser)
//   .patch(patchProduct)
//   .delete(deleteProduct);

module.exports = router;
