# e-doso

Web App de ensino para idosos, projeto engenharia de software II

pra rodar o projeto localmente vai precisar dar um npm install, depois node app.js para iniciar o serviço.

Comandos pra rodar no postgres:

DELETE FROM "Cursos";
DELETE FROM "Aulas";

INSERT INTO public."Cursos"(
titulo, descricao, imagem, "createdAt", "updatedAt")
VALUES (
'Introdução à Informática',
'Aprenda o básico sobre computadores, incluindo como ligar, usar o mouse e o teclado.',
'https://negociossc.com.br/wp-content/uploads/2022/04/web.png',
NOW(),
NOW());

INSERT INTO public."Cursos"(
titulo, descricao, imagem, "createdAt", "updatedAt")
VALUES (
'Navegação na Internet',
'Descubra como navegar na internet, usar e-mail e pesquisar informações online.',
'https://negociossc.com.br/wp-content/uploads/2022/04/web.png',
NOW(),
NOW());

INSERT INTO public."Cursos"(
titulo, descricao, imagem, "createdAt", "updatedAt")
VALUES (
'Redes Sociais',
'Aprenda a usar redes sociais como Facebook e WhatsApp para se conectar com amigos e familiares.',
'https://negociossc.com.br/wp-content/uploads/2022/04/web.png',
NOW(),
NOW());

INSERT INTO public."Cursos"(
titulo, descricao, imagem, "createdAt", "updatedAt")
VALUES (
'Compras Online',
'Saiba como fazer compras online com segurança em sites confiáveis.',
'https://negociossc.com.br/wp-content/uploads/2022/04/web.png',
NOW(),
NOW());

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 1',
'Descrição da aula',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
1);

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 2',
'Descrição da aula 2222',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
1);

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 3',
'Descrição da aula 333',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
1);

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 4',
'Descrição da aula 4444',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
1);

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 1',
'Descrição da aula',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
2 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 2',
'Descrição da aula 2222',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
2 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 3',
'Descrição da aula 333',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
2 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 4',
'Descrição da aula 4444',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
2 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 1',
'Descrição da aula',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
3 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 2',
'Descrição da aula 2222',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
3 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 3',
'Descrição da aula 333',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
3 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 4',
'Descrição da aula 4444',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
3 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 1',
'Descrição da aula',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
4 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 2',
'Descrição da aula 2222',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
4 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 3',
'Descrição da aula 333',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
4 );

INSERT INTO public."Aulas"(
titulo, descricao, "videoUrl", "createdAt", "updatedAt", "CursoId")
VALUES (
'Aula 4',
'Descrição da aula 4444',
'https://www.youtube.com/watch?v=mEQcnuynnAs&pp=ygUYY29tbyBkZXNsaWdhciBvIHRlbGVmb25l',
now(),
now(),
4 );
