class Produto{
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
    }
    calcularDesconto(percentual){
        return this.preco - this.preco* (percentual/100);
    }
}
const notebook = new Produto("Notebook",3500);
const mouse = new Produto("Mouse",80);
const descontos = [0,10,20];
for (const produto of [notebook, mouse]){
    console.log(`${produto.nome} (R$ ${produto.preco.toFixed(2)})`);
    for (const d of descontos){
        const final = produto.calcularDesconto(d);
        console.log(`${d}% de desconto: R$ ${final.toFixed(2)}`);
    }
}