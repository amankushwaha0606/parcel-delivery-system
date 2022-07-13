const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
    zipCode: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
});

module.exports = User;