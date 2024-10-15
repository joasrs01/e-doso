
const Inscricao = require('../models/inscricaoModel');
const Aulas = require('../models/aulaModel'); // Assuming this exists
const Curso = require('../models/cursoModel'); // Assuming this exists

exports.inscreverCurso = async (req, res) => {
  const { cursoDescricao, userId } = req.body;

  try {
    // Criar uma nova inscrição
    const novaInscricao = await Inscricao.create({
      cursoDescricao,
      userId
    });

    res.status(201).json({ message: 'Inscrição realizada com sucesso!', novaInscricao });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar inscrição', error });
  }
};

exports.verAulas = async (req, res) => {
  const { cursoId } = req.params;

  try {
    // Encontrar o curso e as aulas associadas
    const curso = await Curso.findByPk(cursoId, { include: Aulas });

    if (!curso) {
      return res.status(404).json({ message: 'Curso não encontrado' });
    }

    res.render('curso/aula', { cursoDescricao: curso.descricao, aulas: curso.Aulas });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar aulas', error });
  }
};
