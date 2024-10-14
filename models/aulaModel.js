
const { DataTypes } = require('sequelize');
const sequelize = require('../DB/conn');

const Aula = sequelize.define('Aula', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Cursos', // Supondo que você já tenha um modelo de curso
      key: 'id'
    }
  }
});

module.exports = Aula;
