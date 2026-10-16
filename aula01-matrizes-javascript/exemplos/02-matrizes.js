import inquirer from 'inquirer';
const respostas = await inquirer.prompt([
{type:'input', name:'nome', message:'Nome:'},
{type:'input', name:'email', message:'E-mail:'},
{type:'input', name:'curso', message:'Curso:'},
{type:'input', name:'cidade', message:'Cidade:'},
{type:'input', name:'telefone', message:'Telefone:'},
]);

console.log('\n===== FICHA DO ALUNO =====');
console.log(`Nome: ${respostas.nome}`);
console.log(`E-mail`)
console.log(`Curso`)
console.log(`Cidade`)
console.log(`Telefone`)
console.log(`===========================`);