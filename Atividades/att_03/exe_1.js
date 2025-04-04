// Questão 1
// Guilherme França Fernandes
// 25114290007

// O custo da corrida em um serviço de locomoção varia de acordo
// com o horário e a distância percorrida do trajeto(ponto de
// encontro e destino final). As faixas de valores são dadas a seguir:

// 0:00 às 6:00: 5,30 reais fixos, mais 4,40 reais por km.

// De 6:01 até 18:00: 3,30 reais fixos, mais 3,80 reais por km.

// De 18:01 até 23:59: 4,30 fixos, mais 4,10 reais por km.

// 1.1. Escreva um programa que informe o valor a ser pago pelo
// cliente tendo como entradas a faixa de horário e a distância
// percorrida no trajeto.

// 1.2. Teste seu programa para as seguintes situações:

// 4:30 am, 15 km.

// 15:00, 20 km.

// 22:43, 12.7 km.

const prompt = require('prompt-sync')({sigint: true});

var horas = prompt('Digite as horas do horário da corrida: ');
var minutos = prompt('Digite os minutos do horário da corrida: ');

var km = prompt('Digite a distância da corrida: ');

var horarioSegundos = ((horas * 60) * 60) + minutos * 60;

var custo;
var custoKm;

if (horarioSegundos >= 0 && horarioSegundos <= 21600) {
    custo = 5.3;
    custoKm = 4.4;
} else if (horarioSegundos > 21600 && horarioSegundos <= 64800) {
    custo = 3.3;
    custoKm = 3.8;
} else if (horarioSegundos > 64800 && horarioSegundos <= 86340) {
    custo = 4.3;
    custoKm = 4.1;
}

let valorTotal = custo + (custoKm * km);

console.log(`${horas}:${minutos}\n${km}\nValor: R$${valorTotal}`);
