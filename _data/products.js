const { faker } = require('@faker-js/faker');

let products = [];

const createProducts = () => {
  for (let i = 0; i < 100; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  console.log('Productos creados');
};

module.exports = {
  products,
  createProducts,
};
