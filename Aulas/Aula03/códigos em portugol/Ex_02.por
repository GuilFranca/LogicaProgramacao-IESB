programa {
  funcao inicio() {
    // 2 - Escreva um algoritmo que leia um número informados pelo usuário e exiba se ele é par ou ímpar.
    real numero

    escreva("Digite um número: ")
    leia(numero)

    se (numero % 2 == 0) {
      escreva("O número digitado é par")
    } senao {
      escreva("O número digitado é ímpar")
    }

  }
}
