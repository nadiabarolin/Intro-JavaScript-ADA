/*
Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. 
Usa una función flecha para calcular el precio final. 
*/

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio del producto: $ "));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje de IVA: "));

let precioFinal = () => {
    let montoIva = precio * (porcentaje / 100);
    return precio + montoIva;

}

console.log(`El producto tiene un ${porcentaje}% de IVA. El precio final es: $${precioFinal().toFixed(2)}`);
