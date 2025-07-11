/*
Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. 
Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. 
Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.
 */

let filaMascotas=["Perro","Gato","Conejo"];

// Agregar "Hámster" al inicio
filaMascotas.unshift("Hámster");

// Atender a la primera mascota
let atendido = filaMascotas.shift();

// Mostrar resultados
console.log("Mascota atendida:", atendido);
console.log("Fila actualizada:", filaMascotas);