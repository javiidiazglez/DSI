/* eslint-disable max-len */

import {Pokemon} from './pokemon';

/**
 * Clase Combate. Dos Pokemons
 */

export class Combate {
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  /**
   * Array que almacenerá el valor de los ataques
   */

  private datos: number[] = new Array(2);

  /**
   * Constructor de la clase Combate
   * @param pokemon1 Objeto de la clase Pokemon1
   * @param pokemon2 Objeto de la clase Pokemon2
   */

  constructor(
      pokemon1: Pokemon,
      pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }
  /**
   * Funcion combate Pokemon.
   * Combate entre los dos pokemon.
   * @returns Ganador del combate
   */

  combatePokemon(): Pokemon {
    this.datos[0] = this.calculoCombate(this.pokemon1.getTipo(), this.pokemon2.getTipo(), this.pokemon1.getAtaque(), this.pokemon2.getDefensa());
    this.datos[1] = this.calculoCombate(this.pokemon2.getTipo(), this.pokemon1.getTipo(), this.pokemon2.getAtaque(), this.pokemon1.getDefensa());
    let iterador: number = 1;
    console.log("\nCombate entre: (" + this.pokemon1.getNombre() + ") vs (" + this.pokemon2.getNombre() +")");

    while ((this.pokemon1.hpCombate > 0) && (this.pokemon2.hpCombate > 0)) {
      console.log("\nRonda: " + iterador);
      if ((iterador % 2) == 0) {
        console.log("[" + this.pokemon2.getNombre() + "] causa -" + this.datos[1] + " de daño a -> [" + this.pokemon1.getNombre() + "]");
        this.pokemon1.hpCombate -= this.datos[1];
      } else {
        console.log("[" + this.pokemon1.getNombre() + "] causa -" + this.datos[0] + " de daño a -> [" + this.pokemon2.getNombre() + "]");
        this.pokemon2.hpCombate -= this.datos[0];
      }
      iterador++;
      console.log("[" + this.pokemon1.getNombre() + "] -> Vida: (" + (this.pokemon1.hpCombate).toFixed(4) + ") vs [" + this.pokemon2.getNombre() +
      "] -> Vida: (" + (this.pokemon2.hpCombate).toFixed(4) + ")");
    }
    console.log("\nGanador -> [" + (this.pokemon1.hpCombate <= 0 ? this.pokemon2.getNombre() : this.pokemon1.getNombre()) + "]");

    if (this.pokemon1.hpCombate <= 0) {
      return this.pokemon2;
    } else {
      return this.pokemon1;
    }
  }

  /**
   * Calcula el daño del ataque del pokemon 1 al pokemon 2
   * @param tipoPokemon1 Tipo del pokemon 1
   * @param tipoPokemon2 Tipo del pokemon 2
   * @param ataque Ataque del pokemon 1
   * @param defensa Defensa del pokemon 2
   * @returns Daño del pokemon 1 al pokemon 2
   */

  calculoCombate(tipoPokemon1: string, tipoPokemon2: string, ataque: number, defensa: number): number {
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
        case ('Hierba'):
        case ('Electrico'):
          efectividad = 0.5;
          break;
        case 'Fuego':
          efectividad = 2;
          break;
      }
    } else if (tipoPokemon1 === 'Electrico') {
      switch (tipoPokemon2) {
        case ('Fuego'):
        case ('Hierba)'):
          efectividad = 1;
          break;
        case 'Agua':
          efectividad = 2;
          break;
      }
    } else {
      switch (tipoPokemon2) {
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
    let daño: number = 50 * (ataque/defensa) * efectividad;
    return parseFloat(daño.toFixed(4));
  }
}