/*
Ejercicio 5: Encuentra los números pares entre dos valores
Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre 
el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar 
un mensaje indicando que los valores son inválidos.
 */

const prompt = require('prompt-sync')();

let numInicio=parseInt(prompt("Ingrese un número de inicio: "));
let numFinal=parseInt(prompt("Ingrese un número de fin: "));

if (numInicio > numFinal){
    console.log("Los valores son inválidos");
}else{
    console.log(`Los números pares entre ${numInicio} y ${numFinal}:`);  
    
    for (let i= numInicio; i <= numFinal; i++){
        if (i % 2 === 0){
            console.log(i);
            
        }
    }
}
