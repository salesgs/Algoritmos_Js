/*
 Escreva uma função em JavaScript que realize a conversão de uma temperatura 
 fornecida em graus Fahrenheit (F) para Celsius (C).
*/
function temperature(tempCelsius){
  return (tempCelsius *1.8) +32;
}
var celsius =3;
var fahrenheit = temperature(celsius);
console.log(fahrenheit);