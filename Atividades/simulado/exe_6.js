const prompt = require('prompt-sync')({sigint: true});

let caractere = prompt('Digite um caractere: ');

let vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(caractere)) {
    console.log(`O caractere '${caractere}' é uma vogal!`);
} else {
    console.log(`O caractere '${caractere}' não é uma vogal`);
}