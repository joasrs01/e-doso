const { DataTypes } = require("sequelize");
const sequelize = require("../DB/conn");
const Aula = require("./aulaModel");

const Comentario = sequelize.define("Comentario", {
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nomeUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definindo as associações
Comentario.belongsTo(Aula); // Comentario tem AulaId
Aula.hasMany(Comentario);

// Sincronização do modelo com o banco de dados
Comentario.sync()
  .then(() => console.log("Tabela Comentario sincronizada com sucesso!"))
  .catch((err) => console.log("Erro ao sincronizar a tabela Comentario: " + err));

module.exports = Comentario;
