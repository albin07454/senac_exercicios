use escola_bd;
create table alunos (
id_aluno int primary key auto_increment,
nome varchar(100) not null,
data_nascimento date not null,
rg varchar(15) unique not null,
cpf varchar(15) unique not null,
cidade varchar(20) not null,
data_cadastro timestamp default current_timestamp,
status int (1) not null
);
show tables;
