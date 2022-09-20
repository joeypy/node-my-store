const ErrorResponse = require('./../utils/errorResponse');
// const products = require('../_data/products.json');
const fs = require('fs');

class HandleFile {
  static writeFile(data, next) {
    try {
      fs.writeFileSync('./_data/products.json', JSON.stringify(data, null));
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse(err.message, 400));
    }
    console.log('New data added successfully');
  }

  static readFile(next) {
    let data;
    try {
      data = fs.readFileSync('./_data/products.json');
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse(err.message, 400));
    }
    return JSON.parse(data);
  }

  static updateFile(next) {}
}

module.exports = HandleFile;
