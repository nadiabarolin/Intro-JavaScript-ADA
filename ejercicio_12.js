/*
Calcula el total de ventas de productos seleccionados. 
Supón que tienes una lista de productos con sus precios en formato de objeto:
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];
Queremos:
o Seleccionar los productos cuyo precio sea mayor o igual a 50.
o Obtener solo los nombres de esos productos.
o Calcular el precio total sumando los precios de los productos seleccionados.
o Imprime el total y los nombres de los productos seleccionados en la consola.
*/

const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

// Seleccionar los productos cuyo precio sea mayor o igual a 50.
const seleccionarProductos = products.filter (products => products.price >= 50);

// Obtener solo los nombres de esos productos.
const nombres = productosSeleccionados.map(producto => producto.name);

// Calcular el precio total sumando los precios de los productos seleccionados.
const total = productosSeleccionados.reduce((suma, producto) => suma + producto.price, 0);

// Imprime el total y los nombres de los productos seleccionados en la consola.
console.log("Productos seleccionados:", nombres);
console.log("Total de ventas:", total);

