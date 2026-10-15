let nomes = ["Carlos", "Pedro", "José"];
let idade = ["27", "18", "20"];
function pessoas (n,i){
    let tamanho = nomes.length;
    console.log (`Nome: ${nomes[n]},${idade[i]}`)
    console.log (tamanho);
    pessoas (2,2)
}
