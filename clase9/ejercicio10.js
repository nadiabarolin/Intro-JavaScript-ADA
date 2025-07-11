/*Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el
día de la semana correspondiente. Si el número no está dentro 
de ese rango, muestra un mensaje de error.

 */

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Ingrese un número del 1 al 7: "));

if (num === 1){
    console.log("Es Lunes!");
} else if (num === 2){
    console.log("Es Martes!");
} else if (num === 3){
    console.log("Es Miércoles!");
} else if (num === 4){
    console.log("Es Jueves!");
} else if (num === 5){
    console.log("Es Viernes");
} else if (num === 6){
    console.log("Es Sábado!");
} else if (num === 7){
    console.log("Es Domingo!");
} else{
    console.log("El número no corresponde a ningun día de la semana.");
}




