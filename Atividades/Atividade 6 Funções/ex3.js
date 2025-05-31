//3. Crie uma função que armazene em um array todos números ímpares
// entre dois números dados, inclusive. Contudo, o array não
//deve incluir números múltiplos de 7;

const prompt = require('prompt-sync')({ sigint: true});

function listaImparMenosMultiplosSete(numInicial, numFinal) {

    ArrayImparMenosMultiplosSete = [];

    for (let i = numInicial; i < numFinal; i++) {

        if (i % 2 != 0) {

            if (i % 7 != 0) {

                ArrayImparMenosMultiplosSete.push(i);

            }

        }

    }

    return ArrayImparMenosMultiplosSete;

}

let numInicial = parseFloat(prompt('Digite o número inicial: '));
let numFinal = parseFloat(prompt('Digite o número final: '));

console.log(listaImparMenosMultiplosSete(numInicial, numFinal));