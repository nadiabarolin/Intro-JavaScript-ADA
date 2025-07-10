/*
Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber 
si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo. 
*/

let listaNombre = [`Carlos`, `Daniel`, `Laura`, `Ana`];
let nombre = listaNombre.find(nombres => nombres === `Laura`);
if (nombre) {
    console.log("Nombre encontrado:", nombre);
} else {
    console.log("Nombre no encontrado.");
}


