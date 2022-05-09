// node dist/Modificacion/suma.js src/Modificacion/numberList.txt +

import {readFile} from 'fs';

/**
 * Function que permite leer el fichero hacer las operaciones
 */
readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log('Error fichero leer');
  } else {
    let suma: number = 0;
    const numeros: string[] = data.toString().split(', ');
    switch (process.argv[3]) {
      case '+':
        numeros.forEach((numeros) => {
          suma += +numeros;
        });
        break;
      case '-':
        numeros.forEach((numeros) => {
          suma -= +numeros;
        });
        break;
      case '*':
        suma = 1;
        numeros.forEach((numeros) => {
          suma = suma * +numeros;
        });
        break;
      default:
        console.log('Introduzca un operador valido');
        break;
    }

    console.log(suma);
  }
});