listaNum = [1, 2, 7, 3, 9, 0, 123, 45, 90];

function cube(array) {
    return array.map(x => x**3);
}

function double(array) {
    return array.map(x => x*2);
}

// console.log(cube(listaNum));

console.log(double(listaNum));

const idades = [16, 21, 17, 30, 15, 25];

const maioresDeIdade = idades.filter(function(idade) {
    return idade >= 18;
});

const maioresDeIdadeArrow = idades.filter(idade => idade >= 18);