const { Sequelize } = require('sequelize');
const config = require('./../config/config');
const setupModels = require('./../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
});

setupModels(sequelize);

// Only use this in development mode, otherwise it's gone to
// overwrite the database every time that execute .sync() method
// sequelize.sync();

module.exports = sequelize;
