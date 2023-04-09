/*
 Escreva uma função que retorne a área de um triângulo,
a partir dos valores de base e altura fornecidos.
*/
const entrada = require('prompt-sync')({sigint:true});

function calculator(basE,alturA){
    return (basE * alturA) / 2 ;
}
    var base = entrada("informe a base");
    var altura = entrada("Informe a altura");
    var resultado = calculator(base,altura);
    console.log(resultado);