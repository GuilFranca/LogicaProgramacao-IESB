const prompt = require ('prompt-sync')({sigint:true});

anoOlimpiada = [];

for (let i = 1896; i <= 2025; i++) {

    if (i % 4 === 0 && (i != 1940 && i != 1944)) {
        anoOlimpiada.push(i);
    }

}

console.log(anoOlimpiada);

let ultimoAno = anoOlimpiada.length - 1;

console.log(`O quarto ano de copa do mundo ${anoOlimpiada[3]}`);
console.log(`O decimo ano de copa do mundo ${anoOlimpiada[9]}`);
console.log(`O ultimo ano de copa do mundo ${anoOlimpiada[ultimoAno]}`);
console.log(`O ultimo ano de copa do mundo ${anoOlimpiada[0]}`);