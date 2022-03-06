/* eslint-disable max-len */
/*
Ejercicio 4 - Conversor ISBN

9 dígitos (0-9)
Sea una X => valor ‘10'
Ejemplo: (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0
-> ISBN-10 es válido

- Una función isValidISBN => cadenaISBN de caractere => devolverá verdadero o falso
“3-598-21508-8" o “3598215088”
caracter X sería “3-598-21507-X” o “359821507X” =>  ISBN-10 válido
*/
function isValidISBN(cadenaISBN) {
    cadenaISBN = cadenaISBN.replace(/[-]/g, ""); // quitar guiones
    if (cadenaISBN.length < 10) {
        return false;
    }
    let suma = 0;
    for (let i = 0; i < cadenaISBN.length; i++) {
        if (cadenaISBN[i] == "X") {
            suma = suma + (10 * (cadenaISBN.length - i));
        }
        else {
            suma = suma + (parseInt(cadenaISBN[i]) * (cadenaISBN.length - i));
        }
    }
    if (suma % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let cadenaISBN = "3-598-21508-8";
let validISBN = isValidISBN(cadenaISBN);
console.log(`¿El ISBN de "${cadenaISBN}" es válido?: ${validISBN}`);
cadenaISBN = "3598215088";
validISBN = isValidISBN(cadenaISBN);
console.log(`¿El ISBN de "${cadenaISBN}" es válido?: ${validISBN}`);
cadenaISBN = "3-598-21507-X";
validISBN = isValidISBN(cadenaISBN);
console.log(`¿El ISBN de "${cadenaISBN}" es válido?: ${validISBN}`);
cadenaISBN = "359821507X";
validISBN = isValidISBN(cadenaISBN);
console.log(`¿El ISBN de "${cadenaISBN}" es válido?: ${validISBN}`);
cadenaISBN = "3-598-21508-9";
validISBN = isValidISBN(cadenaISBN);
console.log(`¿El ISBN de "${cadenaISBN}" es válido?: ${validISBN}`);
