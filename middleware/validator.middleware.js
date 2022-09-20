const ErrorResponse = require('./../utils/errorResponse');

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      return next(new ErrorResponse(error, 404));
    }
    next();
  };
};

module.exports = validatorHandler;
