// 9) Escreva um programa JS cujas entradas sejam 3 notas de um estudante N1, N2, e N3, cujos valores estão entre 0 e 10, inclusive. O pesos das notas são  3, 3, e 4 respectivamente. O programa deve retornar o valor da média final e se o estudante foi aprovado ou não. Um estudante é reprovado quando sua média final é menor que 5.

const prompt = require('prompt-sync')({sigint: true});

let n1 = parseFloat(prompt('DIgite a nota n1: '));
let n2 = parseFloat(prompt('DIgite a nota n2: '));
let n3 = parseFloat(prompt('DIgite a nota n3: '));

let mediaPeso = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / (3 + 3 + 4); 

console.log(mediaPeso);

