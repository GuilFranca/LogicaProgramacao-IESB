programa {
  funcao inicio() {
    // 5 - Escreva um algoritmo que receba dois números informado pelo usuário e exiba o cálculo da distância entre eles.

    real numero1, numero2, distancia

    escreva("Digite o valor do primeiro número: ")
    leia(numero1)

    escreva("Digite o valor do segundo número: ")
    leia(numero2)

    se (numero2 > numero1) {
      distancia  = numero2 - numero1
    } senao {
      distancia = numero1 - numero2
    }

    escreva("A distância entre os dois número é de ", distancia)

  }
}
