/*
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre.
*/
const prompt = require("prompt-sync")({ sigint: true });

let miNombre ="nadia";
let nombre=prompt("Ingrese un nombre: ").toLocaleLowerCase();

if(nombre===miNombre){
    console.log("Ingresó el nombre correcto");
}else{
    console.log("El nombre que ingresó es incorrecto");
}