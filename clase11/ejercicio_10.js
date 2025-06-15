/*
Ejercicio 10: Adivina el número
Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta 
en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
 */

const prompt = require('prompt-sync')();

const numSecreto = Math.floor(Math.random()*10)+1;
let adivino = false;

console.log("Adivina el número del 1 al 10");


for (let intento = 1; intento <=3; intento++){
    const adivinanza = parseInt(prompt(`Intento ${intento}:`))

switch (true) {
    case adivinanza===numSecreto:
        console.log(`🎉¡Felicitaciones! Adivinaste el número en el intento ${intento}`);
        adivino = true; 
        break;
    case adivinanza < numSecreto:
        console.log("Muy bajo...¡Intenta un número más alto!");
        break;
    case adivinanza > numSecreto:
        console.log("Muy alto... ¡Intenta un número más bajo!");
        break;
}
    if (adivino)
        break;
}
if (!adivino){
    console.log(`Lo siento... el número secreto era ${numSecreto}`);
    
}
