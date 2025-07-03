// Questão 3 do simulado 4

let pessoas = {
    nomes : ["Ada", "Helen", "Leon"],
    idades : [26, 21, 45],
    naturalidades : ["DF", "SP", "TO"]
}

console.log(pessoas.idades[1]);

console.log(pessoas["nomes"]);
console.log(pessoas.nomes);

console.log(Object.values(pessoas));

// e) O objeto pessoas foi definido de forma não-literal.
// ❌ Errado.
// O objeto foi definido com notação literal (usando {}), o que caracteriza uma declaração literal de objeto em JavaScript.