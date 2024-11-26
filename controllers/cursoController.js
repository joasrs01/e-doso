const inscricaoModel = require("../models/inscricaoModel");
const aulaModel = require("../models/aulaModel");
const cursoModel = require("../models/cursoModel");
const comentarioModel = require("../models/comentarioModel");
const { Op, Sequelize } = require("sequelize");

module.exports = class Curso {
  static async verCursos(req, res) {
    let usuarioId = 0;

    if (req.usuario) {
      usuarioId = req.usuario.userId;
    }

    const cursos = await cursoModel.findAll({
      raw: true,
      attributes: {
        include: [
          Sequelize.literal(`(
            ( SELECT 
              COUNT(1)
            FROM 
              "Inscricaos" AS "I"
            WHERE 
              "I"."UsuarioId" = ${usuarioId}
              AND "I"."CursoId" = "Curso"."id" ) > 0
          ) "usuarioInscrito"`),
        ],
      },
    });

    res.render("curso/selecionaCurso", {
      usuarioAutenticado: req.usuario,
      cursos,
    });
  }

  static async verAulas(req, res) {
    const cursoId = req.params.cursoId;
    let usuarioId = 0;

    if (req.usuario) {
      usuarioId = req.usuario.userId;
    }

    try {
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

      const usuarioInscrito = await verificarUsuarioInscrito(
        usuarioId,
        cursoId
      );

      res.render("curso/selecionaAula", {
        usuarioAutenticado: req.usuario,
        curso,
        aulas,
        usuarioInscrito,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao carregar aulas", error });
    }
  }

  static async visualizarAula(req, res) {
    try {
      const aulaId = req.params.aulaId;

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

  static async realizarIscricao(req, res) {
    const UsuarioId = req.usuario.userId;
    const CursoId = req.params.cursoId;

    await inscricaoModel.create({ UsuarioId, CursoId });

    const paginaAnterior = req.get("Referer");

    if (paginaAnterior) {
      res.redirect(paginaAnterior);
    } else {
      res.send("Página anterior não encontrada.");
    }
  }

  static async cancelarIscricao(req, res) {
    const UsuarioId = req.usuario.userId;
    const CursoId = req.params.cursoId;

    await inscricaoModel.destroy({ where: { UsuarioId, CursoId } });

    const paginaAnterior = req.get("Referer");

    if (paginaAnterior) {
      res.redirect(paginaAnterior);
    } else {
      res.send("Página anterior não encontrada.");
    }
  }
};

async function verificarUsuarioInscrito(UsuarioId, CursoId) {
  return (
    (await inscricaoModel.count({
      where: { CursoId, UsuarioId },
    })) > 0
  );
}
