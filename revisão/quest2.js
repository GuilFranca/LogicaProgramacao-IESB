// Herança é a habilidade de possuir caracteristicas do objeto pai, sendo assim uma forma de herança. Podendo herdar atributos, constructors, getters, setter ou métodos.

// Polimorfismo é quando um objeto pode se comportar de várias formas, podendo ter diferentes funcionalidades para um mesmo método.

// Encapsulamento é uma forma de proteger a aplicação privando os atributos, fazendo com que os mesmos só possam ser editados ou utilizados por meio de métodos.

class Conta {

    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {

        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log('Valor inválido!')
        }
    }

    sacar(valor) {
        this.#saldo -= valor;
    }

    getSaldo() {
        return this.#saldo;
    }

    setSaldo(valor) {
        this.#saldo = valor;
    }

}

class ContaNome extends Conta {

    #nome;

    constructor(saldoInicial, nome) {
        // Chama o construtor da classe pai Conta
        super(saldoInicial)
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

}

const nubank = new Conta(1000);

console.log(`Saldo inicial da Nubank: R$${nubank.getSaldo()}`);

const inter = new ContaNome(5000, 'Guilherme')

console.log(`Saldo inicial de ${inter.getNome()} Nubank: R$${inter.getSaldo()}`);

// Não é possível acessar o nome 
console.log(inter.nome)