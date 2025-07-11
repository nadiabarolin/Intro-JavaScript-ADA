/* 
Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese 
dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones 
lógicas.
*/
const prompt = require("prompt-sync")({ sigint: true });

let entrada1 = prompt("Ingrese el primer valor booleano (true/false): ").toLocaleLowerCase();
let entrada2 = prompt("Ingrese el primer valor booleano (true/false): ").toLocaleLowerCase();

let condicion1 = (entrada1 === "true");
let condicion2 = (entrada2 === "true");

console.log("Resultado:");
console.log("condicion1 AND condicion2: " + (condicion1 && condicion2));
console.log("condicion1 OR condicion2:  " + (condicion1 || condicion2));
console.log("NOT condicion1:            " + (!condicion1));
console.log("NOT condicion2:            " + (!condicion2));

