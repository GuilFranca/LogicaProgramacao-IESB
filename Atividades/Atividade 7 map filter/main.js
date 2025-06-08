// 1. Inverso aditivo (simétrico em relação a zero)
// Exemplo: 5 -> -5, -3 -> 3, 0 -> 0
const numeros = [1, -2, 3.5, 0, -0.5];

// 1.1 Usando arrow function
const inversosAditivosArrow = numeros.map(num => -num);
console.log("1.1 - Inversos Aditivos (Arrow):", inversosAditivosArrow);

// 1.2 Usando function tradicional
const inversosAditivosFunc = numeros.map(function(num) {
  return -num;
});
console.log("1.2 - Inversos Aditivos (Function):", inversosAditivosFunc);

// 2. Calcular média aritmética simples de cada array dentro de um array maior
const A = [
  [10, 20, 30, 40],
  [5, 15, 25, 35],
  [2, 4, 6, 8]
];

const medias = A.map(subArray => {
  const soma = subArray.reduce((acc, num) => acc + num, 0);
  return soma / subArray.length;
});
console.log("2 - Médias dos subarrays:", medias);

// 3. Filtrar números entre 5 e 40 (exclusivo)
const numerosInt = [2, 5, 10, 25, 40, 60, 1000];

const filtrados = numerosInt.filter(num => num > 5 && num < 40);
console.log("3 - Números entre 5 e 40:", filtrados);
