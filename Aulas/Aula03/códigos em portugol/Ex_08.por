programa {
  funcao inicio() {
    // 8. Escreva um algoritmo que leia do usuário dois números, o raio e a altura de um cilindro. Em seguida, exiba o cálculo do volume desse cilindro.

    real raio, altura, volume, pi = 3.14

    escreva("Digite o valor do raio do cilindro: ")
    leia(raio)

    escreva("Digite o valor da altura do cilindro")
    leia(altura)

    volume = pi * (raio * raio) *altura

    escreva("O volume do cilindro é de: ", volume)

  }
}
