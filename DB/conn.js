const { Sequelize } = require("sequelize");
const conexao = new Sequelize(
  "postgres://postgres:joaS12012022@localhost:5432/DB_Node",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);

try {
  conexao.authenticate();
  console.log("conexao estabelecida");
} catch (error) {
  console.log("erro ao testar a conexão:" + error);
}

module.exports = conexao;
