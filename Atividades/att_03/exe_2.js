// Questão 2
// Guilherme França Fernandes
// 25114290007

// bissextos

// Escreva um programa em JS que informe todos os
// anos bissextos entre 2024 e 2500, inclusive. Siga as
// seguintes regras:

// Anos bissextos ocorrem de 4 em 4 anos.

// Anos (maiores que 399) divisíveis por 400 são
// bissextos.

// Anos bissextos não são divisíveis por 100, exceto
// se forem divisíveis por 400.

// var ano = 2023;

// if (ano % 4 === 0 && ano % 400 != 0) {
//     console.log(`O ${ano} é bissexto`);
// } else {
//     console.log(`O ${ano} não é bissexto`);
// }

for (let ano = 2025; ano <= 2500; ano++) {
    if (ano % 4 === 0 && ano % 400 != 0) {
        console.log(`O ${ano} é bissexto`);
    }
}