/* eslint-disable max-len */
/*
Ejercicio 7 - Wonder Woman
*/
function wonderWoman(cabezas, n, ataques) {
    let cabezasN = n; // n cabezas
    let valor1 = 1;
    for (let i = 1; i <= ataques; i++) {
        cabezas--; // decreciente
        for (valor1 = 1; valor1 <= i; valor1++) { // recorre
            cabezasN *= valor1; // actualiza el valor n cabezas y lo multiplica
        }
        cabezas += cabezasN; // suma n cabezas
        cabezasN = n;
    }
    return cabezas;
}
;
console.log('Cabezas iniciales = 5\nn = 10\nAtaques = 3\n-> Cerberus tiene: (' + wonderWoman(5, 10, 3) + ') cabezas al final\n');
console.log('Cabezas iniciales = 2\nn = 1\nAtaques = 1\n-> Cerberus tiene: (' + wonderWoman(2, 1, 1) + ') cabezas al final');
