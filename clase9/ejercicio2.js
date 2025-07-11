const prompt = require("prompt-sync")({ sigint: true });

/*Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
Pide al usuario que ingrese un número y verifica si está dentro del rangodefinido por las 
constantes.
 
 */

const RANGO_MAXIMO = 15;
const RANGO_MINIMO = 10;

let numero = parseFloat(prompt("Ingrese un número: "));

if(RANGO_MINIMO<=numero && RANGO_MAXIMO>=numero) {
    console.log("El número esta dentro del rango definido");

}else{
    console.log("El numero no esta dentro del rango");
}