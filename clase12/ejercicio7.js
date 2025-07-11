/*
Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. 
Luego, escribe un algoritmo para sumar todos los números en la matriz.
 */

let matriz =[
    [1, 22, 3 , 40, 65],
    [90, 72, 88, 20, 43],
    [2, 44, 5, 99, 30],
    [18, 27, 58, 6, 61],
    [50, 15, 9, 10, 58],
]

let suma = 0;

for (let fila = 0; fila < matriz.length; fila++){
    
    for (let columna = 0; columna < matriz[fila].length; columna++){
        suma += matriz[fila][columna]
    }
}

console.log(`La suma de todos los números de la matriz es: ${suma}`);
