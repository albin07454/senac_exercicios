import {select, number} from '@inquirer/prompts';

const valor = await number ({ message : "Qual foi o valor total da compra?:"})

const pagamento = await select({
    message: 'Escolha sua forma de pagamento:' ,
    choices: [
        {name: 'PIX (10% de desconto)' , value: "pix"},
        {name: 'Cartão á vista (5% de desconto)', value: "av"},
        {name: 'Cartão parcelado (sem desconto)' , value: "parc"},
    ]
});

let desconto =0;

