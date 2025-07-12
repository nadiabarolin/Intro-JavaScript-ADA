/*
Ejercicios Extra para seguir practicando:
Encuentra los nombres más cortos y transforma su formato
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'].
Queremos realizar varias tareas con esta lista:
o Primero, filtra los nombres que tengan menos de 5 letras.
o Luego, transforma los nombres resultantes para que estén en mayúsculas.
o Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", 
donde [nombres] sea la lista resultante unida por comas.
Al final, imprime la frase en la consola. 
*/

let listaNombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

// Primero, filtra los nombres que tengan menos de 5 letras.
let nombresCortos = listaNombres.filter (nombre => nombre.length < 5);

// Luego, transforma los nombres resultantes para que estén en mayúsculas.
let nombresMayuscula = nombresCortos.map(nombre => nombre.toLocaleUpperCase());

// Frase
let frase = "Los nombres selecionados son: " + nombresMayuscula.join(", ");

console.log(frase);


