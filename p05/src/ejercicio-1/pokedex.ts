import {Pokemon} from './pokemon';

export class Pokedex {
  private basePokemon: Pokemon[] = [];
  constructor() {};

  public añadirPokemon(pokemon: Pokemon) {
    this.basePokemon.push(pokemon);
  }

  public eliminarPokemon(pokemon: Pokemon) {
    let posicion: number = -1;
    this.basePokemon.forEach((iterador) => {
      if (iterador === pokemon) {
        posicion = this.basePokemon.indexOf(iterador);
      }
    });
    if (posicion == -1) {
      console.log('Pokemon no encontrado');
    } else {
      this.basePokemon.splice(posicion, 1);
    }
  };

  public pokedexSize(): number {
    return this.basePokemon.length;
  }

  public buscarPokemon(pokemon: Pokemon) {
    let posicion: number = -1;
    this.basePokemon.forEach((iterador) => {
      if (iterador === pokemon) {
        posicion = this.basePokemon.indexOf(iterador);
      }
    });
    if (posicion == -1) {
      return null;
    } else {
      return this.basePokemon[posicion];
    }
  }
};