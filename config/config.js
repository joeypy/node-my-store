require('dotenv').config();

const USER = encodeURIComponent(process.env.DB_USER);
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

module.exports = {
  development: {
    url: URI,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    dialect: 'postgres',
  },
};
