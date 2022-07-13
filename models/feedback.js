const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Feedback = sequelize.define('feedbacks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    review: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Feedback;