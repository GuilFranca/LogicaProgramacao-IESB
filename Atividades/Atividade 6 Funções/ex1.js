//1. Crie uma função em JS que retorne a área de um trapézio,
// cuja altura mede h e cujas bases medem B e b.
// At= (B+b)*h/2

const prompt = require('prompt-sync')({signint: true});

function calculoTrapezio(altura, baseMaior, baseMenor) {

    let area = ((baseMaior + baseMenor) * altura) / 2; 

    return area;

}

console.log('=-=-Área trapézio-=-=');
let altura = parseFloat(prompt('Digite o valor da altura: '));
let baseMaior = parseFloat(prompt('Digite o valor da base maior: '));
let baseMenor = parseFloat(prompt('Digite o valor da base menor: '));

console.log(calculoTrapezio(altura,baseMaior, baseMenor));