class Produto {
    #preco;
    constructor(preco){
        this.preco = preco;
    }
    get preco(){
        return this.#preco;
    }
    set preco(valor){
        this.#preco = valor;
    }
}
const produto = new Produto(50);
produto.preco = 80;
console.log(produto.preco);