const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres.pool');

class User {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async findAll() {
    const query = 'SELECT * FROM users'
    return await this.pool.query(query);
  }

  async create(name, email) {
    try {
      await this.pool.query(
        `INSERT INTO users ("name", "email")
         VALUES ($1, $2)`,
        [name, email]
      );
    } catch (error) {
      console.error(error.stack);
    }
  }

  async findOne(id) {}
  async update(id) {}
  async delete(id) {}
}

module.exports = User;
