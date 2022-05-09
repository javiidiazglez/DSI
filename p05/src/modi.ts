/* eslint-disable max-len */

/*
Cree una clase Hexadecimal, cuyo constructor toma un número entero positivo. Cree métodos toString y valueOf que devuelvan, respectivamente, la representación en cadena en hexadecimal del número entero, o el propio número entero. Algunos ejemplos de cosas que podría hacer con su clase serían:

  const myHexNumber = new Hexadecimal(38)
  myHexNumber.toString() // returns the string "0x26"
  myHexNumber.valueOf() // returns the number 38

Cree también dos métodos add y substract que permitan sumar y restar, respectivamente, dos números hexadecimales, esto es, dos instancias de la clase Hexadecimal:

  let myFirstHexValue = new Hexadecimal(23)
  let mySecondHexValue = new Hexadecimal(15)
  myFirstHexValue.add(mySecondHexValue).valueOf() // returns the number 38
  myFirstHexValue.add(mySecondHexValue).toString() // returns the string "0x26"

Por último, incluya en la clase Hexadecimal un método denominado parse que reciba una cadena de caracteres representando un número en hexadecimal y que devuelva el número entero correspondiente:

  Hexadecimal.parse("0x26") // returns the number 38
*/
/**
 * Representa toda la información de Hexadecimal
 * tiene un @numero con atributo privado
 * @param Hexadecimal Clase que contiene hexadecimal
 */

export class Hexadecimal {
  constructor(
    private numero: number) { }

  public parseHexadecimal() {
    // parseInt(numero, 16);
    // return numero;
    return '0x' + this.numero.toString(16); // convierte a hexadecimal
  }

  public parseNumero() {
    return this.numero.valueOf(); // devuelve el numero 38
  }

  public addNumero(num1: number, num2: number) {
    let suma: number = 0;
    suma = num1 + num2;
    return suma;
  }
  public parseA() {
    return this.numero.toString(); // convierte a hexadecimal
  }
}
const myHexNumber = new Hexadecimal(38);

console.log(myHexNumber.parseHexadecimal());
console.log(myHexNumber.parseNumero());

// let myFirstHexValue = new Hexadecimal(23);
// let mySecondHexValue = new Hexadecimal(15);
// myFirstHexValue.addNumero(mySecondHexValue).parseNumero(); // returns the number 38
// myFirstHexValue.addNumero(mySecondHexValue).parseHexadecimal(); // returns the string "0x26

// console.log(Hexadecimal.parseA("0x26"));