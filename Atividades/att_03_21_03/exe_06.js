// 6) Escreva um programa JS em que o usuário entra com um número real positivo.
// i) Converta este número em inteiro
// ii) Verifique se o número do passo i) é múltiplo de 3. Caso positivo, retorne uma mensagem informando que o número é múltiplo de 3, caso contrário, informe que o número não é múltiplo de 3.

const prompt = require('prompt-sync')({sigint: true});

let num = parseFloat(prompt("Digite um número real positivo: "));

num = parseInt(num);

let numMultiplo3 = (num % 3 === 0) ? `O ${num} é multilo de 3` : `O ${num} não é multiplo de 3`;

console.log(numMultiplo3);