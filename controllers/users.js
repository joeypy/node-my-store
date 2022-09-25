const User = require('../services/users.service');

// @desc        Get all users
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getAllUsers = async (req, res, next) => {
  let resp;

  try {
    resp = await User.findAll();
  } catch (err) {
    next(err);
    return;
  }

  res.status(200).json({
    success: true,
    count: resp.length,
    data: resp,
  });
};

exports.getUser = async (req, res, netx) => {
  const { id } = req.params;
  let resp;

  try {
    resp = await User.findOne(id);
  } catch (err) {
    next(err);
    return;
  }

  res.status(200).json({
    success: true,
    data: resp,
  });
};

exports.postUser = async (req, res, next) => {
  const { email, password } = req.body;
  let resp;

  try {
    resp = await User.create({ email, password }, next);
  } catch (err) {
    next(err);
    return;
  }

  res.status(201).json({
    success: true,
    message: 'Object created successfully.',
    data: resp,
  });
};

exports.patchUser = async (req, res, next) => {
  const { id } = req.params;
  let resp;

  try {
    resp = await User.update(id, req.body, next);
  } catch (err) {
    next(err);
    return;
  }

  res.status(200).json({
    success: true,
    message: 'Object updated successfully.',
    data: req.body,
  });
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  let resp;

  try {
    resp = await User.delete(id, next);
  } catch (err) {
    next(err);
    return;
  }

  res.status(200).json({
    success: true,
    message: 'Object deleted successfully.',
    data: resp,
  });
};
