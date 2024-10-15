const express = require("express");
const exphbrs = require("express-handlebars");
const app = express();
const porta = 3000;
const usuarioRouter = require("./routers/usuarioRouter");
const cursoRouter = require("./routers/cursoRouter");
const tokenService = require("./controllers/tokenService");
const cookieParser = require("cookie-parser");

app.engine("handlebars", exphbrs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// para utilizar cookies
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/usuario", usuarioRouter);
app.use("/curso", cursoRouter);

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
