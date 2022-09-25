const express = require('express');
const validatorHandler = require('../middleware/validator.middleware');
const {
  getAllUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
} = require('../controllers/users');
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
  .get(validatorHandler(getUserSchema, 'params'), getUser)
  .patch(
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    patchUser
  )
  .delete(validatorHandler(getUserSchema, 'params'), deleteUser);

module.exports = router;
