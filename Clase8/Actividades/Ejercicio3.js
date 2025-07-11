const prompt = require("prompt-sync")({ sigint: true });

/*
Ejercicio 3: Suma de dos números ingresados por el usuario
 Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores aritméticos. 
Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
• Utiliza prompt() para recibir los números.
• Utiliza parseFloat() para convertir las entradas a números.
• Almacena los resultados en variables adecuadas y muestra el resultado.

*/

// 1. Entrada de números

let entrada1 = prompt ("Ingresa el primer número: ");
let entrada2 = prompt ("Ingresa el segundo número: ");

// 2. Convertir entrada a números
let numero1 = parseFloat(entrada1);
let numero2 = parseFloat(entrada2);

// 3. Suma de ambos números
let suma = numero1 + numero2;

// 4. Mostrar resultado
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);


