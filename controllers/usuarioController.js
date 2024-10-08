const bcrypt = require("bcrypt");
const Usuario = require("../models/usuarioModel");
const tokenService = require("./tokenService");

module.exports = class UsuarioController {
  static abrirCadastroUsuario(req, res) {
    res.render("usuario/cadastrarUsuario");
  }

  static async cadastrarUsuario(req, res) {
    let msgEmail = undefined;
    let msgLogin = undefined;

    const nome = req.body.nome;
    const email = req.body.email;
    const login = req.body.login;
    const senha = req.body.senha;

    if (
      (await Usuario.count({
        where: {
          email,
        },
      })) > 0
    ) {
      msgEmail = "E-mail já está sendo utilizado.";
    }

    if (
      (await Usuario.count({
        where: {
          login,
        },
      })) > 0
    ) {
      msgLogin = "User já está sendo utilizado.";
    }

    if (msgEmail || msgLogin) {
      res.render("usuario/cadastrarUsuario", { msgEmail, msgLogin });
    } else {
      //gera a senha criptografada
      const senhaHash = bcrypt.hashSync(senha, 10);

      let usuario = {
        nome: nome,
        email: email,
        login: login,
        senha: senhaHash,
      };

      usuario = await Usuario.create(usuario);

      gerarCookieToken(res, usuario);

      res.redirect("/");
    }
  }

  static abrirLogin(req, res) {
    res.render("usuario/login", {
      esconderMsgInvalido: true,
      usuarioAutenticado: req.usuario,
    });
  }

  static async autenticarUsuario(req, res) {
    const login = req.body.login;
    const senha = req.body.senha;
    let valido = false;

    const usuario = await Usuario.findOne({
      raw: true,
      where: {
        login: login,
      },
    });

    if (usuario && (await bcrypt.compare(senha, usuario.senha))) {
      gerarCookieToken(res, usuario);

      res.redirect("/");
    } else {
      res.render("usuario/login", { esconderMsgInvalido: false });
    }
  }

  static logoffUsuario(req, res) {
    res.clearCookie("token_usuario_foh");
    res.redirect("/");
  }

  static async perfilUsuario(req, res) {}
};

function gerarCookieToken(res, usuario) {
  const token = gerarTokenAutenticado(usuario);

  res.cookie("token_usuario_foh", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 hora
  });
}

function gerarTokenAutenticado(usuario) {
  return tokenService.assinarToken({
    userId: usuario.id,
    userName: usuario.nome,
  });
}
