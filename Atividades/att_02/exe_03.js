// 3) Escreva um programa em JS que calcule a média aritmética ponderada. Como entrada  serão 3 valores entre 0 e 10, e 3 pesos entre 0 e 1, cuja soma seja 1.

const prompt = require('prompt-sync')({sigint: true});

var n1 = parseFloat(prompt('Digite o valor da n1: '));
var n2 = parseFloat(prompt('Digite o valor da n2: '));
var n3 = parseFloat(prompt('Digite o valor da n3: '));

var p1 = 0.2;
var p2 = 0.3;
var p3 = 0.5;

var mediaPonderada = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / (p1 + p2 + p3);

if (n1,n2,n3 < 0 || n1,n2,n3 > 10) {
    console.log('Algum valor inserido menor que 0 ou maior que 10');
} else {
    console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3} \n média ponderada = ${mediaPonderada}`);
}