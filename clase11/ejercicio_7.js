/*
Ejercicio 7: Calculadora simple
Consigna: Crea un programa que le pida al usuario dos números y una operación 
matemática a realizar: suma, resta, multiplicación o división. Según la operación 
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa 
una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para 
resolverlo.
 */

const prompt = require('prompt-sync')();

let num1=parseFloat(prompt("Ingrese el primer número: "));
let num2=parseFloat(prompt("Ingrese el segundo número: "));
let operación=prompt("Ingrese la operacion(+, -, x, /): ");

switch (operación) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2} `);
       
        break;

    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2} `);
        
        break;

    case "x":
     
        console.log(`${num1} x ${num2} = ${num1 * num2} `);

        break;

    case "/":
        if (num2 === 0){
            console.log("¡Error! No se puede dividir por 0");    
        }else{
         console.log(`${num1} ÷ ${num2} = ${num1 / num2} `);  
        }

        break;    

    default:
        console.log("⚠️ Operación inválida. Use +, -, x o /");
        
        break;
}



