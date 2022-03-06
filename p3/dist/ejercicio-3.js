/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
/*
Ejercicio 3 - Conversor de estilo

Desarrolle dos funciones fromSnakeToCamelCase y fromCamelToSnakeCase
- cadena de texto en formato Snake Case ->  convertirá a formato Camel Case
- cadena de texto en formato Camel Case ->  convertirá a formato Snake Case
*/
function fromSnakeToCamelCase(cadena) {
    if (/[A-Z]/.test(cadena[0])) { // añadimos el test (RegExp)
        cadena = cadena.toLowerCase(); // mayusculas a minisculas
    }
    return cadena.replace(/([_]\w)/g, function (coincidir) {
        return coincidir[1].toUpperCase(); // Ejemplo => _ejemplo (todos los matches de la cadena)
    });
}
function fromCamelToSnakeCase(cadena) {
    if (/[A-Z]/.test(cadena[0])) {
        cadena = cadena.replace(cadena[0], cadena[0].toLowerCase()); // minusculas a mayusculas
    }
    return cadena.replace(/([A-Z])/g, '_$1').toLowerCase(); // _ejemplo => Ejemplo (todos los matches de la cadena)
}
let nombre = 'sample_string';
let funcion4 = fromCamelToSnakeCase(nombre);
console.log(`En formato Snake "${nombre}" -> se convierte a formato Camel como: "${funcion4}"`);
nombre = 'sampleString';
funcion4 = fromSnakeToCamelCase(nombre);
console.log(`En formato Camel "${nombre}" -> se convierte a formato Snake como: "${funcion4}"`);
nombre = 'the_stealth_warrior';
funcion4 = fromSnakeToCamelCase(nombre);
console.log(`En formato Snake "${nombre}" -> se convierte a formato Camel como: "${funcion4}"`);
nombre = 'theStealthWarrior';
funcion4 = fromCamelToSnakeCase(nombre);
console.log(`En formato Camel "${nombre}" -> se convierte a formato Snake como: "${funcion4}"`);
