const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const tokenService = require("../controllers/tokenService");

router.get("/", tokenService.verificarToken, cursoController.verCursos);
router.get(
  "/visualizarAulas/:cursoId",
  tokenService.verificarToken,
  cursoController.verAulas
);
router.get(
  "/aula/:aulaId",
  tokenService.verificarTokenThrow,
  cursoController.visualizarAula
);

router.get(
  "/inscricao/add/:cursoId",
  tokenService.verificarTokenThrow,
  cursoController.realizarIscricao
);

router.get(
  "/inscricao/cancelar/:cursoId",
  tokenService.verificarTokenThrow,
  cursoController.cancelarIscricao
);

router.post(
  "/avaliacao/add",
  tokenService.verificarTokenThrow,
  cursoController.adicionarAvaliacao
);

router.get(
  "/avaliacao/remover/:cursoId",
  tokenService.verificarTokenThrow,
  cursoController.removerAvaliacao
);

module.exports = router;
