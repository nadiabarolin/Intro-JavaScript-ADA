/*
Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. 
Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array
 manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente). 
*/

const prompt = require('prompt-sync')();

let listaFlores=[];
console.log(">> 🌸 Dime tus 4 flores favoritas 🌸 <<");

let flor1 = prompt("¿Cuál es tu primera flor favorita?: ");
let flor2 = prompt("¿Cuál es tu segunda flor favorita?: ");
let flor3 = prompt("¿Cuál es tu tercera flor favorita?: ");
let flor4 = prompt("¿Cuál es tu cuarta flor favorita?: ");

listaFlores[0] = flor1;
listaFlores[1] = flor2;
listaFlores[2] = flor3;
listaFlores[3] = flor4;

let buscarFlor = prompt("¿Qué flor querés buscar entre tus favoritas?: ");
let contador = 0;

if (listaFlores[0] === buscarFlor){
    contador ++;
}
if (listaFlores[1] === buscarFlor){
    contador ++;
}
if (listaFlores[2] === buscarFlor){
    contador ++;
}
if (listaFlores[3] === buscarFlor){
    contador ++;
}
if (listaFlores[4] === buscarFlor){
    contador ++;
}

if (contador > 0) {
    console.log(`La flor "${buscarFlor}" fue mencionada ${contador} vez/veces entre tus favoritas.`);
} else {
    console.log(`La flor "${buscarFlor}" no está entre tus favoritas.`);
}