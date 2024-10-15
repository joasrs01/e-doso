
const { DataTypes } = require('sequelize');
const sequelize = require('../DB/conn');

const Cursos = sequelize.define('Curso', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Cursos.sync()
  //.sync({ force: true })
  .then(() => console.log("Tabela Cursos Sincronizada com sucesso!"))
  .catch((err) => console.log("erro ao sincronizar a tabela Cursos: " + err));

module.exports = Cursos;
