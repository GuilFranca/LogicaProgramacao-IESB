function numImpar(valorInical, valorFinal) {

    impares = [];

    for (let i = valorInical; i < valorFinal; i++) {

        if (i % 2 != 0) {
            impares.push(i);
        }

    }

    return impares;

}

let meuInicial = 1;
let numFinal = 10;

console.log(numImpar(meuInicial, numFinal));
