const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pickupAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dropAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alterPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    length: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    breadth: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    trackId: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = Order;