import {confirm, number} from '@inquirer/prompts';

const idade = await number({ message:'Idade -->' , required: true});
const ingresso = await confirm({ message:'Tem ingresso? -->' , required: true});
const Acompanhado = await confirm({ message:'acompanhado? -->' , required: true});

const mensagem = ((ingresso) && (idade >= 18 || acompanhado)) ? "Entrada Liberada!" : "Volta pra casa!";

console.log(mensagem);



