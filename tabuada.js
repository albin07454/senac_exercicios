import {select, number} from '@inquirer/prompts';

const numero_digitado = await number({
    message: "Digite um número para a tabuada"
})

console.log(`TABUADA DO ${numero_digitado}`)
console.log("=".repeat(15))

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero_digitado} = ${i*numero_digitado}`)
}