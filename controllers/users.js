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
    return
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
    return
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
    console.log(err)
    next(err);
    return;
  }

  res.status(201).json({
    success: true,
    data: resp,
  });
};

// exports.patchUser = (req, res) => {
//   const { id } = req.params;
//   let productUpdated = {};

//   const data = users.map((user) => {
//     if (user.id == id) {
//       productUpdated = { ...user, ...req.body };
//       return productUpdated;
//     }
//     return user;
//   });

//   res.status(200).json({
//     success: true,
//     count: users.length,
//     data: productUpdated,
//   });
// };

// exports.deleteUser = (req, res) => {
//   const { id } = req.params;

//   const data = users.filter((user) => user.id != id);

//   res.status(200).json({
//     success: true,
//     count: data.length,
//     data: data,
//   });
// };
