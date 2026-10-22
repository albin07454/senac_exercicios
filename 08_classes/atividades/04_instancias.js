class Produto {
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
    }
    apresentar() {
        console.log(`${this.nome}:R$ ${this.preco}`);
    }
}
const produto1 = new Produto("Mouse",50);
const produto2 = new Produto("Teclado",80)
const produto3 = new Produto("Monitor",700)

produto1.apresentar();
produto2.apresentar();
produto3.apresentar();

produto1.preco = 60;

console.log(produto1.preco);
console.log(produto2.preco);
console.log(produto3.preco);

console.log(produto1 instanceof Produto);
console.log(produto2 instanceof Produto);
console.log(produto3 instanceof Produto);
