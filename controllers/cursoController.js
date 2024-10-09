module.exports = class CursoModel {
  static async selecionaCurso(req, res) {
    res.render("curso/selecionaCurso", { usuarioAutenticado: req.usuario });
  }
};
