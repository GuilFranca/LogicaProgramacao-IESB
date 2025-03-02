programa {
  funcao inicio() {
    // 4 - Escreva um algoritmo que receba um número introduzido pelo usuário exiba ao usuário se é positivo, negativo ou zero.

    real numero

    escreva("Digite um valor: ")
    leia(numero)

    se (numero > 0) {
      escreva("O valor digitado é positivo")
    } senao {
      se (numero == 0) {
        escreva("O valor digitado é igual a zero")
      } senao {
        escreva("O valor digitado é negativo")
      }
    }

  }
}
