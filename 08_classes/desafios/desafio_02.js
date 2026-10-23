class Aluno {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
const aluno = new Aluno("Carlos",20);
console.log(`${aluno.nome},${aluno.idade}`);