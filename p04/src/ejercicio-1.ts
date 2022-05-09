/* eslint-disable max-len */

// Ejercicio 1 - Tablas de multiplicar

/**
 * __Tablas de multiplicar__
 * @param numero Array de números a incluir el parámetro con N tablas de multiplicar.
 * @returns Devuelve la multiplicacion resultado final de la multiplicacion en formato cadena.
 *  * ```ts
 * productTable(numero: number): number[][] | string
 * productTable(2)) = [[1, 2], [2, 4]]
 * ```
 */

export function productTable(numero: number): number[][] | string {
  let multiplicacion: number[][] = [];
  let auxMultiplicacion: number[] = [];
  let resultado: number[] = [];
  let valor: number = 0;
  let aux: number = 1;

  if (numero >= 1) { // devuelve n tablas de multiplicar
    for (let i = 0; i <= numero; i++) {
      auxMultiplicacion.push(i); // lo metemos
    }
    for (let i = 1; i <= auxMultiplicacion.length - 1; i++) { // bucle cadena
      while (aux <= numero) {
        valor = auxMultiplicacion[i] * aux; // multiplicamos todas las cadenas por una nueva
        resultado.push(valor); // lo metemos
        aux++; // aumentamos
      };
      multiplicacion.push(resultado); // guardamos
      resultado = []; // guardamos en []
      aux = 1;
    }
  }
  return multiplicacion; // devolvemos multiplicacion
}

console.log(productTable(2));
console.log(productTable(3));
console.log(productTable(4));