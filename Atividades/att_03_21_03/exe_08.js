// 8)Escreva um programa JS, em que o usuário entra com um número inteiro indicando um ano entre 1890 e 2025, inclusive. Informe ao usuário se o ano entrado corresponde a um ano de Jogos Olímpicos.

const prompt = require('prompt-sync')({sigint: true});

let listaAnoOlimpiadas = [];

for (let i = 1976; i < 2025; i = i + 4) {
    listaAnoOlimpiadas.push(i);
}

console.log(listaAnoOlimpiadas);

let ano = parseInt(prompt('Digite um ano entre 1980 e 2025: '));

if ((ano > 2025) || (ano < 1980)) {
   console.log('Ano invalido'); 
} else {
    if (listaAnoOlimpiadas.includes(ano)) {
        console.log(`O ano de ${ano} teve olimpiadas`);
    } else {
        console.log(`O ano de ${ano} não teve olimpiadas`);
    }
}