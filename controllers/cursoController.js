const inscricaoModel = require("../models/inscricaoModel");
const aulaModel = require("../models/aulaModel");
const cursoModel = require("../models/cursoModel");
const comentarioModel = require("../models/comentarioModel");
const { Op } = require("sequelize");

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

  // static async visualizarAula(req, res) {
  //   try {
  //     const aulaId = req.params.aulaId;
  //     const aula = await aulaModel.findOne({
  //       raw: true,
  //       where: { id: aulaId },
  //     });

  //     console.log(aula);

  //     res.render("curso/aula", { usuarioAutenticado: req.usuario, aula: aula });
  //   } catch (error) {
  //     res.status(500).json({ message: "Erro ao carregar aulas", error });
  //   }
  // }
  static async visualizarAula(req, res) {
    try {
      const aulaId = req.params.aulaId;
      console.log("aulaId:", aulaId);

      const aula = await aulaModel.findOne({
        where: { id: aulaId },
        raw: true,
      });

      if (!aula) {
        return res.status(404).json({ message: "Aula não encontrada" });
      }

      const comentarios = await comentarioModel.findAll({
        where: { AulaId: aulaId },
        order: [["createdAt", "DESC"]],
        raw: true,
      });

      const codigoCursoObj = await aulaModel.findOne({
        where: { id: aulaId },
        attributes: ["CursoId"],
        raw: true,
      });

      let codigoCurso = 0;

      if (codigoCursoObj) {
        codigoCurso = codigoCursoObj.CursoId;
      }

      const aulasCurso = await aulaModel.findAll({
        raw: true,
        where: { CursoId: codigoCurso, id: { [Op.ne]: aulaId } },
      });

      const dadosView = {
        aula: aula,
        aulas: aulasCurso,
        comentarios: comentarios,
        usuarioAutenticado: req.usuario,
      };

      res.render("curso/aula", dadosView, (err, html) => {
        if (err) {
          console.error("Erro ao renderizar a view:", err);
          return res.status(500).send("Erro ao renderizar a página da aula.");
        }
        res.send(html);
      });
    } catch (error) {
      console.error("Erro no método visualizarAula:", error);
      res
        .status(500)
        .json({ message: "Erro ao carregar aula", error: error.message });
    }
  }
};
