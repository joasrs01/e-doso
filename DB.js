
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres', // Change this to 'mysql', 'sqlite', etc., if needed
});

module.exports = sequelize;
