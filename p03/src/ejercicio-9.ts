/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/*
Ejercicio 9 - Astérix no entiende a estos romanos

- romanToDecimaldecimal romano a a decimal
- decimalToRoman entero a romano
*/

function romanNumbers (numero: string): number {
  let resultado: number = 0;
  switch (numero) {
    case 'M':
      resultado = 1000;
      break;
    case 'D':
      resultado = 500;
      break;
    case 'C':
      resultado = 100;
      break;
    case 'L':
      resultado = 50;
      break;
    case 'X':
      resultado = 10;
      break;
    case 'V':
      resultado = 5;
      break;
    case 'I':
      resultado = 1;
      break;
  }
  return resultado;
};
function romanToDecimal(cadena: string): number {
  let numero: number = 0;

  for (let i: number = 0; i < cadena.length; i++) {
    let actual: string = cadena[i];
    let despues: string = cadena[i + 1];
    if (romanNumbers(despues) > romanNumbers(actual)) {
      numero += romanNumbers(despues) - romanNumbers(actual);
      i++;
    } else {
      numero += romanNumbers(actual);
    }
  }
  return numero;
}

function decimalToRoman(numero: number): string {
  let result: string = "";
  const numeros: number [] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos: string [] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i: number = 0; numero; i++) {
    while (numero >= numeros[i]) {
      result += romanos[i];
      numero -= numeros[i];
    }
  }
  return result;
}

console.log('El número romano -> "' + decimalToRoman(10) + '" es equivalente al número entero en base decimal 10.');
console.log('El número romano -> "' + decimalToRoman(50) + '" es equivalente al número entero en base decimal 50.');
console.log('El número romano -> "' + decimalToRoman(1995) + '" es equivalente al número entero en base decimal 1995.');

console.log('El número entero en base decimal -> "' + romanToDecimal('X') + '" es equivalente al número romano X.');
console.log('El número entero en base decimal -> "' + romanToDecimal('C') + '" es equivalente al número romano C.');
console.log('El número entero en base decimal -> "' + romanToDecimal('MCMXCV') + '" es equivalente al número romano MCMXCV.');