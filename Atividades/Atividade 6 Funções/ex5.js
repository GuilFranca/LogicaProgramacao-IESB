// 5. Crie uma função que o usuário entra com um número inteiro.
// Se o número entrado for par, retorne a mensagem "Número (Tal) é par",
// caso contrário, retorne "Número (Tal) é ímpar";

const prompt = require('prompt-sync')({sigint: true})

function paridade(numero) {

    numero % 2 === 0 ? console.log(`O número ${numero} é par`) : console.log(`O número ${numero} é impar`);

}

let numero = parseInt(prompt('Digite um número inteiro: '));

paridade(numero);