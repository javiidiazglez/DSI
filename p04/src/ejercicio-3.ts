/* eslint-disable max-len */
// Ejercicio 3 - Decodificar coloresResistencias

/**
 * __Decodificación Resistencias__
 * @param coloresResistencias Array de colores Negro: 0 Marrón: 1 Rojo: 2 Naranja: 3 Amarillo: 4 Verde: 5 Azul: 6 Violeta: 7 Gris: 8 Blanco: 9
 * @returns parseInt(resultado) Devuelve los colores en entero
 * ```ts
 * decodeResistor(coloresResistencias: string[])
 * decodeResistor([`Azul`, `Verde`]) = 65
 * ```
 */

export function decodeResistor(coloresResistencias: string[]) {
  const colores: string[] = [`Negro`, `Marron`, `Rojo`, `Naranja`, `Amarillo`, `Verde`, `Azul`, `Violeta`, `Gris`, `Blanco`];
  let resultado: string = '';
  let contador: number = 0;

  coloresResistencias.forEach((sol) => {
    if (contador < 2) {
      resultado += colores.indexOf(sol).toString();
    }
    contador++;
  });
  return parseInt(resultado); // convierte la cadena en numero entero
};

console.log(`DecodeResistor: ${decodeResistor([`Azul`, `Verde`])}`);
console.log(`DecodeResistor: ${decodeResistor([`Rojo`, `Negro`])}`);