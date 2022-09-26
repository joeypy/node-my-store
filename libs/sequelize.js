const { Sequelize } = require('sequelize');
const setupModels = require('./../config');

require('dotenv').config();

const USER = encodeURIComponent(process.env.DB_USER);
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
});

setupModels(sequelize);

// Only use this in development mode, otherwise it's gone to
// overwrite the database every time that execute .sync() method
// sequelize.sync();

module.exports = sequelize;
