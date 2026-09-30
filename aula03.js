// import {input, number} from '@inquirer/prompts';
// import { argon2Sync } from 'node:crypto';
// import { convertProcessSignalToExitCode } from 'node:util';

// const nome = await input({message: 'Qual é o seu nome?'});

// let idade = await number({
// message: 'Idade?',
// min: 0,
// max: 120,
// required: true,
// })

// let idade_depois = idade + 1;
   
// console.log("Bem vindo "+nome + "!");
// console.log(typeof idade);
// console.log(typeof idade_depois);
// console.log("Ano que vem vc terá " + idade_depois + "anos.");

const idade = await number(( message:"Qual a sua idade?"));
const Temingresso = await confirm(( message:"Voce tem ingresso?"));
const estaAcompanhado = await confirm(( message"Voce está acompanhado?"));
