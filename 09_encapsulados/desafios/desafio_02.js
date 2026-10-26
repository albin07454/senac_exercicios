class Livro {
    #quantidade;
    constructor(quantidade){
        this.#quantidade = quantidade;
    }
    get quantidade(){
        return this.#quantidade;
    }
}
const livro = new Livro(12);
console.log(livro.quantidade);