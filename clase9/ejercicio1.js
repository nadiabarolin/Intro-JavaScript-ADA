const prompt = require("prompt-sync")({ sigint: true });


/* Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. 
Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales. 
*/

let numero1;
let numero2;

numero1 = parseFloat(prompt("Ingresa el primer número: "));
numero2 = parseFloat(prompt("Ingresa el segundo número: "));

if (numero1 > numero2){
    console.log("El número mayor es: " + numero1);
} else if (numero2 > numero1){
    console.log ("El número mayor es: " + numero2);

} else {
    console.log("Ambos números son iguales.");
}