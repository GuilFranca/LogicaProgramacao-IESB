// 10) Formule um problema, daí resolva-o com um programa JS.
// Código para venda de bebidas para maiores de idade.

const prompt = require('prompt-sync')({sigint: true});

let idade = parseInt(prompt('Qual a sua idade? '));
 
if (idade >= 18) {
    console.log('Pode pegar bebida alcoólica');
} else {
    console.log('Você não pode pegar bebida alcoólica, por ser menor de idade');
}