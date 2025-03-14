programa {
  funcao inicio() {
    // 3 - Escreva um algoritmo que leia três números e exiba o maior entre eles.

    real numero1, numero2, numero3, maior_numero

    escreva("Digite o valor do primeiro número: ")
    leia(numero1)
    
    escreva("Digite o valor do segundo número: ")
    leia(numero2)
    
    escreva("Digite o valor do terceiro número: ")
    leia(numero3)

    maior_numero = numero1

    se (numero2 > maior_numero) {
      maior_numero = numero2
    }

    se (numero3 > maior_numero) {
      maior_numero = numero3
    }

    escreva("O maior número é: ", maior_numero)

  }
}
