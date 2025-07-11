/*
Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva 
"Es par" si el número es par o "Es impar" si el número es impar. 
Usa una variable local para guardar el resultado.
 */

function esPar(numero) {

 let parOimpar = (numero % 2 === 0) ? `Es par` : `Es impar`;
 
 return parOimpar;

}

console.log(esPar(8));
 