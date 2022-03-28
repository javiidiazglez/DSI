import {Fighter, Stats} from './fighter';
/**
 * Clase Star Wars
 */
export class StarWars extends Fighter {
  private universo: string = 'Star Wars';
  /**
   * Constructor de la clase Star Wars
   * @param nombre Nombre del personaje de Star Wars
   * @param peso Peso del personaje de Star Wars
   * @param altura Altura del personaje de Star Wars
   * @param frase Frase personaje de Star Wars
   * @param estadisticas Estadisticas personaje de Star Wars
   */
  constructor(nombre: string,
    peso: number,
    altura: number,
    frase: string,
    estadisticas: Stats) {
    super(nombre, peso, altura, frase, estadisticas);
  }
  /**
   * Universo del luchador en Star Wars
   * @returns universo
   */
  getUniverso() {
    return this.universo;
  }
}