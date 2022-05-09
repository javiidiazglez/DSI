/* eslint-disable max-len */

// Ejercicio 4 - Compresión de números en rangos

/**
 * __Palabras encadenadas__
 * @param palabras Array de palabras encadenadas
 * @returns Devuelve las letras que encadenan
 * ```ts
 * meshArray (palabras :string[])
 * meshArray (['apply', 'plywood']) = 'ply'
 * ```
 */

export function meshArray(palabras: string[]) {
  let resultado: string = "";
  for (let i: number = 0; i < palabras.length - 1; i++) {
    let palabra1: string[] = palabras[i].split("");
    let palabra2: string[] = palabras[i + 1].split("");
    let palabraLenght: number = palabra1.length - 1;
    let contador: number = 0;

    while (palabraLenght > -1) {
      if (palabra1[palabraLenght] == palabra2[0]) {
        break;
      } else {
        palabraLenght--;
        contador++;
      }
    }
    for (let k: number = 0; k <= contador; k++) {
      if (palabra1[palabraLenght] != palabra2[k]) {
        return "Error al encadenar";
      } else {
        resultado += palabra1[palabraLenght];
      }
      palabraLenght++;
    }
  }
  return resultado;
}

console.log('"apple" and "peggy" = ' + meshArray(['apple', 'peggy']));
console.log('"apply" and "plywood" = ' + meshArray(['apply', 'plywood']));