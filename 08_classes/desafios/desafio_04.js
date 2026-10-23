class Produto {
    constructor(preco, quantidade){
        this.preco = preco;
        this.quantidade = quantidade;
    }

calcularTotal() {
    return this.preco *this.quantidade;
}
}

const produto = new Produto (80, 5);
console.log(produto.calcularTotal());