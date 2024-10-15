const comentarioModel = require("../models/comentarioModel");
const aulaModel = require("../models/aulaModel");

module.exports = class ComentarioController {
  static async adicionarComentario(req, res) {
      const { comentario, aulaId, nomeUsuario } = req.body;
      console.log('Dados recebidos no formulário:');
      console.log('aulaId:', aulaId);
      console.log('nomeUsuario:', nomeUsuario);
      console.log('comentario:', comentario);
    
      try {
        // Converter aulaId para inteiro
        const aulaIdInt = parseInt(aulaId, 10);
        if (isNaN(aulaIdInt)) {
          return res.status(400).json({ message: "ID da aula inválido" });
        }
      // Converter aulaId para inteiro
      // const aulaIdInt = parseInt(aulaId, 10);
      // if (isNaN(aulaIdInt)) {
      //   return res.status(400).json({ message: "ID da aula inválido" });
      // }
  
      // Verificar se a aula existe
      const aula = await aulaModel.findOne({ where: { id: aulaIdInt } });
      if (!aula) {
        return res.status(404).json({ message: "Aula não encontrada" });
      }
  
      // Criar um novo comentário
      await comentarioModel.create({
        comentario,
        nomeUsuario,
        AulaId: aulaIdInt,
      });
  
      // Redirecionar de volta para a página da aula
      res.redirect(`/curso/aula/${aulaIdInt}`);
    } catch (error) {
      console.error('Erro no método adicionarComentario:', error);
      res.status(500).json({ message: "Erro ao adicionar comentário", error: error.message });
    }
  }

};
