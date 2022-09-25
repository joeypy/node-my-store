require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbHost: process.env.HOST,
  dbPort: process.env.DB_MYSQL_PORT,
  dbUser: process.env.DB_MYSQL_USER,
  dbPassword: process.env.DB_MYSQL_PASSWORD,
  dbName: process.env.DB_MYSQL_NAME,
};

module.exports = config;