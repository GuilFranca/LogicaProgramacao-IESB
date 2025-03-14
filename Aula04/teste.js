// Para acessar a pasta: cd 'C:\Users\guilf\OneDrive\Área de Trabalho\IESB\LogicaProgramacao-IESB\Aula04'

// para instalar o prompt no node: npm install prompt-sync

const prompt = require('prompt-sync')({sigint: true});
var soma;
var n1 = parseFloat(prompt("Digite o primeiro número: "));
console.log(n1);
var n2 = parseFloat(prompt("Digite o segundo número: "));
console.log(n2);
soma = n1 + n2;
console.log(soma);