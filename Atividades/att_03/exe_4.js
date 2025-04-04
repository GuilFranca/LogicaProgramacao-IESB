// Questão 4
// Guilherme França Fernandes
// 25114290007

// Escreva um programa que pergunte ao
// usuário a cor da luz do 🚥 semáforo e
// então dê como saída “Siga”,
// “Atenção”, ou “Pare”, de acordo com
// as normas de trânsito. Se o usuário
// informar uma cor não válida, crie uma
// mensagem-padrão para informar ao
// usuário. Use a estrutura de controle
// switch/case para o seu programa.

const prompt = require('prompt-sync')({sigint: true});

var cor = prompt('Digite a cor do semáforo: ');

switch (cor) {
    case 'verde':
         console.log('Siga em frente!');
         break;
    case 'amarelo':
        console.log('Atenção!');
        break;
    case 'vermelho':
        console.log('PARE!');
        break;
    default:
        console.log('Cor inválida');
        break;
}