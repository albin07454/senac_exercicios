class Produto {
    constructor(nome,quantidade){
    this.nome = nome;
    const valida = Number.isInteger(quantidade) && quantidade >=0;

if (!valida){
    throw new Error(`Quantidade inválida:${quantidade}`);
}

this.quantidade = quantidade;
 }
}
const testes = [10, -5, 2.5];
for (const q of testes){
    try{
        const produto = new Produto("Caneta",q);
        console.log(`Aceito:${produto.quantidade}`);
    }catch (erro){
        console.log(`Rejeitado:${erro.message}`);
    }
}