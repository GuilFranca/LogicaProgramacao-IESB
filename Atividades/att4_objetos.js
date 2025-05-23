// Nome: Guilherme França Fernandes
// Matrícula: 25114290007

// Tema escolhido: Carros

// 1. Criando 3 objetos usando a forma literal
let carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Preto"
};

let carro2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2019,
    cor: "Branco"
};

let carro3 = {
    marca: "Ford",
    modelo: "Focus",
    ano: 2018,
    cor: "Azul"
};

// 2. Criando uma função construtora
function Carro(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

// 3. Criando 3 instâncias da classe Carro
let carro4 = new Carro("Chevrolet", "Onix", 2021, "Cinza");
let carro5 = new Carro("Volkswagen", "Golf", 2020, "Vermelho");
let carro6 = new Carro("Hyundai", "HB20", 2022, "Prata");

// 4. Buscando todas as chaves dos objetos criados com a função construtora
console.log(Object.keys(carro4));
console.log(Object.keys(carro5));
console.log(Object.keys(carro6));

// 5. Buscando todos os valores dos objetos
console.log(Object.values(carro4));
console.log(Object.values(carro5));
console.log(Object.values(carro6));

// 6. Puxando todos os pares chave-valor dos objetos
console.log(Object.entries(carro4));
console.log(Object.entries(carro5));
console.log(Object.entries(carro6));

// 7. Usando for...in para buscar todas as chaves
for (let chave in carro4) {
    console.log(chave);
}

for (let chave in carro5) {
    console.log(chave);
}

for (let chave in carro6) {
    console.log(chave);
}

// 8. Usando for...in para buscar todos os valores
for (let chave in carro4) {
    console.log(carro4[chave]);
}

for (let chave in carro5) {
    console.log(carro5[chave]);
}

for (let chave in carro6) {
    console.log(carro6[chave]);
}

// 9. Criando um array que armazene os 3 objetos criados
let carros = [carro4, carro5, carro6];

// 10. Adicionando um elemento ao final e outro ao início do array
carros.push(new Carro("Renault", "Kwid", 2023, "Laranja"));
carros.unshift(new Carro("Peugeot", "208", 2022, "Amarelo"));

// 11. Desfazendo as adições
carros.pop();      // remove o último
carros.shift();    // remove o primeiro

// 12. Puxando o terceiro atributo (ano) do segundo elemento do array
console.log(carros[1].ano);

// 13. EXTRA
// 13.1 Acessando elementos específicos do array aninhado
let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];

console.log(primos[1][3][0]);  // 97
console.log(primos[2][2][0]);  // 29

// 13.2 Reproduzindo a pirâmide
for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}
