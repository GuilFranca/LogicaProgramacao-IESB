// 7) Escreva um programa JS, em que o usuário entra com um número inteiro indicando um ano entre 1970 e 2025, inclusive. Informe ao usuário se o ano entrado corresponde a um ano de Copa do Mundo.

const prompt = require('prompt-sync')({sigint: true});

let listaAnoCopa = [];

for (let i = 1966; i < 2025; i = i + 4){
    listaAnoCopa.push(i);
}

console.log(listaAnoCopa);

let ano = parseInt(prompt('Digite um ano entre 1970 e 2025: '));

console.log(listaAnoCopa.includes(ano));

if ((ano > 2025) || (ano < 1970)) {
    console.log('O ano inserido é invalido.')
} else {
    if (listaAnoCopa.includes(ano)) {
        console.log(`O ano ${ano} foi um ano de copa do mundo`)
    } else {
        console.log(`Este ano de ${ano} não teve copa`);
    }
}