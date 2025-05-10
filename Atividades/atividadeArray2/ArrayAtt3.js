// 1. Crie um array com 5 elementos da forma string.
let listaEmpregos = ['Atendente', 'Desenvolvedor', 'Motorista', 'Dentista', 'Promotor'];

// 2. Determine o quarto elemento desse array usando indexação.
console.log(listaEmpregos[3]);

// 3. Determine o último elemento deste array.
console.log(listaEmpregos[listaEmpregos.length - 1]);

console.log('\n\n');

// 4. Use for loops e liste os elementos do array de duas formas:
for(let i = 0; i < listaEmpregos.length; i++) {
    console.log(`- ${listaEmpregos[i]}`);
}

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