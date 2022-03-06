/* eslint-disable max-len */
/*
Ejercicio 8 - Entrenador Pokemon

daño = 50 * (ataque / defensa) * efectividad
Combate:
- Super efectivo = x2 de daño
- Neutral = x1 de daño
- No muy efectivo = x0.5 de daño

Calcular el daño de ataque que tienen los pokemons: fuego, agua, hierba y eléctrico

Emparejamiento:
-fuego > hierba
- fuego < agua
- fuego = eléctrico
- agua < hierba
- agua < eléctrico
- hierba = eléctrico
*/

function combatePokemon(tipoPokemon1: string, tipoPokemon2: string,
    ataque: number, defensa: number): number {
  let efectividad: number = 0;
  if (tipoPokemon1 === tipoPokemon2) {
    efectividad = 0.5;
  } else if (tipoPokemon1 === 'Fuego') {
    switch (tipoPokemon2) {
      case 'Hierba':
        efectividad = 2;
        break;
      case 'Electrico':
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 0.5;
        break;
    }
  } else if (tipoPokemon1 === 'Agua') {
    switch (tipoPokemon2) {
      case ('Hierba' || 'Electrico'):
        efectividad = 0.5;
        break;
      case 'Fuego':
        efectividad = 2;
        break;
    }
  } else if (tipoPokemon1 === 'Electrico') {
    switch (tipoPokemon2) {
      case ('Fuego' || 'Hierba)'):
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 2;
        break;
    }
  } else {
    switch (tipoPokemon2) { // Hierba
      case 'Electrico':
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 2;
        break;
      case 'Fuego':
        efectividad = 0.5;
        break;
    }
  }
  let daño: number = 50 * (ataque / defensa) * efectividad;
  return daño;
}

console.log('Pokemon 1 [Electrico] (Ataque: 54) VS Pokemon 2 [Agua] (Defensa: 46) -> Daño: ' +
  combatePokemon('Electrico', 'Agua', 54, 46));

console.log('Pokemon 3 [Agua] (Ataque: 2) VS Pokemon 4 [Hierba] (Defensa: 7) -> Daño: ' +
  combatePokemon('Agua', 'Hierba', 2, 7));

console.log('Pokemon 5 [Fuego] (Ataque: 2) VS Pokemon 6 [Fuego] (Defensa: 1) -> Daño: ' +
  combatePokemon('Fuego', 'Fuego', 2, 1));