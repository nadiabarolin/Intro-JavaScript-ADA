/*
Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: 
la base y la altura de un triángulo. 
La función debe devolver el área del triángulo. 
Pista: Usa la fórmula:
                        Área = base x altura
                                    2
 */

function calcularAreaTriangulo(base,altura) {
    return (base * altura) / 2;    
}

console.log(calcularAreaTriangulo(6,12));
