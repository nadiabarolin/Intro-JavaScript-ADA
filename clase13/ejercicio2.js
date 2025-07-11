/*
Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que 
reciba dos números como parámetros y devuelva 
el número mayor. */
 
let numeros = function encontrarMayor(num1,num2) {
    return (num1 > num2) ? num1 : num2;  
}

console.log(numeros(10,20));
console.log(numeros(10,2));