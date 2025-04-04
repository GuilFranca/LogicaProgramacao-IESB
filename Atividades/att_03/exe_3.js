// Questão 3
// Guilherme França Fernandes
// 25114290007

// premiados

// Crie um jogo, em que o usuário tem que descobrir pelo
// menos um dos 3 números premiados entre números
// inteiros de 1 a 100. Para tal fim, crie um programa em
// JS que peça para o usuário tentar adivinhar os números
// premiados com direito a 3 tentativas. Como saída do
// programa, informe ao usuário se os números
// escolhidos são premiados ou não. Como regra, o jogo
// se encerra quando ao menos um número premiado é
// escolhido.

const prompt = require('prompt-sync')({sigint: true});

var numeroPremiado = parseInt(Math.random() * 100 + 1);
console.log(numeroPremiado);

console.log('Jogo do número premiado\nVocê tem 3 chances para acertar\n\n');

var chances = 3;
var chute;

while (chances > 0 && chute != numeroPremiado) {
    console.log(`-=-=-=-=-=-=-=-=-\nChances = ${chances}`)
    chute = prompt('Qual o número premiado? ');
    chances--
}

console.log('-=-=-=-=-=-=-=-=-');

if (chances === 0 && chute != numeroPremiado) {
    console.log(`\n\nVocê perdeu :(\nO número premiado era ${numeroPremiado}`);
} else {
    console.log(`\n\nVocê acertou o número premiado é ${numeroPremiado}`);
}