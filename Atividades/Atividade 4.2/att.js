// Nome: Guilherme França Fernandes
// Matrícula: 25114290007

// TEMA: Carros

// 1. Criação de 3 objetos literais com 4 atributos cada:
const carro1 = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  cor: "Prata"
};

const carro2 = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2019,
  cor: "Preto"
};

const carro3 = {
  marca: "Ford",
  modelo: "Focus",
  ano: 2018,
  cor: "Branco"
};

// 2. Função construtora:
function Carro(marca, modelo, ano, cor) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.cor = cor;
}

// 3. Instâncias da classe Carro:
const carroA = new Carro("Chevrolet", "Onix", 2021, "Vermelho");
const carroB = new Carro("Hyundai", "HB20", 2022, "Azul");
const carroC = new Carro("Volkswagen", "Golf", 2020, "Cinza");

// 4. Buscar todas as chaves dos objetos:
console.log(Object.keys(carroA));
console.log(Object.keys(carroB));
console.log(Object.keys(carroC));

// 5. Buscar todos os valores dos objetos:
console.log(Object.values(carroA));
console.log(Object.values(carroB));
console.log(Object.values(carroC));

// 6. Puxar todos os pares chave-valor:
console.log(Object.entries(carroA));
console.log(Object.entries(carroB));
console.log(Object.entries(carroC));

// 7. For loop para buscar todas as chaves:
for (let chave in carroA) {
  console.log("carroA chave:", chave);
}
for (let chave in carroB) {
  console.log("carroB chave:", chave);
}
for (let chave in carroC) {
  console.log("carroC chave:", chave);
}

// 8. For loop para buscar todos os valores:
for (let chave in carroA) {
  console.log("carroA valor:", carroA[chave]);
}
for (let chave in carroB) {
  console.log("carroB valor:", carroB[chave]);
}
for (let chave in carroC) {
  console.log("carroC valor:", carroC[chave]);
}

// 9. Criar array com os 3 objetos:
let listaCarros = [carroA, carroB, carroC];

// 10. Adicionar elemento no final e no início:
listaCarros.push(new Carro("Renault", "Kwid", 2023, "Amarelo"));
listaCarros.unshift(new Carro("Fiat", "Argo", 2024, "Verde"));

// 11. Desfazer adições:
listaCarros.pop();      // Remove último (Renault)
listaCarros.shift();    // Remove primeiro (Fiat)

// 12. Puxar o terceiro atributo do segundo elemento:
console.log("Ano do segundo carro:", listaCarros[1].ano);

// 13. EXTRA
// 13.1. Indexação:
let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
console.log("Elemento 97:", primos[1][3][0]);
console.log("Elemento 29:", primos[2][2][0]);

// 13.2. Pirâmide:
let linhas = 6;
let piramide = "";
for (let i = 1; i <= linhas; i++) {
  piramide += "*".repeat(i) + "\n";
}
console.log(piramide);


