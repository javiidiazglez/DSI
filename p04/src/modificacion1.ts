// /* eslint-disable valid-jsdoc */
// /* eslint-disable padded-blocks */
// /* eslint-disable space-before-blocks */
// /* eslint-disable indent */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable spaced-comment */
// /* eslint-disable no-unused-vars */
// /* eslint-disable max-len */
// /*
// Escriba una función performNichomachusClassification que reciba como parámetro un array de números naturales e indique, para cada uno de ellos, si es perfecto, abundante o deficiente, atendiendo a la clasificación propuesta por el matemático griego Nicomachus, la cual se basa en lo siguiente:
// Un número es perfecto si la suma de sus divisores (sin contar el propio número) es igual al número. Por ejemplo, el numero 6 es perfecto, dado que sus divisores son 1, 2, 3 y 6 y la suma de esos divisores (sin contar al propio número) es 1 + 2 + 3 = 6. A esta suma se le conoce con el nombre de suma proporcional.
// Un número es abundante si su suma proporcional es mayor que el propio número.
// Un número es deficiente si su suma proporcional es menor que el propio número.
// La función desarrollada debe devolver un array de un tipo de datos propio que proponga. Al mismo tiempo, si recibe algún número no natural en el array de entrada, deberá retornar undefined.
// */

// // [4,6,10] = ['D','P','D']
// /**
//  * @param n numero a agregar en el array
//  */
// function calcularDivisor(n: number[]): number[] {
//   //let n: number = 0;
//   //let result: string[] = [];
//   let aux: string = '';
//   //for (let i = 0; i < cadena.length; i++) {
//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) {
//         //console.log('es divisor');// es divisor
//       }
//     }
//   //}
// }
// //console.log(divisor(10));
// /**
//  * Función para calcular un array y que devuelva si es perfecto, la suma de sus divisores
//  * en caso contrario, abundante si es mayor que el propio numero o si es deficiente menor 
//  * que el propio número
//  * @param cadena array de cadenas que sirve para agregar el retorno
//  * @returns result retorna el resultado 
//  * ````typescript
//  * performNichomachusClassification([1,4,6])
//  * ````
//  */
// function performNichomachusClassification(cadena: number[]): (string[]|undefined) {
//   let result: string[]|undefined = [];
//   let divisores: number[] = [];
//   let suma: number = 0;
//   //let valores: number =0;

//   for (let i = 0; i < cadena.length; ++i) { // recorres
//     if (cadena[i] < 0) {
//       result.push(undefined); // menores que 0 
//     } else {
//       divisores = calcularDivisor(cadena[i]);

//       divisores.forEach((valores) => { // llamo la funcion
//         suma = suma + valores; // calculo la suma
//       });

//       if (cadena[i] === suma) {
//         result.push('perfecto');
//       } else if (suma > cadena[i]) {
//         result.push('abundante');
//       } else {
//         result.push('deficiente');
//       }
//       suma = 0;
//     }    
//   }
//   return result;
// }

// //console.log(performNichomachusClassification('6'));


