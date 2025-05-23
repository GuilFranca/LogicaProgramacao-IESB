// 1. Crie um array com 5 elementos da forma string.
// 2. Determine o quarto elemento desse array usando indexação.
// 3. Determine o último elemento deste array.
// 4. Use for loops e liste os elementos do array de duas formas:
// 4.1. usando for loop sobre os índices
// 4.2. usando for...of
// 5. Ordene os elementos deste array em forma alfabética.
// 6. Ordene os elementos do array em forma alfabética reversa

// 7. Crie um array com elementos numéricos. 
// 7.1 ordene os elementos em ordem crescente
// 7.2 ordene os elementos em ordem decrescente

// 8. Crie um array com 3 elementos. 
// 8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
// 8.2 remova o último elemento e mostre o elemento que foi eliminado.

let listaCompras = ['Abacaxi', 'Manga', 'Acetona', 'Corda', 'Moto-serra'];

console.log(`4 - ${listaCompras[3]}`);

console.log(`Ultimo da lista - ${listaCompras[listaCompras.length - 1]}`);
// console.log(`Ultimo da lista - ${listaCompras.at(-1)}`);

for (let i = 0; i < listaCompras.length; i++) {
    console.log(listaCompras[i]);
}

console.log('\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n');

for (let item of listaCompras) {
    console.log(`- ${item}`);
}

console.log('\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n');

// listaCompras.sort();
listaCompras.sort((a,b) => a-b);

console.log(listaCompras);

// console.log(listaCompras.reverse());

console.log(listaCompras.sort((a,b) => b-a));



// Lista número

let listaNumeros = [2,4,1,3,5];

console.log(listaNumeros);

listaNumeros.sort((a, b) => a - b);

console.log(listaNumeros);

console.log(listaNumeros.sort((a,b) => b - a));


// Lista adição
let listaElementos = [1, 2, 'elemento', 'carro'];

console.log(listaElementos);

listaElementos.push('sonic', 3, 'mario', 8);

console.log(listaElementos);

console.log(listaElementos.pop());

console.log(listaElementos);

listaElementos.splice(0,2);
 
console.log(listaElementos);

// remove o primeiro elemento shift()
// adicionar no inicio elemento unshift()
// seleciona o index com o elemento dentro do "indexOf(Ásia)" 