/*
Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
(Investiga sobre los triángulos para determinar la formula)
 */

const prompt = require("prompt-sync")({ sigint: true });

console.log("¿Qué triangulo es?")

let lado1=parseFloat(prompt("Ingrese medidas de lado 1: "));
let lado2=parseFloat(prompt("Ingrese medidas de lado 2: "));
let lado3=parseFloat(prompt("Ingrese medidas de lado 3: "));

if (lado1 === lado2 && lado1 === lado3 ) {
    console.log("Es un triángulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 ===lado3) {
    console.log("Es un triángulo Isósceles");
} else {
    console.log("Es un triángulo Escaleno");
}