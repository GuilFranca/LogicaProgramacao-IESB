// 1. Crie um array com 5 elementos da forma string.
let listaEmpregos = ['Atendente', 'Desenvolvedor', 'Motorista', 'Dentista', 'Promotor'];

// 2. Determine o quarto elemento desse array usando indexação.
console.log(listaEmpregos[3]);

// 3. Determine o último elemento deste array.
console.log(listaEmpregos[listaEmpregos.length - 1]);

console.log('\n\n');

// 4. Use for loops e liste os elementos do array de duas formas:
// 4.1. usando for loop sobre os índices
for(let i = 0; i < listaEmpregos.length; i++) {
    console.log(`- ${listaEmpregos[i]}`);
}

// 4.2. usando for...of
for(let item of listaEmpregos) {
    console.log(`*${item}`);
}

// 5. Ordene os elementos deste array em forma alfabética.
listaEmpregos.sort((a,b) => a-b);
console.log(listaEmpregos);

// 6. Ordene os elementos do array em forma alfabética reversa
console.log(listaEmpregos.sort((a,b) => b-a));

// 7. Crie um array com elementos numéricos. 
let listaNumero = [5, 2, 3, 9, 1, 0];

console.log(listaNumero);

// 7.1 ordene os elementos em ordem crescente
console.log(listaNumero.sort());

// 7.2 ordene os elementos em ordem decrescente
console.log(listaNumero.sort((a,b) => b-a));

// 8. Crie um array com 3 elementos. 
let listaCor = ["Vermelho", "Verde", "Azul"];

// 8.1 adicione outros 4 elementos um por um usando push(.). Mostre a quantidade de elementos ao adicionar os elementos
listaCor.push("Rosa", "Preto", "Branco", "Amarelo");
console.log(listaCor);

// 8.2 remova o último elemento e mostre o elemento que foi eliminado.
console.log(listaCor.pop());
console.log(listaCor);