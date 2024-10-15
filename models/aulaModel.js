const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");
const Curso = require("./cursoModel");

const Aula = sequelize.define("Aula", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Aula.belongsTo(Curso);
Curso.hasMany(Aula);

Aula.sync()
  //.sync({ force: true })
  .then(() => console.log("Tabela Aula Sincronizada com sucesso!"))
  .catch((err) => console.log("erro ao sincronizar a tabela Aula: " + err));

module.exports = Aula;
