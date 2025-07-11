/*
Ejercicio 4: ¿Es par o impar?
Consigna: Los números pueden ser pares o impares. Escribe un programa que le pida 
al usuario un número y determine si es par o impar. Muestra un mensaje explicativo 
indicando qué significa cada caso.
 */

const prompt = require('prompt-sync')();

let numUsuario = parseInt(prompt("Ingrese un número: "));

let resultado = (numUsuario % 2 === 0) ? `El número ${numUsuario} es par. ` : `El número ${numUsuario} es impar.`;
console.log(resultado);

