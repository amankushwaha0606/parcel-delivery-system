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
    selectDefaultPickupAddress: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    dropAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    selectDefaultDropAddress: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
        defaultValue: -1.0,
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