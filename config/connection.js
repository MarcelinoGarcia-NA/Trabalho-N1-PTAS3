const { Sequelize } = require('sequelize');
const config = require('../config/config');
const pg = require('pg');
require('dotenv').config();

const sequelize = new Sequelize(config.development.url, {
  define: {
    timetamps: true,
    underscored: true,
  },
  dialectModule: pg
});

try {
  sequelize.authenticate();
  console.log('conectado com a base de dados!');
} catch (error) {
  console.error('Sem comunicação com a base de dados!', error);
}

module.exports = { Sequelize, sequelize };