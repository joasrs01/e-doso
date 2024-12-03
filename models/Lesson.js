
const { DataTypes } = require('sequelize');
const sequelize = require('../DB');

const Lesson = sequelize.define('Lesson', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Lesson;
