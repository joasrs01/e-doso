const inscricaoModel = require("../models/inscricaoModel");
const aulaModel = require("../models/aulaModel");
const cursoModel = require("../models/cursoModel");

module.exports = class Curso {
  static async verCursos(req, res) {
    const cursos = await cursoModel.findAll({ raw: true });
    res.render("curso/selecionaCurso", {
      usuarioAutenticado: req.usuario,
      cursos,
    });
  }

  static async inscreverCurso(req, res) {
    const { cursoDescricao, userId } = req.body;

    try {
      // Criar uma nova inscrição
      const novaInscricao = await inscricaoModel.create({
        cursoDescricao,
        userId,
      });

      res
        .status(201)
        .json({ message: "Inscrição realizada com sucesso!", novaInscricao });
    } catch (error) {
      res.status(500).json({ message: "Erro ao realizar inscrição", error });
    }
  }

  static async verAulas(req, res) {
    const cursoId = req.params.cursoId;
    try {
      // Encontrar o curso e as aulas associadas
      const curso = await cursoModel.findOne({
        raw: true,
        where: { id: cursoId },
      });
      const aulas = await aulaModel.findAll({
        raw: true,
        where: { CursoId: cursoId },
      });
      if (!curso) {
        return res
          .status(404)
          .json({ message: "Curso ou aulas não encontradas" });
      }

      res.render("curso/selecionaAula", {
        curso,
        aulas,
        usuarioAutenticado: req.usuario,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao carregar aulas", error });
    }
  }

  static async visualizarAula(req, res) {
    try {
      const aulaId = req.params.aulaId;
      const aula = await aulaModel.findOne({
        raw: true,
        where: { id: aulaId },
      });

      console.log(aula);

      res.render("curso/aula", { usuarioAutenticado: req.usuario, aula: aula });
    } catch (error) {
      res.status(500).json({ message: "Erro ao carregar aulas", error });
    }
  }
};
