programa {
  funcao inicio() {
    // 6 - Escreva um algoritmo que leia três números, a base maior, a base menor e a altura de um trapézio. Por fim, exiba o cálculo da área desse trapézio.

    real base_maior, base_menor, altura, area

    escreva("Digite o valor da base maior: ")
    leia(base_maior)

    escreva("Digite o valor da base menor: ")
    leia(base_menor)

    escreva("Digite o valor da altura: ")
    leia(altura)

    area = (base_maior + base_menor) * altura / 2

    escreva("Área = ", area) 

  }
}
