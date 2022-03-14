/* eslint-disable max-len */

// Ejercicio 5 - Calcular la media y concatenar cadenas

/**
 * __Calcular la media y concatenar cadenas__
 * @param cadena Cadena de entrada con números o letras.
 * @returns Una cadena donde el primer valor es la media de los valores numericos y en el segundo la concatenacion de todos los caracteres.
 * ```ts
 * meanAndConcatenate(cadena: (string | number)[])
 * meanAndConcatenate(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])) = [3.6, 'udiwstagwo']
 * ```
 */

export function meanAndConcatenate(cadena: (string | number)[]) {
  let media: number = 0;
  let contador: number = 0;
  let palabra: string = '';
  let solucion: (string | number)[] = [];

  cadena.forEach((valor) => {
    if (typeof valor === "number") {
      media += valor;
      contador++;
    } else {
      palabra += valor;
    }
  });
  media = media / contador;
  solucion[0] = media;
  solucion[1] = palabra;
  return solucion;
}

console.log(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]));