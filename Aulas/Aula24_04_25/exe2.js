const prompt = require ('prompt-sync')({sigint:true});

let anoCopa = [];

for (let i = 1930; i <= 2025; i++) {

    if (i % 4 == 2 && (i != 1942 && i != 1946)) {
        anoCopa.push(i);
    }

    // console.log(anoCopa);

}

// let numeroAnoCopa = prompt('Digite qual copa do mundo você quer saber: ');

// console.log(anoCopa[numeroAnoCopa - 1]);

let ultimoAno = anoCopa.length - 1;

console.log(`O quarto ano de copa do mundo ${anoCopa[3]}`);
console.log(`O decimo ano de copa do mundo ${anoCopa[9]}`);
console.log(`O ultimo ano de copa do mundo ${anoCopa[ultimoAno]}`);
console.log(`O ultimo ano de copa do mundo ${anoCopa[0]}`);