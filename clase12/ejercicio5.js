/*
Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. 
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. 
(Pueden desglosar en pasos el código si eso les facilita su desarrollo)
 */

const prompt = require('prompt-sync')();

// let nombresIngresos = prompt("Ingrese un nombre: ");

let nombresGuardados=[]

for (let i=0; i<5; i++) {
   let nombresIngresos = prompt(`Ingrese el nombre del estudiante ${i+1}: `).toLowerCase();
   nombresGuardados[i] = nombresIngresos;
}

console.log(">>> Verifiquemos si los nombres se guardaron en la lista <<<");

let nombreBuscados= prompt("Ingrese un nombre: ").toLowerCase();
let encontrado = false;

for (let i = 0; i < nombresGuardados.length; i++){
    if (nombresGuardados[i] === nombreBuscados){
        encontrado = true;
    }
}

if (encontrado){
    console.log("✅ El nombre se encuentra en la lista.");  
}else{
    console.log("❌ El nombre no está en la lista.");    
}