import {select, number} from '@inquirer/prompts';

let litrosAbastecidos = 0;
const PREÇO_LITRO = 5.8;
const PASSO = 5;
const VOLTAS = 7;

for(let i = 1; i<= VOLTAS; i++) {
    litrosAbastecidos += PASSO;
    const total = litrosAbastecidos * PREÇO_LITRO;
    console.log(` ⛽${litrosAbastecidos} L | A pagar: R$ ${total.toFixed(2)}`);
}
console.log(`\nAbastecimento finalizado!`);
if (litrosAbastecidos >=30) {
    console.log(`🎉Parabéns! Voce ganhou 50 pontos de cashback.`);
}else {
    const faltam = 30 - litrosAbastecidos;
    console.log(`Faltaram ${faltam} litros para a promoção.`);
}