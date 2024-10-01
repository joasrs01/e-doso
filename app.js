const express = require("express");
const exphbrs = require("express-handlebars");
const app = express();
const porta = 3000;
const usuarioRouter = require("./routers/usuarioRouter");
const cursoRouter = require("./routers/cursoRouter");

app.engine("handlebars", exphbrs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuario", usuarioRouter);
app.use("/curso", cursoRouter);

app.get("/", (req, res) => {
  //res.send("Olá servidor!");
  res.render("principal");
});

app.listen(porta, (err) => {
  if (err) {
    console.log("Erro ao iniciar servidor na porta " + porta);
  } else {
    console.log("Servidor rodando na porta " + porta);
  }
});
