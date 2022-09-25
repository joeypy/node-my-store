const getConnection = require('../libs/postgres');
const User = require('../services/users');

// @desc        Get all users
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getAllUsers = async (req, res) => {
  const client = await getConnection();
  const rta = await client.query('SELECT * FROM users');

  res.status(200).json({
    success: true,
    count: rta.rowCount,
    data: rta.rows,
  });
};

// exports.getUser = (req, res) => {
//   const { id } = req.params;
//   const user = service.findOne(id);

//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// };

exports.postUser = (req, res) => {
  const { name, email } = req.body;

  const user = new User();
  user.create(name, email);

  res.status(201).json({
    success: true,
    data: { name, email },
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
