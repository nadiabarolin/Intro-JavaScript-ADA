/*
Ejercicio 7 - Intercambio de Valores: 
Declara dos variables con valores iniciales y luego intercambia sus valores. 
Muestra los valores antes y después del intercambio en la consola. Para intercambiar 
valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación 
simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
 */


const prompt = require('prompt-sync')();

// Declaración de variables
let num1 = 32;
let num2 = 92;

console.log("Valores antes del intercambio: " + " Número 1: " + num1 + " y " + " Número 2: " + num2);

// Intercambio de valor
let temp = num1;     // Se guarda el valor original de "num1" en "temp"
num1 = num2          // "num1" ahora toma el valor de "num2"
num2 = temp;         // "num2" toma el valor original de "num1" (que estaba en "temp")

console.log("Valores después del intercambio: " + " Número 1: " + num1 + " y " + "Número 2: "+ num2);

