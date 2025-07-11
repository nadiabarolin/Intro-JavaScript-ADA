/*
Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
Muestra un mensaje personalizado según el caso.
*/

const prompt = require("prompt-sync")({ sigint: true });

const mayor = 18;
const edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= mayor){
    console.log("Eres mayor de edad.¡Puedes ingresar!");
}else{
    console.log("Eres menor de edad. No puedes ingresar.")
}

