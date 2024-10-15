
const { DataTypes } = require('sequelize');
const sequelize = require('../DB/conn');

const Inscricao = sequelize.define('Inscricao', {
  cursoDescricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios', // Nome da tabela de usuários
      key: 'id'
    }
  }
});

Inscricao.sync()
  //.sync({ force: true })
  .then(() => console.log("Tabela Usuario Sincronizada com sucesso!"))
  .catch((err) => console.log("erro ao sincronizar a tabela Usuario: " + err));

module.exports = Inscricao;
