/* 
Ejercicio 6 - Comparaciones y Operadores Lógicos:
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos 
para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.
  Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:
2. Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números 
son mayores que 10.
  Mostrar Resultado en la Consola:
3. Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre 
al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. El operador 
lógico "&&" (y lógico) se utiliza para combinar condiciones y todas deben cumplirse para que 
el resultado sea verdadero.
 */
const prompt = require('prompt-sync')();

let num1 = 25;
let num2 = 35;

let num1EsMayor = num1 > 10;
let num2EsMayor = num2 > 10;
let ambosNumerosSonMayores = num1 > 10 && num2 > 10; 

console.log("¿Número 1 es mayor a 10?" + num1EsMayor);
console.log("¿Número 2 es mayor a 10?" + num2EsMayor);
console.log("¿Ambos números son mayores a 10? " + ambosNumerosSonMayores);
