const { faker } = require('@faker-js/faker');

class UsersServices {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
      });
    }
  }

  find() {
    return this.users;
  }
  
  findOne(id) {
    return this.users.find((user) => user.id === id);
  }
}

module.exports = UsersServices;
