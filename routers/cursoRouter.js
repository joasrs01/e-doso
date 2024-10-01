const express = require("express");
const router = express.Router();
const cursoModel = require("../model/cursoModel");

router.get("/", cursoModel.selecionaCurso);

module.exports = router;
