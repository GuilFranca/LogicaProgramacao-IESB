// Questão 6
// Guilherme França Fernandes
// 25114290007

// Crie um problema e apresente uma solução implementando um
// programa usando a estrutura de controle switch/case.

const prompt = require('prompt-sync')({sigint: true});

var cargo = prompt('Qual o seu cargo atual? ');

switch (cargo){
    case 'estagiario':
        console.log('Você está começando.');
        break;
    case 'junior':
        console.log('Você está començando, mas já tem uma certa exeperiencia.');
        break;
    case 'pleno':
        console.log('Você já é bem experiente.');
        break;
    case 'senior':
        console.log('Você é a experiencia em pessoa!!!');
        break;
    default:
        console.log('\nCargo inválido.\nCargos disponiveis:\n-estagiario\n-junior\n-pleno\n-senior');
        break;
}