/*
Ejercicio 6: La tabla de multiplicar
Consigna: Crea un programa que le pida al usuario un número 
y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.
 */

const prompt = require('prompt-sync')();

let numUsuario = parseInt(prompt("Ingrese un número:"));
console.log(`Tabla de multiplicar del ${numUsuario}:`);


for(let i = 1; i <=10; i++){
    console.log(`${numUsuario} x ${i} = ${numUsuario * i}`);
    
}