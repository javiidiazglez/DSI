/* eslint-disable max-len */
/*
Ejercicio 6 - Contando IPs

- 2 cadenas(IPv4) y devolver valor numerico(numero IP's)
Ejemplos:

ipsInRange(“10.0.0.0”, “10.0.0.50”) == 50
ipsInRange(“10.0.0.0”, “10.0.1.0”) == 256
ipsInRange(“20.0.0.10”, “20.0.1.0”) == 246
*/
function ip2int(ip) {
    let ipSeparar = ip.split('.'); // separamos los puntos
    let result = 0;
    for (let i = 3; i >= 0; i--) {
        result += parseInt(ipSeparar[i]) * Math.pow(256, 3 - i); // 256 direcciones, derecha = 0, izquierda = 3
    }
    return result;
}
function ipsInRange(ipInicio, ipFinal) {
    let ip1 = ip2int(ipInicio);
    let ip2 = ip2int(ipFinal);
    if (ip1 > ip2) {
        [ip1, ip2] = [ip2, ip1];
    }
    return (ip2 - ip1);
}
const ip1 = "10.0.0.0";
const ip2 = "10.0.0.50";
const solRange = ipsInRange(ip1, ip2);
console.log(`Rangos entre: ${ip1} y ${ip2} es: ${solRange}`);
const ip3 = "20.0.0.0";
const ip4 = "20.0.1.0";
const solRange1 = ipsInRange(ip3, ip4);
console.log(`Rangos entre: ${ip3} y ${ip4} es: ${solRange1}`);
const ip5 = "20.0.0.10";
const ip6 = "20.0.1.0";
const solRange2 = ipsInRange(ip5, ip6);
console.log(`Rangos entre: ${ip5} y ${ip6} es: ${solRange2}`);
