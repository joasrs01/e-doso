const express = require('express');
const router = express.Router();
const ComentarioController = require('../controllers/comentarioController');

// Rota para adicionar um comentário
router.post('/comentarios/adicionar', ComentarioController.adicionarComentario);

module.exports = router;
