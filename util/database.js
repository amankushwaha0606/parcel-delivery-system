const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini-project', 'root', 'This123!@#', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;