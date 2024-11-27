const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");
const Curso = require("./cursoModel");
const Usuario = require("./usuarioModel");

const Avaliacao = sequelize.define("Avaliacao", {
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nivelAvaliacao: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
});

Usuario.belongsToMany(Curso, { through: Avaliacao });
Curso.belongsToMany(Usuario, { through: Avaliacao });

Avaliacao.sync() //.sync({ force: true })
  .then(() => console.log("Tabela Avaliacao sincronizada com sucesso!"))
  .catch((err) =>
    console.log("Erro ao sincronizar a tabela Avaliacao: " + err)
  );

module.exports = Avaliacao;
