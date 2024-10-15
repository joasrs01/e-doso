
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


Aula.sync()
  //.sync({ force: true })
  .then(() => console.log("Tabela Usuario Sincronizada com sucesso!"))
  .catch((err) => console.log("erro ao sincronizar a tabela Usuario: " + err));

module.exports = Aula;
