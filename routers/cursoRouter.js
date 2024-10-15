
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// Rota para a página de cursos
router.get('/', (req, res) => {
  res.render('curso/selecionaCurso', { title: 'Seleção de Cursos' });
});

router.get('/aula/:cursoId', cursoController.verAulas);

module.exports = router;
