/* eslint-disable max-len */

// Ejercicio 9 - Puntos n-dimensionales

export type nPunto = [number, number, number, ...number[]];

/**
 * __Sumar dos puntos__
 * @param p1 punto 1 para sumar
 * @param p2 punto 2 para sumar
 * @returns devuelve la suma de los dos puntos
 */

export function suma(p1: nPunto, p2: nPunto): nPunto|string {
  let resultado: nPunto = [0, 0, 0];
  if (p1.length != p2.length) {
    return 'No compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    resultado[i] = p1[i] + p2[i];
  }
  return resultado;
}

/**
 * __Restar dos puntos__
 * @param p1 punto 1 para restar
 * @param p2 punto 2 para restar
 * @returns devuelve la restar de los dos puntos
 */

export function resta(p1: nPunto, p2: nPunto): nPunto|string {
  let resultado: nPunto = [0, 0, 0];
  if (p1.length != p2.length) {
    return 'No compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    resultado[i] = p1[i] - p2[i];
  }
  return resultado;
}

/**
 * __Multiplicar dos puntos__
 * @param p1 punto 1 para multiplicar
 * @param numero numero que será multiplicado
 * @returns devuelve la multiplicación
 */

export function producto(p1: nPunto, numero: number): nPunto {
  let resultado: nPunto = [0, 0, 0];
  let indice: number = 0;
  for (let valor of p1) {
    resultado[indice] = valor * numero;
    indice++;
  }
  return resultado;
}

/**
 * __Dividir dos puntos__
 * @param p1 punto 1 para dividir
 * @param p2  punto 2 para dividir
 * @returns devuelve la distancia entre los dos puntos
 */

export function distEuclidea(p1: nPunto, p2: nPunto): number|string {
  let resultado: number = 0;
  if (p1.length != p2.length) {
    return 'No compatibles';
  }
  for (let i: number = 0; i < p1.length; i++) {
    resultado += Math.pow(p1[i] - p2[i], 2);
  }
  resultado = Math.sqrt(resultado);
  resultado = parseFloat(resultado.toFixed(5));
  return resultado;
}

console.log(suma([1, 2, 4, 1], [4, 1, 1, 3]));
console.log(resta([1, 2, 4, 1], [4, 1, 1, 3]));
console.log(producto([1, 2, 3], 5));
console.log(distEuclidea([1, 2, 3], [6, 6, 3]));