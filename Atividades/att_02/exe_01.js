var numero1 = 100;
var numero2 = 100;
var numero3 = 100;
var media = (numero1 + numero2 + numero3) / 3;

console.log('número1 =',numero1);
console.log('número2 =',numero2);
console.log('número3 =',numero3);

if ((numero1 > 100 || numero1 < 0) || (numero2 > 100 || numero2 < 0) || (numero3 > 100 || numero3 < 0)) {
    console.log('Alugum dos valores informados é menor que 0 ou maior que 100, altere os valores para o programa funcionar');
} else {
    console.log(`A média aritmética dos números ${numero1}, ${numero2}, ${numero3} é = ${media}`);
}
