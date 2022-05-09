/*
Ejercicio 10 - Distancia de Manhattan

Formula: |camino1| - |camino2|
*/

function distanciaManhattan(camino1: number[], camino2: number[]): number {
  let resultado: number = 0;

  for (let i: number = 0; i < camino1.length; i++) {
    resultado += Math.abs(camino1[i] - camino2[i]);
  }
  return resultado;
};
const resultado1: number = distanciaManhattan([1, 2], [2, 3]);
const resultado2: number = distanciaManhattan([2, 2], [5, 6]);

console.log(`Distancia de Manhattan entre [1, 2], [2, 3]: ${resultado1}`);
console.log(`Distancia de Manhattan entre [2, 2], [5, 6]: ${resultado2}`);