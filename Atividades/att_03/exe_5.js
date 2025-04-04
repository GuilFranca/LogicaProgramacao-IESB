// Questão 5
// Guilherme França Fernandes
// 25114290007

// Crie um programa que peça ao usuário o dia
// e mês que ele nasceu. Retorne ao usuário
// uma mensagem retornando o signo do
// usuário.

const prompt = require('prompt-sync')({sigint: true});

var dia = parseInt(prompt('Digite o dia de nascimento: '));
var mes = parseInt(prompt('Mês do nascimento: '));

console.log('-=-=-=-=-=-=-=-=-=-==-=');

if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) {
    console.log('Você é de Capricórnio!');
} else if ((dia > 20 && mes === 1) || (dia <= 18 && mes === 2)) {
    console.log('Você é de Aquário');
} else if ((dia > 18 && mes === 2) || (dia <= 20 && mes === 3)) {
    console.log('Você é de Peixes');
} else if ((dia > 20 && mes === 3) || (dia <= 20 && mes === 4)) {
    console.log('Você é de Áries');
} else if ((dia > 20 && mes === 4) || (dia <= 20 && mes === 5)) {
    console.log('Você é de Touro');
} else if ((dia > 20 && mes === 5) || (dia <= 20 && mes === 6)) {
    console.log('Você é de Gêmeos');
} else if ((dia > 20 && mes === 6) || (dia <= 22 && mes === 7)) {
    console.log('Você é de Câncer');
} else if ((dia > 22 && mes === 7) || (dia <= 22 && mes === 8)) {
    console.log('Você é de Leão');
} else if ((dia > 22 && mes === 8) || (dia <= 22 && mes === 9)) {
    console.log('Você é de Virgem');
} else if ((dia > 22 && mes === 9) || (dia <= 22 && mes === 10)) {
    console.log('Você é de Libra');
} else if ((dia > 22 && mes === 10) || (dia <= 21 && mes === 11)) {
    console.log('Você é de Escorpião');
} else if ((dia > 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    console.log('Você é de Sagitário');
}