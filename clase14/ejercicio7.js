/*
Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔ título: una cadena con el título del libro.
✔ autor: una cadena con el nombre del autor del libro.
✔ anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como 
parámetro y muestre por consola la información de cada libro en el formato especificado.
 */

let libro1={
    titulo:"Orgullo y prejuicio",
    autor:"Jane Austen",
    anioPublicacion: 1813,
}
let libro2={
    titulo:"El principito",
    autor:" Antoine de Saint-Exupéry",
    anioPublicacion: 1943,
    
}

function mostrarLibro(libros) {
    for (let i = 0; i < libros.length; i++){
        console.log(`Título: ${libros[i].titulo}`);
        console.log(`Autor: ${libros[i].autor}`);
        console.log(`Título: ${libros[i].anioPublicacion}`);
        console.log("--------------------------------");
        
        
    }
}


mostrarLibro([libro1,libro2]);
