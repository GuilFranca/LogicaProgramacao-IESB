// for (let i = 0; i <= 500; i = i + 2) {
//     console.log(i);
// }

let i;

for (i = 0; i <= 20; i += 5) {
    console.log(`Número ${i} está dentro do escopo`);
}

console.log(`${i} está fora do escopo`);