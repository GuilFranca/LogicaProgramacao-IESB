//2. Crie uma função que dadas as dimensões de um paralelogramo
// retorne o seu perímetro

const prompt = require('prompt-sync')({sigint: true});

function perimetroParalelogramo(altura, base) {

    let perimetro = (altura + base) * 2;

    return perimetro;

}

let altura = parseFloat(prompt('Digite o valor da altura: '));
let base = parseFloat(prompt('Digite o valor da base: '));

console.log(perimetroParalelogramo(altura, base));
