// 5) (Programa do semáforo) Escreva um programa em Javascript que pede para o usuário digitar umas dentre as cores verde, amarelo, e vermelho. Caso o usuário digite "verde", o programa deve retornar a mensagem "Siga!". Caso o usuário digite "amarelo", o programa deve retornar "Atenção". Caso o usuário digite "vermelho", o programa deve retornar "Pare!". Se por acaso o usuário digitar algo diferente das 3 cores anteriores, retorne a mensagem "Cor inválida entrada pelo usuário".

const prompt = require('prompt-sync')({ sigint: true });

let corSemaforo = '';

while ((corSemaforo != 'vermelho') && (corSemaforo != 'amarelo') && (corSemaforo != 'verde')) {
    corSemaforo = prompt("Qual a cor do semáforo? ").toLowerCase();

    if (corSemaforo === 'vermelho') {
        console.log("PARE!");
    } else if (corSemaforo === 'amarelo') {
        console.log("Atenção!");
    } else if (corSemaforo === 'verde') {
        console.log('siga...');
    } else {
        console.log("Valor incorreto, digit novamente.");
    }
}