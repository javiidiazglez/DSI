/* eslint-disable max-len */

// Ejercicio 7 - Factoría de multiplicaciones

/**
 * __Factoría de multiplicaciones__
 * @param cadena cadena de numeros
 * @returns Devuelve el vector multiplicado
 * ```ts
 * function multiplyAll(cadena :number[])
 *  * function multiplyAll([2, 6, 8])(3) = [6, 18, 24]
 * ```
 */

export function multiplyAll(cadena: number[]) {
  return function(numero: number): number[] {
    let result: number[] = [];
    for (let valor of cadena) {
      result.push(valor * numero);
    }
    return result;
  };
};

console.log(multiplyAll([2, 6, 8])(3));