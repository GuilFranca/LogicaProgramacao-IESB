programa {
  funcao inicio() {
    // 7 - Escreva um algoritmo que receba e leia do usuário um número que representará o raio de um círculo. Exiba ao usuário o resultado da área e do perímetro desse círculo. Considere π = 3,1416.

    real raio, area, perimetro, pi = 3.14


    escreva("Digite o valor do raio: ")
    leia(raio)

    area = pi * (raio * raio)

    perimetro = 2 * pi * raio

    escreva("A área do círculo é de: ", area)
    escreva("O perímetro do círculo é de: ", perimetro)


  }
}
