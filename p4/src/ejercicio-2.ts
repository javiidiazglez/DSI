/* eslint-disable max-len */

// Ejercicio 2 - Compresión de números en rangos

/**
 * __fromArrayToRanges__
 * @param cadena Array de cadenas de string
 * @returns devuelve el valor de array to ranges
 * ```ts
 * fromArrayToRanges(cadena: number[]): string
 * fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) = '5_7, 9, 12_14'
 * ```
 */

export function fromArrayToRanges(cadena: number[]): string {
  let resultado: string = '';
  let valorJ: number = 0;
  let valor2: number = 0;
  for (let i: number = 0; i < cadena.length; i++) { // recorre
    valorJ = i;
    let valor3: number = 0;
    let cadCompleta: string = cadena[i].toString(); // primero numero
    while ((valorJ < cadena.length - 1) && (cadena[valorJ + 1] == cadena[valorJ] + 1)) {
      valor3++; valorJ++; i++;
    }
    if (valor2 > 0) {
      resultado += ', ';
    }
    if (valor3 > 0) {
      resultado += cadCompleta + '_' + cadena[valorJ].toString(); // convertimos
    } else {
      resultado += cadCompleta;
    }
    valor2++; // actualizamos la coma
  }
  return resultado;
}

console.log(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]));
console.log(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]));
console.log(fromArrayToRanges([17]));
console.log(fromArrayToRanges([3, 5, 6, 7, 9, 10]));

/**
 * __fromRangesToArray__
 * @param cadena Array de cadenas de string
 * @returns Devuelve del rango a string
 * ```ts
 * fromRangesToArray(cadena: string): number[]
 * fromRangesToArray("-3_-1, 3, 5_7") =  [5, 6, 7, 9, 12, 13, 14]
 * ```
 */

export function fromRangesToArray(cadena: string): number[] {
  const cadenaCompleta: string = cadena.replace(/ /g, '');
  const cadComas: string[] = cadenaCompleta.split(',');
  const restultado: number[] = [];

  for (let i: number = 0; i < cadComas.length; i++) {
    if (cadComas[i].includes('_')) { // dentro de _
      const n1: number = parseInt(cadComas[i].split('_')[0]);
      const n2: number = parseInt(cadComas[i].split('_')[1]);
      for (let i: number = n1; i <= n2; i++) {
        restultado.push(i);
      }
    } else {
      restultado.push(parseInt(cadComas[i])); // cambias a entero y resultado final
    }
  }
  return restultado;
}
console.log(fromRangesToArray("5_7, 9, 12_14"));
console.log(fromRangesToArray("-3_-1, 3, 5_7"));
console.log(fromRangesToArray("17"));
console.log(fromRangesToArray("3, 5_7, 9_10"));