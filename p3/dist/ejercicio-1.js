/*
Ejercicio 1 - Años bisiestos
Cree una función isLeapYear que devuelva si un año concreto es bisiesto o no.
- Cada año que es divisible por 4.
- Excepto cada año que es divisible por 100.
- Al menos que el año también sea divisible por 400.
*/
function isLeapYear(year) {
    if ((year % 4) === 0) {
        if (((year % 100) != 0) || ((year % 400) === 0)) {
            return ("Es bisiesto");
        }
    }
    return ("No es bisiesto");
}
let numero1 = 1900;
let funcion1 = isLeapYear(numero1);
console.log(`El año "${numero1}" -> ${funcion1}`);
numero1 = 1920;
funcion1 = isLeapYear(numero1);
console.log(`El año "${numero1}" -> ${funcion1}`);
