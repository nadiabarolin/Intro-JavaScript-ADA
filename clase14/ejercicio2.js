/*
Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
 */

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la terecera nota: "));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota: "));
let nota5 = parseFloat(prompt("Ingrese la quinta nota: "));

let notaFinal = (nota1,nota2,nota3,nota4,nota5) => (nota1 + nota2 + nota3 + nota4 + nota5)/5;
let promedio = notaFinal(nota1, nota2, nota3, nota4, nota5);

console.log(`El promedio es: ${promedio.toFixed(2)}`);
    

