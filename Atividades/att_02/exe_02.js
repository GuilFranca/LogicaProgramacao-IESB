// Para instalar o prompt no node: npm install prompt-sync
// Para declarar o prompt: const prompt = require('prompt-sync')({sigint: true});

const prompt = require('prompt-sync')({sigint: true});

var numero1 = parseFloat(prompt('Digite o valor do primeiro número: '));
var numero2 = parseFloat(prompt('Digite o valor do segundo número: '));
var numero3 = parseFloat(prompt('Digite o valor do terceiro número: '));

var media = (numero1 + numero2 + numero3) / 3;

if ((numero1 > 100 || numero1 < 0) || (numero2 > 100 || numero2 < 0) || (numero3 > 100 || numero3 < 0)) {
    console.log('Alugum dos valores informados é menor que 0 ou maior que 100, altere os valores para o programa funcionar');
} else {
    console.log(`A média aritmética dos números ${numero1}, ${numero2}, ${numero3} é = ${media}`);
}