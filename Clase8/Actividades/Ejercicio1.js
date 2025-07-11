const prompt = require("prompt-sync")({ sigint: true });

/* 
Ejercicio 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. 
Debes escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número.

*/ 

// 1. Solicitar al usuario que ingrese un número cualquiera
let numero= prompt("Ingresa un número: ");
// 2. Convertir el valor ingresado a número
numero= Number(numero);
// 3. Calcular el doble del número
let doble = numero * 2;
// 4. Mostrar el resultado
console.log ("El doble de " + numero +  " es: " + doble);