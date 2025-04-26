const prompt = require("prompt-sync")({sigint:true});

let marcas = ['Nike', 'Adidas', 'Oakley', 'Puma', 'Porshe'];
console.log(marcas);

let ordemAlfa = marcas.sort();

console.log(ordemAlfa);

let numeros = [1, 2, 6, -1];

console.log(numeros.sort());
console.log(numeros.reverse());