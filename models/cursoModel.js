const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");

const Cursos = sequelize.define("Curso", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

Cursos.sync() //.sync({ force: true })
  .then(() => console.log("Tabela Cursos Sincronizada com sucesso!"))
  .catch((err) => console.log("erro ao sincronizar a tabela Cursos: " + err));

module.exports = Cursos;
