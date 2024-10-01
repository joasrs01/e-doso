const express = require("express");
const router = express.Router();
const usuarioModel = require("../model/usuarioModel");

router.get("/", usuarioModel.cadastroUsuario);

module.exports = router;
