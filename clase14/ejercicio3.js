/*
Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para 
clasificarla en niño, adolescente, adulto o adulto mayor.
*/
const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

let clasificacion = () =>{
    if (edad <= 11){
        console.log("Eres un niño.");
        
    } else if(edad <= 19){
        console.log("Eres adolescente.");
        
    } else if(edad <=59){
        console.log("Eres adulto.");
        
    }else{
        console.log("Eres adulto mayor.");
        
    }

}

clasificacion();