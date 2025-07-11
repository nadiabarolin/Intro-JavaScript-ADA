/*
Ejercicio 7: Verificar si una lista contiene un elemento.
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. 
Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no. 
*/

let listaComidas = ["Pizza","Hamburguesa","Tacos"];
let pregunta = listaComidas.includes("Sushi");

if (pregunta) {
  console.log("Sí, hay Sushi en la lista.");
} else {
  console.log("No, Sushi no está en la lista.");
}
