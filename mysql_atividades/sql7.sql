USE escola_bd;

CREATE TABLE IF NOT EXISTS alunos (
    id_aluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    rg VARCHAR(20) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    cidade VARCHAR(80) NOT NULL,
    status TINYINT NOT NULL DEFAULT 1,
    data_cadastro TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_aluno_status
        CHECK (status IN (0,1))
) ENGINE = InnoDB;