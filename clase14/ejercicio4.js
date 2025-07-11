/*
Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.
 */

const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("Ingrese la cantidad de productos comprado: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario: "));

let calcularDescuento = (cantidad, precioUnitario) =>{
    let descuento = 0;

    if (cantidad >= 10){
        descuento = 0.2;         // 20% de descuento
  
    }else if (cantidad >=5){
        descuento = 0.1;        // 10% de descuento
    }


 let total = cantidad * precioUnitario;
 let totalDescuento = total - (total * descuento);

 return totalDescuento.toFixed(2);

};

let totalFinal = calcularDescuento(cantidad,precioUnitario);
console.log(`El total a pagar con descuento es: ${totalFinal}`);
