import { input, number } from '@inquirer/prompts';
let produtos = ["Mouse", "Teclado", "Monitor"]; 
console.log(produtos); 
console.log(produtos[0]); 
console.log(produtos[1]); 
console.log(produtos[2]); 
produtos[1] = "Notebook"; 
console.log(produtos);
console.log(produtos.length); 
produtos.push("Impressora"); 
console.log(produtos); 
produtos.pop(); 
console.log(produtos);
for (let i = 0; i < produtos.length; i++) { 
console.log(produtos[i]); 
} 
for (let i = 0; i < produtos.length; i++) { 
if (produtos[i] === "Notebook") { 
console.log("Notebook encontrado!"); 
} 
} 
