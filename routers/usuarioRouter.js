const express = require("express");
const router = express.Router();
const usuarioModel = require("../model/usuarioModel");

router.get("/", usuarioModel.cadastroUsuario);
router.get("/login", usuarioModel.login);

module.exports = router;
