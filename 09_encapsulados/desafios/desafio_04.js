class Produto {
    #preco;
    constructor(preco){
        this.preco = preco;
    }
        set preco(valor){
            if(typeof valor !=="number"||!Number.isFinite(valor)|| valor<0){
                throw new Error(`Preço inválido:${valor}`);
            }
            this.#preco = valor;
        }
        get preco(){
            return this.#preco;
        }
}
const testes = [80, -10, "abc"];
for (const valor of testes){
    try{
        const produto = new Produto(valor);
        console.log(`Aceito:${produto.preco}`);
    }catch(erro){
        console.log(`Rejeitado:${erro.mesage}`);
    }
}