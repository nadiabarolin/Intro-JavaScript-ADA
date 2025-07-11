/*
Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada 
ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en la lista donde aparece 
el modelo específico de auto dado por modelo.
Datos Iniciales:
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de autos, algunos repetidos para 
demostrar la funcionalidad.
Funcionalidad:
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro (un string).
✔ Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
✔ Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1) 
en la que aparece (considerando que la numeración es de 1 a N).
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que el modelo no está presente.

 */


let modelosAutos = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Focus",
  "Toyota Corolla",
  "Chevrolet Onix",
  "Honda Civic",
  "Volkswagen Golf"
];

function ultimaAparicionModeloAuto(modelo) {
    ultimaPosicion = -1;

    for (let i=0; i <modelosAutos.length;i++){
        if (modelosAutos[i] === modelo){
            ultimaPosicion = i;
        }

    }

    if (ultimaPosicion !== -1){
        console.log(`La última aparicion de ${modelo} esta en la posicion ${ultimaPosicion + 1}`); 
    }else{
        console.log(`El modelo ${modelo} no está presente en la lista`);
        
    }
}

ultimaAparicionModeloAuto("Honda Civic");