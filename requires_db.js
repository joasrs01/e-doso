const conexao = require('./conexao'); // Certifique-se de ajustar o caminho se necessário

const queries = [
    'DELETE FROM "Cursos";',
    'DELETE FROM "Aulas";',
    `INSERT INTO public."Cursos"(titulo, descricao, imagem, "createdAt", "updatedAt") VALUES
        ('Introdução à Informática', 'Aprenda o básico sobre computadores, incluindo como ligar, usar o mouse e o teclado.', 'https://negociossc.com.br/wp-content/uploads/2022/04/web.png', NOW(), NOW()),
        ('Navegação na Internet', 'Descubra como navegar na internet, usar e-mail e pesquisar informações online.', 'https://negociossc.com.br/wp-content/uploads/2022/04/web.png', NOW(), NOW()),
        ('Redes Sociais', 'Aprenda a usar redes sociais como Facebook e WhatsApp para se conectar com amigos e familiares.', 'https://negociossc.com.br/wp-content/uploads/2022/04/web.png', NOW(), NOW()),
        ('Compras Online', 'Saiba como fazer compras online com segurança em sites confiáveis.', 'https://negociossc.com.br/wp-content/uploads/2022/04/web.png', NOW(), NOW());`,
    `INSERT INTO public."Aulas"(titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId") VALUES
        ('Aula 1', 'Descrição da aula', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 1),
        ('Aula 2', 'Descrição da aula 2222', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 1),
        ('Aula 3', 'Descrição da aula 333', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 1),
        ('Aula 4', 'Descrição da aula 4444', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 1),
        ('Aula 1', 'Descrição da aula', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 2),
        ('Aula 2', 'Descrição da aula 2222', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 2),
        ('Aula 3', 'Descrição da aula 333', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 2),
        ('Aula 4', 'Descrição da aula 4444', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 2),
        ('Aula 1', 'Descrição da aula', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 3),
        ('Aula 2', 'Descrição da aula 2222', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 3),
        ('Aula 3', 'Descrição da aula 333', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 3),
        ('Aula 4', 'Descrição da aula 4444', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 3),
        ('Aula 1', 'Descrição da aula', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 4),
        ('Aula 2', 'Descrição da aula 2222', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 4),
        ('Aula 3', 'Descrição da aula 333', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 4),
        ('Aula 4', 'Descrição da aula 4444', 'https://www.youtube.com/watch?v=mEQcnuynnAs', NOW(), NOW(), 4);`
];

async function runQueries() {
    try {
        await conexao.authenticate();
        console.log('Conexão estabelecida com sucesso.');

        // Iniciar transação
        const transaction = await conexao.transaction();

        try {
            for (let query of queries) {
                await conexao.query(query, { transaction });
            }

            // Confirmar as alterações
            await transaction.commit();
            console.log('Queries executadas com sucesso.');
        } catch (err) {
            // Em caso de erro, fazer rollback
            await transaction.rollback();
            console.error('Erro ao executar as queries:', err);
        }

    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    } finally {
        await conexao.close();
    }
}

runQueries();