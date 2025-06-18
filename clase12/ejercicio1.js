/*
Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario 
ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.
 */

const prompt = require('prompt-sync')();

let numeroUsuario =parseInt(prompt("Ingrese un número (negativo para terminar): "));
let suma = 0;

while (numeroUsuario >= 0) {
    suma += numeroUsuario;
    numeroUsuario = parseInt(prompt("Ingrese otro número(negativo para terminar):"));   
}

 console.log((`La suma total de los números ingresados es: ${suma}`));
 

