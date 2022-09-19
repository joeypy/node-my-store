const { users } = require('../_data/users');
const UsersServices = require('../services/users.service');

const service = new UsersServices();

// @desc        Get all users
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: service.find().length,
    data: service.find(),
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);

  res.status(200).json({
    success: true,
    data: user,
  });
};

exports.postUser = (req, res) => {
  users.push({
    id: users.length + 1,
    ...req.body,
  });
  res.status(201).json({
    success: true,
    count: users.length,
    data: req.body,
  });
};

exports.patchUser = (req, res) => {
  const { id } = req.params;
  let productUpdated = {};

  const data = users.map((user) => {
    if (user.id == id) {
      productUpdated = { ...user, ...req.body };
      return productUpdated;
    }
    return user;
  });

  res.status(200).json({
    success: true,
    count: users.length,
    data: productUpdated,
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const data = users.filter((user) => user.id != id);

  res.status(200).json({
    success: true,
    count: data.length,
    data: data,
  });
};
