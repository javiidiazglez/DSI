/* eslint-disable max-len */

// Ejercicio 6 - Mover los ceros al final
/**
 * __Mover los ceros al final__
 * @param cadena Cadena de numeros
 * @returns Devuelve el vector reordenado con los ceros al final
 * ```ts
 * moveZeros (cadena :number[])
 * moveZeros([1, 0, 1, 2, 0, 1, 3]) = [1, 1, 2, 1, 3, 0, 0]
 * ```
 */

export function moveZeros(cadena: number[]) {
  let resultado: number[] = [];
  let contador: number = 0;
  cadena.forEach((valor) => {
    if (valor == 0) {
      contador++;
    } else {
      resultado.push(valor);
    }
  });
  while (contador--) {
    resultado.push(0);
  }
  return resultado;
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));