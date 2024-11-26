const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../DB/conn");
const Usuario = require("./usuarioModel");
const Curso = require("./cursoModel");

const Inscricao = sequelize.define("Inscricao", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

Usuario.belongsToMany(Curso, { through: Inscricao });
Curso.belongsToMany(Usuario, { through: Inscricao });

Inscricao.sync()
  //.sync({ force: true })
  .then(() => console.log("Tabela Inscricao Sincronizada com sucesso!"))
  .catch((err) =>
    console.log("erro ao sincronizar a tabela Inscricao: " + err)
  );

module.exports = Inscricao;
