class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    atualizarPreco(novoPreco){
        if (typeof novoPreco === "number" && Number.isFinite(novoPreco) && novoPreco >=0){
            this.preco = novoPreco;
            console.log(`Preço atualizado para ${this.preco}`); 
        }else{
            console.log(`Preço inválido:${novoPreco}. O cadastro não foi alterado.`);
        }
    }
}
const produto = new Produto("Teclado",50);
produto.atualizarPreco(90);
produto.atualizarPreco(-10);

console.log(`Preço final: ${produto.preco}`);