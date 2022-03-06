/* eslint-disable max-len */
/*
Ejercicio 5 - Orden descendente
*/
function sortArray(numero) {
    return Number(numero.toString().split('').sort((a, b) => parseInt(b) - parseInt(a)).join(''));
}
const array1 = 123;
const array2 = 145263;
const array3 = 123456789;
console.log(`Entrada: número (${array1}) -> ordenado descendente es la Salida: ` + sortArray(123));
console.log(`Entrada: número (${array2}) -> ordenado descendente es la Salida: ` + sortArray(145263));
console.log(`Entrada: número (${array3}) -> ordenado descendente es la Salida: ` + sortArray(123456789));
