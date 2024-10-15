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

module.exports = router;
