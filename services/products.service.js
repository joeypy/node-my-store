const { faker } = require('@faker-js/faker');

class ProductServices {
  constructor() {
    this.products = [];
    this.count = 0;
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
      this.count++;
    }
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  create(data) {
    const product = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(product);
    this.count++;
    return product;
  }

  update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found.');
    }
    this.products[index] = {
      ...this.products[index],
      ...data,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found.');
    }
    this.products.splice(index, 1);
    this.count--;
    return { id, msg: 'Product delete.' };
  }
}

module.exports = ProductServices;
