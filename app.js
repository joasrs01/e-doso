const express = require("express");
// const exphbs = require('express-handlebars');
const path = require("path");

const { engine } = require("express-handlebars");

const app = express();
const porta = 3000;
const configRouter = require("./routers/configRouter"); 
const usuarioRouter = require("./routers/usuarioRouter");
const cursoRouter = require("./routers/cursoRouter");
const tokenService = require("./controllers/tokenService");
const comentarioRoutes = require("./routers/comentarioRoutes");
const cookieParser = require("cookie-parser");
const Comentario = require("./models/comentarioModel");

// app.engine("handlebars", exphbrs.engine());
// app.set("view engine", "handlebars");

// Configuração do Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    helpers: {
      formatDate: function (date) {
        if (!date) return "";
        return new Date(date).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      },
      or: (a, b) => a || b,
      and: (a, b) => a && b,
      igual: (a, b) => a == b,
      maiorOuIgual: (a, b) => a >= b,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

// para utilizar cookies
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuario", usuarioRouter);
app.use("/curso", cursoRouter);
app.use("/", comentarioRoutes);
app.use("/config", configRouter);

app.get("/", tokenService.verificarToken, (req, res) => {
  //res.send("Olá servidor!");
  res.redirect("curso/");
  //res.render("principal", { usuarioAutenticado: req.usuario });
});

app.listen(porta, (err) => {
  if (err) {
    console.log("Erro ao iniciar servidor na porta " + porta);
  } else {
    console.log("Servidor rodando na porta " + porta);
  }
});
