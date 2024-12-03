
const { DataTypes } = require('sequelize');
const sequelize = require('../DB');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Course;
