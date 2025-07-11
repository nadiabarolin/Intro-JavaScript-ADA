/*
Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. 
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa 
una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las 
matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día 
en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las 
columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.
 */

let matriz= [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
]
const prompt = require('prompt-sync')();

// >> Suma de la semana <<

// Pedimos al usuario que ingrese una semana
let semana= parseInt(prompt("Ingrese el número de la semana (del 1 al 4): "));

// Restamos -1 al valor que ingreso, porque la matriz empieza en 0
let filaSemana = matriz[semana - 1];
// Total de la suma
let totalSemana = 0;

// Recorremos los 7 dias de esa semana
for (let dia = 0; dia < filaSemana.length; dia++){
    totalSemana += filaSemana[dia];
}
console.log(`La suma de la semana ${semana} es: ${totalSemana}`);



// >> Dar el total de un día en particular <<

// Pedimos al usuario que ingrese un día
let diaElegido= parseInt(prompt("Ingrese el número del día (del 1 al 7): "));

// Restamos -1 al valor que ingreso, porque la matriz empieza en 0
let columna = diaElegido - 1;

// Total de la suma
let totalDia = 0;

// Recorremos todas las filas (las 4 semanas)
for (let fila = 0; fila < matriz.length; fila++){
    totalDia += matriz[fila][columna];
}
console.log(`La suma del día ${diaElegido} es: ${totalDia}`);

// Gastos total del mes

let totalMes = 0;

for (let fila = 0; fila < matriz.length; fila++){
    
    for (let columna = 0; columna < matriz[fila].length; columna++){
        totalMes += matriz[fila][columna];
    }
}

console.log(`- El total de gastos del mes es: ${totalMes}`);

// Semanas con más gastos

let mayorSuma= 0;
let semanaMayor= 0;

for(let fila = 0; fila < matriz.length; fila++){
    let sumaSemana = 0;

    for(let dia = 0; dia < matriz[fila].length; dia++){
        sumaSemana += matriz[fila][dia];
    }

    if(sumaSemana > mayorSuma){
        mayorSuma = sumaSemana;
        semanaMayor = fila;
    }
}

console.log(`- La semana con más gastos fue la semana ${semanaMayor+1}, con un total de: $${mayorSuma}`);

// Día con más gastos

let mayorGastoDia = 0;
let diaMayorGasto = 0;

for(let dia =0; dia < matriz[0].length; dia++){
    let sumaDia = 0;

    for(let semana =0; semana < matriz.length; semana++){
        sumaDia += matriz[semana][dia];
    }

    if(sumaDia > mayorGastoDia){
        mayorGastoDia = sumaDia;
        diaMayorGasto = dia;
    }
}

console.log(`- El día con más gastos fue el día ${diaMayorGasto + 1}, con un total de: $ ${mayorGastoDia}`);
