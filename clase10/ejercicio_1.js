const prompt = require('prompt-sync')();

/* Ejercicio 1 - Declarar dos variables:
Nuestra tarea será declarar dos variables: una con el nombre edad y 
la otra con el nombre peso. Después deberás asignarle un valor.
Pista: Recordemos que para crear una variable debemos utilizar 
la palabra reservada "let", seguida del nombre con el cual luego
le haremos referencia.
 */

let edad;
let peso;

/*Ejercicio 2 – Usando las variables:
Escribe un programa que pida al usuario que ingrese su nombre, su edad y 
su peso, y luego muestre un mensaje personalizado que incluya toda esta información.
Desglosando el ejercicio deberás:
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
Pista: En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca
 pedir datos al usuario, por lo que usaremos prompt-sync para solicitar esta información.
 */

let nombre = prompt("Ingrese su nombre: ");
edad = prompt("Ingrese su edad: ");
peso = prompt("Ingrese su peso: ");

console.log("¡Hola "+ nombre + "!" + " Tenés " + edad + " años" + " y pesás " + peso + " kg.");


