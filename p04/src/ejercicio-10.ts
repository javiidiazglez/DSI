/* eslint-disable no-unused-vars */

// Ejercicio 10 - El Cartesiano

/**
 * __El Cartesiano__
 * @param cadena cadena de strings
 * @returns devuelve el resultado del cartesiano
 * ```ts
 * cartesiano(cadena: string[]): boolean | undefined
 * cartesiano(['n', 's', 'e', 'o']) = true
 * ```
 */

export function cartesiano(cadena: string[]): boolean | undefined {
  if (cadena.length < 1) {
    return undefined;
  }
  let rows: number = 0;
  let cols: number = 0;
  for (let i: number = 0; i < cadena.length && i < 10; i++) {
    switch (cadena[i]) {
      case 'n':
        cols++;
        break;
      case 's':
        cols--;
        break;
      case 'e':
        rows++;
        break;
      case 'o':
        rows--;
        break;
      default:
        return undefined;
    }
  }
  return ((rows == 0) && (cols == 0)) ? true : false;
}

console.log(cartesiano(['n', 's', 'e', 'o']));
console.log(cartesiano(['n', 's', 'e', 'o', 'n']));
console.log(cartesiano(['n', 's', 'e', 'o', 'n', 'd']));