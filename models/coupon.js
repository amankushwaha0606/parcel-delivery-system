const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Coupon = sequelize.define('coupons', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

module.exports = Coupon;