const prompt = require('prompt-sync')({ sigint: true });

const vogais = ['a', 'e', 'i', 'o', 'u'];

const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];


let letra = prompt('Digite uma letra: ');

if (vogais.includes(letra)) {
    console.log('A letra inserida é uma vogal!');
} else if (consoantes.includes(letra)) {
    console.log('A letra inserida é uma consoante!');
} else {
    console.log('O caractere inserido é inválido.');
}