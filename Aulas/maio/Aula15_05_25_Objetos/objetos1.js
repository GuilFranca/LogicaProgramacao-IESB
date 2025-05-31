const prompt = require('prompt-sync')({sigint: true});

// let estudante1 = {
//     matricula : 11235,
//     nome : "Maria Penha",
//     DN : "17/02/1977",
//     UF : "MA"
// };

// console.log(estudante1);

// console.log(estudante1.nome);

// for(const atributo in estudante1) {
//     console.log(estudante1[atributo]);
// }

// let estudante2 = {
//     matricula : 22335,
//     nome : "Jobervaldoson da Silva",
//     DN : "06/06/1986",
//     UF : "DF"
// }

// for(const atributo in estudante2) {
//     console.log(estudante2[atributo]);
// }

let listaEstudante = [
    {
        matricula : 11235,
        nome : "maria",
        DN : "17/02/1977",
        UF : "MA"
    },

    {
        matricula : 22345,
        nome : "joao",
        DN : "17/02/1981",
        UF : "DF"
    }
];


// for (let item of listaEstudante) {
//     console.log(item.nome);
// }

let pesquisa = prompt('Selecione o Element: ');

for(const item of listaEstudante) {
    if (item.matricula == pesquisa || item.nome == pesquisa) {
        console.log(item);
    }
}

console.log(Object.keys(estudante1));