/*
Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba 
un número y devuelva su factorial. 
Fórmula del factorial:
      n! = n x (n-1) x ... x1
 */

let calcularFactorial = function(n) {
 let resultado = 1;
 for (let i = 1; i <= n; i++){
    resultado *= i;
 }
 return resultado;
};

console.log(calcularFactorial(5));
