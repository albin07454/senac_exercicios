USE agenda_bd;

CREATE TABLE IF NOT EXISTS contatos (
    id_contato INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(150),
    cidade VARCHAR(80),
    data_cadastro TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB;