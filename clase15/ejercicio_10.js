/*
Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1. Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
3. Eliminar el primer producto del inventario.
4. Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
*/

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Inventario inicial:", inventario);

// 1. Agregar "Impresora"
inventario.push("Impresora");

// 2. Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
  console.log("La Tablet está en el inventario.");
} else {
  console.log("La Tablet NO está en el inventario.");
}

// 3. Eliminar el primer producto
let primerProducto = inventario.shift();
console.log("Producto eliminado:", primerProducto);

// 4. Mostrar lista actualizada como cadena
let separadosPorComa = inventario.join(", ");
console.log("Lista actualizada:", separadosPorComa);