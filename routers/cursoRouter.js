const express = require("express");
const router = express.Router();
const cursoModel = require("../controllers/cursoController");
const tokenService = require("../controllers/tokenService");

router.get("/", tokenService.verificarToken, cursoModel.selecionaCurso);

module.exports = router;
