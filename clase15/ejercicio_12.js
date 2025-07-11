/*
Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. 
Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial. 
3. Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
*/

let listaInicialClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let cantidadAtendidos = 0;

while (listaInicialClientes.length > 0) {
  let cliente = listaInicialClientes.shift(); // atiende al primero

  if (cliente === "VIP") {
    console.log("🔴 Cliente VIP en atención prioritaria.");
  } else {
    console.log("Atendiendo a:", cliente);
  }

  cantidadAtendidos++;
}

console.log("Total de clientes atendidos:", cantidadAtendidos);