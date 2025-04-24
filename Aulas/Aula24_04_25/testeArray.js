const prompt = require ('prompt-sync')({sigint:true});

let vogais = ['a', 'e', 'i', 'o', 'u'];

let letra = prompt('Digite uma letra: ');

if (vogais.includes(letra)){
    console.log('A letra inserida é uma vogal!');
} else {
    console.log('O caractere digitado não é uma vogal.');
}