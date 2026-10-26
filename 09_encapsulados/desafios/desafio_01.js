class Aluno{
    #nota;
    constructor(nome, nota){
        this.nome = nome;
        this.#nota = nota;
    }
    apresentar(){
        console.log(`${this.nome} - ${this.#nota}`);
    }
}
const aluno = new Aluno("Carlos",8);
aluno.apresentar();

