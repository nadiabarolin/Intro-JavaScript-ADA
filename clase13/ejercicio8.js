/*
Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
Fórmula:
 Fahrenheit = (Celsius x 9/5) + 32
 */

 let convertirCelsiusAFahrenheit = function(celsius){
  let fahrenheit = (celsius * 9/5) + 32
  return `${celsius}°C equivale a ${fahrenheit}°F`
 };

 console.log(convertirCelsiusAFahrenheit(24));
 

