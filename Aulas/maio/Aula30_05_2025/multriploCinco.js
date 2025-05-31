const prompt = require('prompt-sync')({sigint: true});

function multiploCinco (numeroInicial, numeroFinal){
    multrosCinco = [];
    for (let i = numeroInicial; i < numFinal; i++) {
        if (i % 5 === 0) {
            multrosCinco.push(i);
        }
    }
    
    return multrosCinco

}

let numIni = prompt('Digite o valor do número de início: ');
let numFim = prompt('Digite o valor do número final: ');

console.log(multiploCinco(numIni, numFim));