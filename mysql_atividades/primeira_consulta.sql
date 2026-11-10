use escola_bd;
use chat_bd;
CREATE TABLE alunos (
id_aluno int primary key auto_increment,
nome varchar(100) not null,
rg varchar(20) unique not null,
cpf varchar(20) unique not null,
datanascimento DATE NOT null,
cidade varchar(80) not null,
data_cadastro timestamp default current_timestamp);
