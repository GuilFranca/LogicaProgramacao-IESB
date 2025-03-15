// 4) Escreva um programa em JS em que o usuário digita um número inteiro. A saída no programa deve retornar uma mensagem dizendo se o número é par ou ímpar.

const prompt = require('prompt-sync')({sigint: true});

var numero = parseInt(prompt('Digite um número inteiro: '));

if (numero % 2 === 0) {
    console.log(`O ${numero} é par`);
} else {
    console.log(`O ${numero} é impar`);
}