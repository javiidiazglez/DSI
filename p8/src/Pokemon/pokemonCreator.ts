export {PokemonCreator};
import {LuchadorCreator} from '../Luchador/luchadorCreator';
import {Luchador} from '../Luchador/luchador';
import {Pokemon} from '../Pokemon/pokemon';
import {Tipos} from '../Pokemon/pokemon';

/**
 * Clase creadora de Pokemons, extiende a la creadora de Luchadores
 */
class PokemonCreator extends LuchadorCreator {
  /**
   * Constructor de la clase creadora de Pokemons
   * @param nombre Nombre del Pokemon
   * @param tipo Tipo del Pokemon
   * @param ataque Ataque del Pokemon
   * @param defensa Defensa del Pokemon
   * @param velocidad Velocidad del Pokemon
   * @param vida vida del Pokemon
   */
  constructor(private nombre: string, private tipo: Tipos,
              private ataque: number, private defensa: number,
              private velocidad: number, private vida: number) {
    super();
  }

  /**
   * Factory Method, crea y devuelve un objeto Pokemon (Luchador)
   * @returns un objeto Fighter (luchador)
   */
  public factoryMethod(): Luchador {
    return new Pokemon(this.nombre, this.tipo, this.ataque, this.defensa, this.velocidad, this.vida);
  }
}