/* eslint-disable max-len */

// Ejercicio 8 - Puntos bi-dimensionales

export type Punto = [number, number];

/**
 * __Sumar dos puntos__
 * @param p1 punto 1 para sumar
 * @param p2 punto 2 para sumar
 * @returns devuelve la suma de los dos puntos
 */

export function suma(p1: Punto, p2: Punto): Punto {
  return [p1[0] + p2[0], p1[1] + p2[1]];
}

/**
 * __Restar dos puntos__
 * @param p1 punto 1 para restar
 * @param p2 punto 2 para restar
 * @returns devuelve la restar de los dos puntos
 */

export function resta(p1: Punto, p2: Punto): Punto {
  return [p1[0] - p2[0], p1[1] - p2[1]];
}

/**
 * __Multiplicar dos puntos__
 * @param p1 punto 1 para multiplicar
 * @param numero numero que será multiplicado
 * @returns devuelve la multiplicación
 */

export function producto(p1: Punto, numero: number): Punto {
  return [p1[0] * numero, p1[1] * numero];
}

/**
 * __Dividir dos puntos__
 * @param p1 punto 1 para dividir
 * @param p2  punto 2 para dividir
 * @returns devuelve la distancia entre los dos puntos
 */

export function distEuclidea(p1: Punto, p2: Punto): number {
  return parseFloat(Math.sqrt(Math.pow(p1[0] - p2 [0], 2) + Math.pow(p1[1] - p2 [1], 2)).toFixed(5));
}

console.log(suma([5, 2], [1, 3]));
console.log(resta([5, 2], [1, 3]));
console.log(producto([5, 2], 3));
console.log(distEuclidea([5, 7], [9, 2]));