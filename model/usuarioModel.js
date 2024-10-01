module.exports = class UsuarioModel {
  static async cadastroUsuario(req, res) {
    res.render("cadastrarUsuario");
  }

  static async login(req, res) {
    res.render("login");
  }
};
